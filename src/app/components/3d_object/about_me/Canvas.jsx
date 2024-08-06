import { Canvas} from '@react-three/fiber';
import Stairs from './stairs';

export default function AboutMe() {

  return (
    <Canvas
      style={{ width: '50%', height: '35rem' }}
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <Stairs />
    </Canvas>
  );
}


