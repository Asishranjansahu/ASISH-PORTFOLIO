import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';

function StarField(props) {
  const ref = useRef();
  const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
};

export default Background3D;
