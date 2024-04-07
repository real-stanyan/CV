import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { AxesHelper } from "three";

import CanvasLoader from "./Loader";

const Computers = ({ isMobile }) => {
  const myMesh = React.useRef();
  const computer = useGLTF("./models/mac/scene.gltf");

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh ref={myMesh}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <ambientLight intensity={Math.PI / 2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.07 : 0.08}
        position={isMobile ? [1.1, 0, 3] : [1.2, 0, 3.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      id="canvas"
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 15, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={Math.PI / 2} />
        <OrbitControls
          enableZoom={false}
          //   maxPolarAngle={Math.PI / 2}
          //   minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        {/* <primitive object={new AxesHelper(5)} /> */}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
