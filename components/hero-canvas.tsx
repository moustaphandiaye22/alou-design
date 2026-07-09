'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uRes;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 345.45));
    p += dot(p, p + 34.345);
    return fract(p.x * p.y);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv - 0.5;
    p.x *= uRes.x / uRes.y;

    float t = uTime * 0.05;
    float n = fbm(p * 2.5 + vec2(t, t * 0.6));
    float n2 = fbm(p * 4.0 - vec2(t * 0.8, t));
    float flow = fbm(p * 1.5 + n * 1.5 + vec2(0.0, t * 1.2));

    float glow = smoothstep(0.35, 0.95, flow);
    vec3 gold = vec3(0.85, 0.68, 0.35);
    vec3 deep = vec3(0.02, 0.015, 0.01);

    vec3 col = mix(deep, gold, glow * 0.55);
    col += gold * pow(n2, 3.0) * 0.35;

    float vig = smoothstep(1.15, 0.2, length(p));
    col *= vig;

    float g = hash(uv * uRes + fract(uTime)) * 0.035;
    col += g - 0.018;

    gl_FragColor = vec4(col, 1.0);
  }
`

function Aura() {
  const material = useRef<THREE.ShaderMaterial>(null)
  const { size } = useThree()
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
    }),
    [],
  )

  useFrame((state) => {
    if (!material.current) return
    material.current.uniforms.uTime.value = state.clock.elapsedTime
    material.current.uniforms.uRes.value.set(size.width, size.height)
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 1] }}
    >
      <Aura />
    </Canvas>
  )
}
