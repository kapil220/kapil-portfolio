// src/components/Contact.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText('kapilrajput8361@gmail.com');
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,_#6366f1_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            className="inline-flex items-center text-accent mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-accent mr-2">04.</span>
            What&#39;s Next?
          </motion.h2>
          
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-gray-200 mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h3>
          
          <motion.p 
            className="max-w-lg mx-auto text-gray-400 mb-12"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I am currently looking for new opportunities. Whether you have a question
            or just want to say hi, I will try my best to get back to you!
          </motion.p>
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:kapilrajput8361@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-full transition-all duration-300 font-medium"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)' 
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                animate={isHovered ? { rotate: 15 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="w-5 h-5 mr-2" />
              </motion.div>
              Say Hello
              <motion.div
                animate={isHovered ? { x: 5, opacity: 1 } : { x: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <Send className="w-4 h-4" />
              </motion.div>
            </motion.a>
            
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={copyEmail}
                className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center group"
              >
                <span className="mr-2">{isEmailCopied ? 'Copied!' : 'kapilrajput8361@gmail.com'}</span>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={isEmailCopied ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isEmailCopied ? '✓' : '📋'}
                </motion.div>
              </button>
              
              <div className="flex items-center justify-center mt-8 space-x-6">
                <motion.a
                  href="https://linkedin.com/in/kapilrajput" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://github.com/kapil220" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/kapilrajput" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-20 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p>Designed & Built by Kapil Rajput</p>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </motion.div>
    </section>
  );
}