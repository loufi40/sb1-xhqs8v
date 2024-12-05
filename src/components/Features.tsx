import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Globe, Shield, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4"
      >
        <Icon className="text-white" size={24} />
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: 'Decentralized',
      description: 'Built on blockchain technology for true ownership and transparency.',
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Advanced encryption and security measures to protect your assets.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experience.',
    },
    {
      icon: Cpu,
      title: 'Smart Contracts',
      description: 'Automated, trustless transactions powered by smart contracts.',
    },
  ];

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Future-Ready Features
          </h2>
          <p className="text-xl text-gray-400">
            Experience the next generation of web technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;