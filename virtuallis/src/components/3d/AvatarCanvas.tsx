"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useAnimations } from "@react-three/drei";

const TEST_AVATAR_URL =
  "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/Xbot.glb";

function LISAvatar() {
  const { scene, animations } = useGLTF(TEST_AVATAR_URL);

  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    console.log("Animazioni disponibili nell'avatar:", names);

    if (names.length > 0) {
      const currentAction = actions[names[0]];

      currentAction?.reset().fadeIn(0.5).play();
    }
  }, [actions, names]);

  return <primitive object={scene} position={[0, -1.8, 0]} scale={1.5} />;
}

function LoaderFallback() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#185FA5" wireframe />
    </mesh>
  );
}

export default function AvatarCanvas() {
  return (
    <div className="lis:w-full lis:h-full lis:bg-[var(--lis-color-night)] lis:rounded-b-[10px] lis:overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.5, 2.5], fov: 45 }}
        gl={{ antialias: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <Environment preset="city" />

        <Suspense fallback={<LoaderFallback />}>
          <LISAvatar />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0.6, 0]}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload(TEST_AVATAR_URL);
