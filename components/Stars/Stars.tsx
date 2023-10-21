import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

const Stars = (props: ThreeElements["points"]) => {
  const NUM_STARS = 512;
  const ref = useRef<THREE.Points>(null!);

  const [sphere] = useState(() => {
    const len = NUM_STARS * 3;
    const buf = new Float32Array(len);

    for (let i = 0; i < len; i++) {
      buf[i] = THREE.MathUtils.randFloatSpread(100);
    }

    return buf;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f39dd6"
          size={0.3}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
