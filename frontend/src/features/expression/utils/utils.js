import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const VISION_WASM_URL =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm";

const MODEL_ASSET_PATH =
  "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";

const MEDIA_PIPE_NOISE =
  /tensorflow|xnnpack|opengl|faceblendshapes|face_landmarker|inference_feedback|gl_context|vision_wasm|mediapipe|gpu delegate|created tensor|feedback manager|error checking is disabled/i;

const NOSE = 1;
const FOREHEAD = 10;
const CHIN = 152;
const LEFT_CHEEK = 234;
const RIGHT_CHEEK = 454;
const CALIBRATION_FRAMES = 12;
const GAZE_GAIN_X = 4.4;
const GAZE_GAIN_Y = 5.4;
const UPPER_BOX = "the upper box";
const LOWER_BOX = "the lower box";
const HEADING = "the AI Face Expression heading";
const DETECT_BUTTON = "the detect button";

export const CAMERA_ERROR_MESSAGE =
  "Camera or model failed. Allow camera permission and check your internet connection.";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function ignoreMediaPipeConsoleNoise() {
  const levels = ["error", "warn", "log", "info", "debug"];
  const originals = {};

  for (const level of levels) {
    const original = console[level];
    if (typeof original !== "function") continue;

    originals[level] = original;
    console[level] = (...args) => {
      const text = args
        .map((item) => {
          if (typeof item === "string") return item;
          if (item instanceof Error) return item.message;
          return "";
        })
        .join(" ");

      if (MEDIA_PIPE_NOISE.test(text)) return;
      original.apply(console, args);
    };
  }

  return () => {
    for (const level of Object.keys(originals)) {
      console[level] = originals[level];
    }
  };
}

function scoresFrom(categories) {
  return Object.fromEntries(
    categories.map((item) => [item.categoryName, item.score])
  );
}

export function classifyExpression(categories) {
  if (!categories) return "No face detected";

  const scores = scoresFrom(categories);
  const smile =
    ((scores.mouthSmileLeft || 0) + (scores.mouthSmileRight || 0)) / 2;
  const jawOpen = scores.jawOpen || 0;
  const blink = Math.max(scores.eyeBlinkLeft || 0, scores.eyeBlinkRight || 0);

  if (smile > 0.45) return "Smile detected";
  if (jawOpen > 0.35) return "Mouth open";
  if (blink > 0.65) return "Blink detected";
  return "Neutral face";
}

export function estimateRawGaze(landmarks) {
  if (!landmarks || landmarks.length <= RIGHT_CHEEK) return null;

  const nose = landmarks[NOSE];
  const forehead = landmarks[FOREHEAD];
  const chin = landmarks[CHIN];
  const leftCheek = landmarks[LEFT_CHEEK];
  const rightCheek = landmarks[RIGHT_CHEEK];
  if (!nose || !forehead || !chin || !leftCheek || !rightCheek) return null;

  const faceWidth =
    Math.hypot(leftCheek.x - rightCheek.x, leftCheek.y - rightCheek.y) || 1;
  const faceHeight = chin.y - forehead.y || 1;
  const midX = (leftCheek.x + rightCheek.x) / 2;

  return {
    // Nose shifts toward image-left when the head turns to the user's right.
    // Screen X is flipped later so a turn to the right moves toward the right.
    x: (midX - nose.x) / faceWidth,
    // Nose rises in the image when the head tilts up.
    y: (forehead.y - nose.y) / faceHeight,
  };
}

