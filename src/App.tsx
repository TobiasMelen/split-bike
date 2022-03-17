import {
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Vespa from "./Vespa";
import { useSpring, a } from "@react-spring/three";

function App() {
  const [hover, setHover] = useState(false);
  const { spring } = useSpring({ spring: Number(hover) });
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Suspense fallback={""}>
        <Canvas gl={{ antialias: true }}>
          <ambientLight intensity={0.25} />
          <spotLight position={[5, 5, -2]} intensity={0.6} />
          <OrbitControls />
          <a.mesh scale={spring.to([1, 0], [1.2, 1])}>
            <Vespa
              onClick={() => setHover((hover) => !hover)}
              scale={0.025}
              position={[0, -1.5, -1]}
            />
          </a.mesh>
        </Canvas>
      </Suspense>
    </main>
  );
}

export default App;
