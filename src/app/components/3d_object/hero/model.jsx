import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { AnimationMixer, Euler, MathUtils } from "three";
import { settings } from '../../../config';


const SharkAnimation = () => {
const sharkGLB = `${settings.BASE_PATH}/3Dmodels/hammerhead_shark.glb`;
  
  const {animations , scene} = useGLTF(sharkGLB, true);
  const meshRef = useRef();
  const animationClip = animations[0];

  const mixer = useMemo(
    () => new AnimationMixer(animationClip),
    [animationClip]
  )

  useEffect(() => {
    mixer.clipAction(animationClip, meshRef.current).play();
  }, [mixer, animationClip]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  const rotation = new Euler( 0,-MathUtils.degToRad(30), 0);


  return (
    <group scale={5} rotation={rotation} name="Animation">
      <ambientLight intensity={0.1} />
      <directionalLight intensity={5} />
      <primitive position={[0,.2,-.2]} object={scene} ref={meshRef} />
    </group>
  );
};

export { SharkAnimation };
