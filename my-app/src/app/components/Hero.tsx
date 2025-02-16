// src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent mb-5">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-200">
            Kapil Singh Rajput.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-6">
            I build things for the web.
          </h2>
          <p className="max-w-2xl text-gray-400 text-lg mb-12">
            I am a frontend developer specializing in building exceptional digital experiences. 
            Currently, I am focused on building accessible, human-centered products.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}