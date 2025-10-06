import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "./CanvasLoader";
import { Gltf, Environment, CameraControls } from "@react-three/drei";
import { KTX2Loader } from "three-stdlib";
import * as THREE from "three";

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath(
  `https://unpkg.com/three@0.169.0/examples/jsm/libs/basis/`
);

function Scene() {
  const { gl } = useThree();

  return (
    <>
      <Gltf
        src={"RobloxCharacter.glb"}
        extendLoader={(loader) => {
          loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
        }}
      />
    </>
  );
}

const EarthModel = () => {
  const { scene } = useGLTF(
    // "Earth.gltf",
    "RobloxCharacter.glb",
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 10, near: 0.1, far: 200, position: [-4, 3, 6] }}
      shadows
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={<CanvasLoader />}>
        <Scene />
        <Environment background>
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            {/* <meshBasicMaterial color="#393939" side={THREE.BackSide} /> */}
          </mesh>
        </Environment>
        <spotLight
          position={[7, 7, 7]}
          castShadow
          intensity={1000}
          shadow-bias={-0.0001}
        />
        <spotLight
          position={[-25, -25, -25]}
          castShadow
          intensity={1000}
          shadow-bias={-0.0001}
        />
        {/* <ambientLight intensity={1} /> */}
        {/* <CameraControls minDistance={1} maxDistance={1} /> */}
        {/* <gridHelper args={[30, 30, 30]} position-y=".01" /> */}
        {/* <axesHelper args={[5]} /> */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
