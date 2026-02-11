import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';
import * as THREE from 'three';

function StarLayer({ radius = 1.5, count = 5000, color = '#cbd5e1', size = 0.01 }) {
  const ref = useRef();
  const [sphere] = useState(() => inSphere(new Float32Array(count), { radius }));

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

const supportsWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
};

const Background3D = () => {
  return (
    <>
      {supportsWebGL() ? (
        <div className="fixed inset-0 z-0 bg-[#0b0b0b]">
          <Canvas camera={{ position: [0, 0, 1.2], near: 0.1, far: 100 }}>
            <color attach="background" args={['#07080c']} />
            <group scale={1.2}>
              <StarLayer radius={1.6} count={4000} color="#cbd5e1" size={0.009} />
              <StarLayer radius={1.8} count={3000} color="#cbd5e1" size={0.011} />
              <StarLayer radius={2.0} count={2500} color="#cbd5e1" size={0.013} />
            </group>
          </Canvas>
        </div>
      ) : (
        <div className="fixed inset-0 z-0 bg-[#0b0b0b]"></div>
      )}
    </>
  );
};
