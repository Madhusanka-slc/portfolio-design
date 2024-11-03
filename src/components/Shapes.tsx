'use client';
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { FC } from "react";

interface ShapesProps {
  intensity?: number;  // Optional prop for ambient light intensity
  color?: string;      // Optional prop for MeshDistortMaterial color
  distort?: number;    // Optional prop for distortion value
  speed?: number;      // Optional prop for speed
}

const Shapes: FC<ShapesProps> = ({
  intensity = 1,   // Default value for intensity
  color = "#9A7AF1", // Default value for color
  distort = 0.5,   // Default value for distortion
  speed = 1,       // Default value for speed
}) => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={intensity} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
        />
      </Sphere>
    </Canvas>
  );
};

export default Shapes;
