'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Travel Agency Website',
      description: 'Responsive and performant websites for various business domains.',
      technologies: ['Next.js', 'Tailwind CSS', 'WordPress'],
      githubLink: 'https://github.com/kapil220/travel',
      liveLink: 'https://travel-etsourmim-kapil220s-projects.vercel.app/',
      image: '/buisness.jpeg'
    },
    {
      title: 'Dashboard',
      description: 'Userr Dashboard for traking expense, activities and more.',
      technologies: ['Next.js', 'Tailwind CSS', 'WordPress'],
      githubLink: 'https://github.com/kapil220/travel',
      liveLink: 'https://dash-6svroxhk4-kapil220s-projects.vercel.app/',
      image: '/Dash.png'
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency market analysis with interactive charts.',
      technologies: ['React.js', 'Chart.js', 'API Integration'],
      githubLink: 'https://github.com/kapil220/crypto-tracker',
      liveLink: 'https://kapil220.github.io/crypto-tracker/',
      image: '/crypto.jpeg'
    },
   
    {
      title: 'Task Management System',
      description: 'A collaborative platform with real-time task tracking and chat functionality.',
      technologies: ['React.js', 'Saas', 'WebSocket', 'REST API'],
      githubLink: 'https://github.com/kapil220/projectmanagement',
      liveLink: '#',
      image: '/task.jpeg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-200 mb-12 text-center">
            <span className="text-accent">03. </span> Featured Projects
          </h2>

          <div className="relative flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12 }}
              >
                <motion.div
                  className="w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-[60vh] flex-shrink-0 bg-opacity-20 backdrop-blur-md bg-gray-800 rounded-xl overflow-hidden shadow-xl relative group"
                >
                  <div className="relative h-[40vh] overflow-hidden rounded-t-xl">
                    <Image
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{projects[currentIndex].title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{projects[currentIndex].description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[currentIndex].technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-700 text-accent text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <a href={projects[currentIndex].githubLink} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <a href={projects[currentIndex].liveLink} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-8 mt-6">
            <button onClick={prevSlide} className="p-2 bg-gray-700 rounded-full hover:bg-accent transition-colors">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button onClick={nextSlide} className="p-2 bg-gray-700 rounded-full hover:bg-accent transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
