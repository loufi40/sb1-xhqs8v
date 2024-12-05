import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    sphereRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#00ff88"
        roughness={0.1}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  );
};

const AnimatedBox = () => {
  const boxRef = useRef();

  useFrame(({ clock }) => {
    boxRef.current.rotation.x = clock.getElapsedTime() * 0.3;
    boxRef.current.rotation.y = clock.getElapsedTime() * 0.4;
  });

  return (
    <Box ref={boxRef} args={[1.5, 1.5, 1.5]}>
      <meshStandardMaterial
        color="#ff0088"
        roughness={0.1}
        metalness={0.8}
        wireframe
      />
    </Box>
  );
};

const Hero3D = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      className="h-screen w-full relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black z-10" />
      
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <AnimatedSphere />
        <AnimatedBox />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Welcome to Web 3.0
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            Experience the future of web development
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero3D;