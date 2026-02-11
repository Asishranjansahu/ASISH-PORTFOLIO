import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';
import * as THREE from 'three';

function StarLayer({ radius = 1.5, count = 5000, color = '#7dd3fc', size = 0.01 }) {
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

function Aurora() {
  const materialRef = useRef();
  const uniforms = {
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
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    float noise(vec2 p){
      return sin(p.x)*sin(p.y);
    }
    void main() {
      vec2 uv = vUv;
      uv.y += sin(uv.x*6.0)*0.02;
      float band1 = smoothstep(0.2, 0.8, sin(uv.y*8.0));
      float band2 = smoothstep(0.2, 0.8, sin(uv.y*10.0));
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
        <div className="fixed inset-0 z-0 bg-black">
          {/* Decorative gradients always present behind WebGL */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.10)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(167,139,250,0.08)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none"></div>
          <Canvas camera={{ position: [0, 0, 1.2], near: 0.1, far: 100 }}>
            <color attach="background" args={['#07080c']} />
            <Aurora />
            <group scale={1.2}>
              <StarLayer radius={1.6} count={4000} color="#7dd3fc" size={0.009} />
              <StarLayer radius={1.8} count={3000} color="#a78bfa" size={0.011} />
              <StarLayer radius={2.0} count={2500} color="#f472b6" size={0.013} />
            </group>
          </Canvas>
        </div>
      ) : (
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#08090d] via-[#0a0b10] to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12)_0%,_rgba(0,0,0,0)_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(167,139,250,0.10)_0%,_rgba(0,0,0,0)_60%)]"></div>
        </div>
      )}
    </>
  );
};

export default Background3D;
