"use client";

import { useEffect, useRef, useState } from "react";
import {
  buildGazeMessage,
  findLookTarget,
  startExpressionDetection,
} from "../utils/utils";
import HelmetViewer from "./HelmetViewer";
import styles from "./FaceExpressions.module.css";

const IDLE_GAZE_MESSAGE =
  "Click Detect face, point your head at the helmet, then at the upper box and the lower box.";

function readLookRegions(root) {
  return [...root.querySelectorAll("[data-look]")].map((element) => {
    const rect = element.getBoundingClientRect();
    return {
      name: element.dataset.look,
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
    };
  });
}

function classNames(...names) {
  return names.filter(Boolean).join(" ");
}

export default function FaceExpression() {
  const pageRef = useRef(null);
  const videoRef = useRef(null);
  const sessionRef = useRef(null);

  const [expression, setExpression] = useState("Detection is off");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [gaze, setGaze] = useState(null);
  const [activeLook, setActiveLook] = useState("");
  const [lookMessage, setLookMessage] = useState(IDLE_GAZE_MESSAGE);

  useEffect(() => () => sessionRef.current?.stop(), []);

  function updateGazeMessage(nextGaze) {
    if (!nextGaze) {
      setActiveLook("");
      setLookMessage("No face detected, so I can't see which way your head is pointing.");
      return;
    }

    if (nextGaze.calibrating) {
      setActiveLook("");
      setLookMessage("Point your head at the helmet while the center position is measured.");
      return;
    }

    const regions = pageRef.current ? readLookRegions(pageRef.current) : [];
    const target = findLookTarget(nextGaze.x, nextGaze.y, regions, {
      width: window.innerWidth,
      height: window.innerHeight,
    });

    setActiveLook(target?.name ?? "");
    setLookMessage(
      buildGazeMessage({
        targetName: target?.name,
        x: nextGaze.x,
        y: nextGaze.y,
      })
    );
  }

  function start() {
    const video = videoRef.current;
    if (!video || sessionRef.current) return;

    setError("");
    setIsStarting(true);
    setExpression("Starting camera...");
    setLookMessage("Starting camera...");

    sessionRef.current = startExpressionDetection({
      video,
      onRunning: () => {
        setIsStarting(false);
        setIsRunning(true);
      },
      onUpdate: ({ expression: nextExpression, gaze: nextGaze }) => {
        setExpression(nextExpression);
        setGaze(nextGaze);
        updateGazeMessage(nextGaze);
      },
      onError: (message) => {
        sessionRef.current?.stop();
        sessionRef.current = null;
        setIsStarting(false);
        setIsRunning(false);
        setGaze(null);
        setActiveLook("");
        setExpression("Detection is off");
        setLookMessage(IDLE_GAZE_MESSAGE);
        setError(message);
      },
    });
  }

  function stop() {
    sessionRef.current?.stop();
    sessionRef.current = null;
    setIsStarting(false);
    setIsRunning(false);
    setGaze(null);
    setActiveLook("");
    setExpression("Detection is off");
    setLookMessage(IDLE_GAZE_MESSAGE);
  }

  function recenter() {
    sessionRef.current?.recenter();
    setLookMessage("Point your head at the helmet while the center position is measured.");
  }

  function activeClass(name) {
    return activeLook === name ? styles.active : "";
  }

  return (
    <>
      <HelmetViewer gaze={isRunning ? gaze : null} />
      <video ref={videoRef} autoPlay muted playsInline className={styles.hiddenVideo} />

      <main ref={pageRef} className={styles.page}>
        <header className={styles.header}>
          <div data-look="the AI Face Expression heading" className={activeClass("the AI Face Expression heading")}>
            <h1 className={styles.title}>AI Face Expression Detection</h1>
            <p className={styles.subtitle}>
              Move your head. The helmet stays in the center and turns the same way.
            </p>
          </div>

          <button
            type="button"
            data-look="the detect button"
            onClick={isRunning ? stop : start}
            disabled={isStarting}
            className={classNames(
              styles.button,
              isRunning && styles.stop,
              activeClass("the detect button")
            )}
          >
            {isStarting ? "Starting camera..." : isRunning ? "Stop detection" : "Detect face"}
          </button>
        </header>

        <section className={styles.stage}>
          <div className={styles.side}>
            <article
              data-look="the upper box"
              className={classNames(styles.card, activeClass("the upper box"))}
            >
              <p className={styles.label}>Upper box</p>
              <p className={styles.expression}>{expression}</p>
              {isRunning && <p className={styles.status}>Camera is running</p>}
              {error && <p className={styles.error}>{error}</p>}
            </article>

            <article
              data-look="the lower box"
              className={classNames(styles.card, activeClass("the lower box"))}
            >
              <p className={styles.label}>Lower box</p>
              <p className={styles.gazeText} aria-live="polite">
                {lookMessage}
              </p>
              {isRunning && !gaze?.calibrating && (
                <button
                  type="button"
                  data-look="the recenter button"
                  onClick={recenter}
                  className={classNames(styles.ghostButton, activeClass("the recenter button"))}
                >
                  Recenter head
                </button>
              )}
            </article>
          </div>
        </section>

        {isRunning && gaze?.calibrating && (
          <div className={styles.centerCue}>
            <p className={styles.centerLabel}>Look at the helmet</p>
          </div>
        )}
      </main>
    </>
  );
}
