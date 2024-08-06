import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { settings } from "../../../config";

export default function Logo() {
  const logoGLB = `${settings.BASE_PATH}/3Dmodels/logo.glb`;
  const { scene } = useGLTF(logoGLB, true);
  const meshRef = useRef();

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({ repeat: -1, ease: "linear" });

    // Animate rotation with GSAP
    tl.to(meshRef.current.rotation, {
      y: Math.PI * 2, // Rotate 360 degrees
      duration: 3, // Animation duration in seconds
    });
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <group>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={5} />
      <primitive scale={4} position={[0, -9, 0]} object={scene} ref={meshRef} />
    </group>
  );
}