function medianPoint(points) {
  const mid = Math.floor(points.length / 2);
  const pick = (values) => {
    const sorted = [...values].sort((a, b) => a - b);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  return {
    x: pick(points.map((point) => point.x)),
    y: pick(points.map((point) => point.y)),
  };
}

export function gazeFromBaseline(raw, baseline) {
  return {
    x: clamp(0.5 - (raw.x - baseline.x) * GAZE_GAIN_X, 0.03, 0.97),
    // A upward nod must move toward the top of the screen.
    y: clamp(0.5 - (raw.y - baseline.y) * GAZE_GAIN_Y, 0.03, 0.97),
    calibrating: false,
  };
}

export function describeEyeDirection(x, y) {
  const horizontal = x < 0.38 ? "left" : x > 0.62 ? "right" : "";
  const vertical = y < 0.38 ? "up" : y > 0.62 ? "down" : "";

  if (!horizontal && !vertical) return "Your head is facing straight ahead.";
  if (!vertical) return `Your head is turned to the ${horizontal}.`;
  if (!horizontal) return `Your head is tilted ${vertical}.`;
  return `Your head is tilted ${vertical} and to the ${horizontal}.`;
}

export function describeScreenZone(x, y) {
  const horizontal = x < 0.34 ? "left side" : x > 0.66 ? "right side" : "center";
  const vertical = y < 0.34 ? "top" : y > 0.66 ? "bottom" : "middle";

  if (horizontal === "center" && vertical === "middle") return "the center of the screen";
  if (horizontal === "center") return `the ${vertical} of the screen`;
  return `the ${vertical} ${horizontal} of the screen`;
}

export function buildGazeMessage({ targetName, x, y }) {
  const direction = describeEyeDirection(x, y);
  if (targetName) return `You are looking at ${targetName}. ${direction}`;
  if (x > 0.38 && x < 0.62 && y > 0.34 && y < 0.66) {
    return `You are looking at the helmet. ${direction}`;
  }
  return `You are looking at ${describeScreenZone(x, y)}. ${direction}`;
}

function contains(region, px, py, pad = 0) {
  return (
    px >= region.left - pad &&
    px <= region.right + pad &&
    py >= region.top - pad &&
    py <= region.bottom + pad
  );
}

export function findLookTarget(x, y, regions, viewport) {
  const px = x * viewport.width;
  const py = y * viewport.height;
  const upper = regions.find((region) => region.name === UPPER_BOX);
  const lower = regions.find((region) => region.name === LOWER_BOX);
  const heading = regions.find((region) => region.name === HEADING);
  const detectButton = regions.find((region) => region.name === DETECT_BUTTON);

  const headerBottom = Math.max(heading?.bottom ?? 0, detectButton?.bottom ?? 0);
  const headerLimit = upper
    ? Math.min(headerBottom + 24, upper.top - 12)
    : headerBottom + 24;

  if (py <= headerLimit && heading && detectButton) {
    // An upward look swaps left and right against the boxes, so the
    // heading and the corner button are chosen from the mirrored position.
    const headerX = viewport.width - px;
    const split = (heading.right + detectButton.left) / 2;
    return headerX <= split ? heading : detectButton;
  }

  const helmetX = viewport.width - px;
  const centerX = viewport.width / 2;
  const sideBoxes = [upper, lower].filter(Boolean).filter((box) => {
    const boxCenterX = (box.left + box.right) / 2;
    return helmetX >= centerX ? boxCenterX > centerX + 30 : boxCenterX < centerX - 30;
  });

  if (sideBoxes.length && Math.abs(helmetX - centerX) > viewport.width * 0.06) {
    const top = Math.min(...sideBoxes.map((box) => box.top)) - 80;
    const bottom = Math.max(...sideBoxes.map((box) => box.bottom)) + 80;
    if (py >= top && py <= bottom) {
      return sideBoxes.reduce((closest, box) => {
        const mid = (box.top + box.bottom) / 2;
        const closestMid = (closest.top + closest.bottom) / 2;
        return Math.abs(py - mid) < Math.abs(py - closestMid) ? box : closest;
      });
    }
  }

  let best = null;

  for (const region of regions) {
    const inside =
      px >= region.left &&
      px <= region.right &&
      py >= region.top &&
      py <= region.bottom;
    if (!inside) continue;

    const area = (region.right - region.left) * (region.bottom - region.top);
    if (!best || area < best.area) best = { ...region, area };
  }

  return best;
}

async function createFaceLandmarker() {
  const vision = await FilesetResolver.forVisionTasks(VISION_WASM_URL);

  return FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: MODEL_ASSET_PATH,
      delegate: "CPU",
    },
    runningMode: "VIDEO",
    numFaces: 1,
    outputFaceBlendshapes: true,
  });
}

