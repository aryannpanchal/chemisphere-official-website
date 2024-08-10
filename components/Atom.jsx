import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

export default function Atom() {
  // Define electron orbits with positions and speeds
  const innerOrbit = [
    { radius: 1.5, speed: 1, angle: 0 },
    { radius: 1.5, speed: 1, angle: Math.PI }, // Start at 180 degrees for the second electron
  ];

  const outerOrbit = [
    { radius: 3, speed: 0.8, angle: 0 },
    { radius: 3, speed: 0.8, angle: Math.PI / 3 },
    { radius: 3, speed: 0.8, angle: (2 * Math.PI) / 3 },
    { radius: 3, speed: 0.8, angle: Math.PI },
    { radius: 3, speed: 0.8, angle: (4 * Math.PI) / 3 },
    { radius: 3, speed: 0.8, angle: (5 * Math.PI) / 3 },
  ];

  // Define protons and neutrons inside the nucleus
  const nucleusParticles = [
    { position: [0.2, 0.2, 0.2], color: 'black' },  // Proton
    { position: [-0.2, -0.2, 0.2], color: 'blcak' },  // Proton
    { position: [0.2, -0.2, -0.2], color: 'blue' },  // Neutron
    { position: [-0.2, 0.2, -0.2], color: 'blue' },  // Neutron
  ];

  function Electron({ radius, speed, angle }) {
    const ref = useRef();
    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      const currentAngle = angle + t * speed;
      ref.current.position.x = radius * Math.cos(currentAngle);
      ref.current.position.z = radius * Math.sin(currentAngle);
    });

    return (
      <mesh ref={ref}>
        <Sphere args={[0.1, 32, 32]}>
          <meshStandardMaterial color="red" />
        </Sphere>
      </mesh>
    );
  }

  function ProtonNeutron({ position, color }) {
    return (
      <mesh position={position}>
        <Sphere args={[0.4, 32, 32]}>
          <meshStandardMaterial color={color} />
        </Sphere>
      </mesh>
    );
  }

  function Nucleus() {
    return (
      <>
        {nucleusParticles.map((particle, index) => (
          <ProtonNeutron key={index} position={particle.position} color={particle.color} />
        ))}
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start text-white">
      <div className="mobile:w-64 mobile:h-48 laptop:w-48 laptop:h-36">
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Nucleus />
          {innerOrbit.map((electron, index) => (
            <Electron key={index} radius={electron.radius} speed={electron.speed} angle={electron.angle} />
          ))}
          {outerOrbit.map((electron, index) => (
            <Electron key={index} radius={electron.radius} speed={electron.speed} angle={electron.angle} />
          ))}
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
}
