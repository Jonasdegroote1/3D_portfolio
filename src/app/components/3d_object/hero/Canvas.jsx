import { Canvas} from '@react-three/fiber';
import { SharkAnimation } from './model';

export default function Model() {

  return (
    <Canvas
      style={{ width: '100%', height: '100vh' }}
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <SharkAnimation />
    </Canvas>
  );
}


