import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll();
  
  const layer1Y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="h-screen relative overflow-hidden">
      <motion.div
        style={{ y: layer1Y }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black" />
      </motion.div>

      <motion.div
        style={{ y: layer2Y }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Seamless Experience
          </h2>
          <p className="text-xl text-gray-300">
            Discover the power of modern web technologies
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ y: layer3Y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
      </motion.div>
    </div>
  );
};

export default ParallaxSection;