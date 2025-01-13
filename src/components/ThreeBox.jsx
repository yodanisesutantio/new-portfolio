import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const ThreeBox = () => {
  const meshRef = useRef();

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <boxGeometry args={[3.5, 3.5, 3.5]} />
        <meshStandardMaterial color="#CAFE48" />
      </mesh>
    </>
  );
};

export default ThreeBox;