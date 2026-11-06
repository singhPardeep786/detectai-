"use client";

import { useEffect, useRef } from "react";
import styles from "./FaceExpressions.module.css";

export default function HelmetViewer({ gaze }) {
  const canvasRef = useRef(null);
  const gazeRef = useRef(gaze);
  gazeRef.current = gaze;

  useEffect(() => {
    const canvas = canvasRef.current;
    let stopped = false;
    let cleanup = () => {};

    async function mount() {
      const THREE = await import("three");
      const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js");
      const { RoomEnvironment } = await import(
        "three/addons/environments/RoomEnvironment.js"
      );
      if (stopped || !canvas) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
      camera.position.set(0, 0, 4.8);

      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

      const modelRoot = new THREE.Group();
      scene.add(modelRoot);

      const loader = new GLTFLoader();
      loader.load("/models/DamagedHelmet.glb", (gltf) => {
        if (stopped) return;
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.scale.setScalar(1.05 / Math.max(size.x, size.y, size.z));
        modelRoot.position.set(0, 0, 0);
        modelRoot.add(model);
      });

      let frame = 0;
      let yaw = 0;
      let pitch = 0;

      function resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      }

      function tick() {
        frame = requestAnimationFrame(tick);
        const nextGaze = gazeRef.current;
        const tracking = nextGaze && !nextGaze.calibrating;
        const targetYaw = tracking ? -(nextGaze.x - 0.5) * 1.25 : 0;
        const targetPitch = tracking ? (nextGaze.y - 0.5) * 0.95 : 0;
        yaw += (targetYaw - yaw) * 0.22;
        pitch += (targetPitch - pitch) * 0.22;
        modelRoot.rotation.y = yaw;
        modelRoot.rotation.x = pitch;
        renderer.render(scene, camera);
      }

      resize();
      window.addEventListener("resize", resize);
      tick();

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        pmrem.dispose();
        renderer.dispose();
      };
    }

    mount();

    return () => {
      stopped = true;
      cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.helmet} aria-hidden />;
}