function stopStream(stream) {
  stream?.getTracks().forEach((track) => track.stop());
}

export function startExpressionDetection({ video, onUpdate, onRunning, onError }) {
  const restoreConsole = ignoreMediaPipeConsoleNoise();
  let landmarker;
  let stream;
  let animationId;
  let cancelled = false;
  let lastVideoTime = -1;
  let lastTimestamp = -1;
  let lastEmit = 0;
  let lastExpression = "";
  let baseline = null;
  let samples = [];
  let smooth = null;

  function nextTimestamp() {
    const now = performance.now();
    lastTimestamp = now <= lastTimestamp ? lastTimestamp + 1 : now;
    return lastTimestamp;
  }

  function emit(payload) {
    const now = performance.now();
    const expressionChanged = payload.expression !== lastExpression;
    if (!expressionChanged && now - lastEmit < 45) return;
    lastExpression = payload.expression;
    lastEmit = now;
    onUpdate(payload);
  }

  function recenter() {
    baseline = null;
    samples = [];
    smooth = null;
  }

  function smoothToward(point) {
    if (!smooth) {
      smooth = { x: point.x, y: point.y };
    } else {
      smooth = {
        x: smooth.x * 0.4 + point.x * 0.6,
        y: smooth.y * 0.32 + point.y * 0.68,
      };
    }
    return { x: smooth.x, y: smooth.y, calibrating: false };
  }

  function detect() {
    if (cancelled || !video || !landmarker) return;

    if (video.readyState >= 2 && video.currentTime !== lastVideoTime) {
      lastVideoTime = video.currentTime;

      try {
        const result = landmarker.detectForVideo(video, nextTimestamp());
        const categories = result.faceBlendshapes?.[0]?.categories;
        const expression = classifyExpression(categories);
        const raw = estimateRawGaze(result.faceLandmarks?.[0]);

        if (!raw) {
          smooth = null;
          emit({ expression, gaze: null });
        } else if (!baseline) {
          samples.push(raw);
          if (samples.length < CALIBRATION_FRAMES) {
            emit({
              expression,
              gaze: { x: 0.5, y: 0.5, calibrating: true },
            });
          } else {
            baseline = medianPoint(samples);
            emit({
              expression,
              gaze: smoothToward(gazeFromBaseline(raw, baseline)),
            });
          }
        } else {
          emit({
            expression,
            gaze: smoothToward(gazeFromBaseline(raw, baseline)),
          });
        }
      } catch {
        // A single bad frame should not stop the camera loop.
      }
    }

    animationId = requestAnimationFrame(detect);
  }

  function cleanup() {
    cancelled = true;
    cancelAnimationFrame(animationId);
    stopStream(stream);
    if (video && video.srcObject) video.srcObject = null;
    try {
      landmarker?.close();
    } catch {
      // Closing the model can throw if it was already released.
    }
    landmarker = undefined;
    restoreConsole();
  }

  async function initialize() {
    try {
      landmarker = await createFaceLandmarker();

      if (cancelled) {
        try {
          landmarker.close();
        } catch {
          // Already handled by cleanup.
        }
        return;
      }

      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      if (cancelled) {
        stopStream(stream);
        try {
          landmarker.close();
        } catch {
          // Already handled by cleanup.
        }
        return;
      }

      video.srcObject = stream;
      await video.play();

      if (cancelled) return;

      onRunning();
      detect();
    } catch (err) {
      console.error("Face detection error:", err);
      if (!cancelled) onError(CAMERA_ERROR_MESSAGE);
    }
  }

  initialize();

  return { stop: cleanup, recenter };
}
