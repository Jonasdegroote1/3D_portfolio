import { settings } from '../../../config';
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

export default function ModelContent({ model }) {
  const uniqueModel = `${settings.BASE_PATH}${model}`;
  const { scene } = useGLTF(uniqueModel, true);
  const meshRef = useRef();

  useEffect(() => {
    const el = meshRef.current;

    const updatePosition = () => {
      const scrollY = window.scrollY;

      gsap.to(el.position, {
        x: 8 - scrollY / 100,
        duration: 0.8, // Adjust for a slightly longer animation
        ease: 'elastic.out', // Use an elastic easing function
        onUpdate: () => {
          el.rotation.y = scrollY / 500;
          el.scale.x = 0.5 + scrollY / 500;
          el.scale.y = 0.5 + scrollY / 500;
          el.scale.z = 0.5 + scrollY / 500;

          // Additional animation - subtle head nod
          el.rotation.x = Math.sin(scrollY / 300) / 4;
        },
      });

      // Additional animation - arm swing
      gsap.to(el.rotation, {
        z: Math.sin(scrollY / 200) / 4,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Add event listener for scroll
    window.addEventListener('scroll', updatePosition);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return (
    <group scale={1}>
      <ambientLight intensity={1} />
      <directionalLight intensity={5} />
      <primitive position={[8, -3, 1]} object={scene} ref={meshRef} />
    </group>
  );
}
