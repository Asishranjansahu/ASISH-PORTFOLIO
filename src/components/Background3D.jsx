import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sparkles } from '@react-three/drei';
import { inSphere } from 'maath/random';
import * as THREE from 'three';

function StarLayer({ radius = 1.5, count = 5000, color = '#7dd3fc', size = 0.002, speed = 0.1 }) {
  const ref = useRef();
  const [sphere] = useState(() => inSphere(new Float32Array(count), { radius }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * speed;
    ref.current.rotation.y -= delta * (speed * 1.5);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
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

function Aurora() {
  const materialRef = useRef();
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });
  const uniforms = {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#06b6d4') },
    uColor2: { value: new THREE.Color('#a78bfa') },
    uColor3: { value: new THREE.Color('#f472b6') }
  };
  const vertex = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  const fragment = `
    precision highp float;
    varying vec2 vUv;
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    float noise(vec2 p){
      return sin(p.x)*sin(p.y);
    }
    void main() {
      vec2 uv = vUv;
      uv.y += sin(uv.x*6.0 + uTime*0.6)*0.02;
      float band1 = smoothstep(0.2, 0.8, sin(uv.y*8.0 + uTime*0.8));
      float band2 = smoothstep(0.2, 0.8, sin(uv.y*10.0 - uTime*0.6));
      float glow = smoothstep(0.0, 1.0, band1*0.6 + band2*0.4);
      vec3 col = mix(uColor1, uColor2, band1);
      col = mix(col, uColor3, band2);
      col += glow*0.15;
      float vignette = smoothstep(0.9, 0.4, distance(uv, vec2(0.5)));
      gl_FragColor = vec4(col * vignette, 0.35);
    }
  `;
  return (
    <mesh position={[0, 0, -0.4]}>
      <planeGeometry args={[4, 2]} />
      <shaderMaterial ref={materialRef} uniforms={uniforms} vertexShader={vertex} fragmentShader={fragment} transparent blending={THREE.AdditiveBlending} />
    </mesh>
  );
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 1], near: 0.1, far: 100 }}>
        <color attach="background" args={['#05060a']} />
        <fog attach="fog" args={['#0b0c10', 2, 10]} />
        <Aurora />
        <group scale={1.2}>
          <StarLayer radius={1.6} count={6000} color="#7dd3fc" size={0.002} speed={0.08} />
          <StarLayer radius={1.8} count={4000} color="#a78bfa" size={0.0025} speed={0.06} />
          <StarLayer radius={2.0} count={3000} color="#f472b6" size={0.003} speed={0.04} />
        </group>
        <Sparkles count={80} scale={[3, 2, 1]} size={2} speed={0.4} color="#22d3ee" opacity={0.8} />
      </Canvas>
    </div>
  );
};

export default Background3D;
