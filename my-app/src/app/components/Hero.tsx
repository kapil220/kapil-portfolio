// src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-accent text-lg tracking-widest mb-4">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Kapil Singh Rajput.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6">
            I craft immersive web experiences.
          </h2>
          <p className="max-w-2xl text-gray-400 text-lg mb-12">
            A passionate frontend developer, blending creativity and technology to deliver stunning digital experiences. 
            Currently, I’m focused on building accessible, high-performance, and visually captivating web applications.
          </p>
          
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Check Out My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
