import React, { useEffect, useRef } from 'react'
import { settings } from '../../../config';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { Euler, MathUtils } from 'three';

export default function Stairs() {
const stairsGLB = `${settings.BASE_PATH}/3Dmodels/stairs.glb`;
const { scene } = useGLTF(stairsGLB, true);
const meshRef = useRef();
const rotation = new Euler( 0,-MathUtils.degToRad(45), 0);

useEffect(() => {
  gsap.to(meshRef.current.position, {
    duration: 2,
    y: 0.5,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
  });
}, []);  

  return (
    <group name='stairs'>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={5} />
      <primitive scale={2} position={[0,2,0]} object={scene} ref={meshRef} rotation={rotation} />
    </group>
  )
}
