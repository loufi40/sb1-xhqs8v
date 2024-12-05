import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ParallaxSection from './components/ParallaxSection';
import Features from './components/Features';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero3D />
      <ParallaxSection />
      <Features />
    </div>
  );
}

export default App;