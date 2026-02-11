import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';
import * as THREE from 'three';

function StarLayer({ radius = 1.5, count = 4800, color = '#7b8290', size = 0.0045, speed = 0.02, opacity = 0.16 }) {
  const ref = useRef();
  const [sphere] = useState(() => inSphere(new Float32Array(count * 3), { radius }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
      ref.current.rotation.x += delta * (speed * 0.6);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={opacity}
          blending={THREE.NormalBlending}
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
           <color attach="background" args={['#040506']} />
            <group scale={1.2}>
              <StarLayer radius={1.6} count={3400} color="#7b8290" size={0.004} speed={0.016} opacity={0.15} />
              <StarLayer radius={1.8} count={2700} color="#7b8290" size={0.0045} speed={0.012} opacity={0.14} />
              <StarLayer radius={2.0} count={2100} color="#7b8290" size={0.005} speed={0.009} opacity={0.13} />
            </group>
          </Canvas>
        </div>
      ) : (
        <div className="fixed inset-0 z-0 bg-[#0b0b0b]"></div>
      )}
    </>
  );
};

export default Background3D;
