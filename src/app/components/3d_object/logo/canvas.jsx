import React from 'react'
import { Canvas} from "@react-three/fiber";
import Logo from "./logo";

export default function CanvasLogo() {
  return (
    <Canvas style={{ width: "80px", height: "80px" }}>
      <Logo/>
    </Canvas>
  )
}
