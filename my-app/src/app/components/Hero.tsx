'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  // Interactive particle effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text animation variants
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Create staggered text animation
  const StaggeredText = ({ text, className }: { text: string, className: string }) => (
    <div className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-purple-600 blur-3xl"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-blue-600 blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ bottom: '15%', right: '15%' }}
        />
      </div>

      {/* Interactive cursor follower */}
      <motion.div 
        className="hidden lg:block absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mix-blend-screen blur-xl pointer-events-none"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", damping: 15 }}
      />

      <div className="max-w-6xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-accent text-lg tracking-widest mb-4 font-mono"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, my name is
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 overflow-hidden">
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 inline-block"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Kapil Singh Rajput.
            </motion.span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6 overflow-hidden">
            <StaggeredText 
              text="I craft immersive web experiences."
              className="bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text"
            />
          </h2>

          <motion.p
            className="max-w-2xl text-gray-400 text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            A passionate frontend developer, blending creativity and technology to deliver stunning digital experiences. 
            Currently, I&#39;m focused on building accessible, high-performance, and visually captivating web applications.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="inline-block px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Check Out My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="inline-block px-8 py-4 text-lg font-semibold border-2 border-purple-500 text-white rounded-xl hover:bg-purple-500/10 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Code matrix effect easter egg */}
      <motion.div 
        className="absolute bottom-12 right-12 text-xs font-mono opacity-30 select-none hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2 }}
      >
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {Array.from({ length: 20 }).map((_, colIndex) => (
              <motion.span 
                key={colIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: Math.random() }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 2 * Math.random() + 1 
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}