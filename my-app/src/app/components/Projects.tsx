'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {  ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Task Management System',
      description: 'A collaborative platform with real-time task tracking and chat functionality.',
      technologies: ['React.js', 'Saas', 'WebSocket', 'REST API'],
      githubLink: '#',
      liveLink: '#',
      image: '/task.jpeg'
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency market analysis with interactive charts.',
      technologies: ['React.js', 'Chart.js', 'API Integration'],
      githubLink: '#',
      liveLink: '#',
      image: '/crypto.jpeg'
    },
    {
      title: 'Business Website Templates',
      description: 'Responsive and performant websites for various business domains.',
      technologies: ['Next.js', 'Tailwind CSS', 'WordPress'],
      githubLink: '#',
      liveLink: '#',
      image: '/buisness.jpeg'
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
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="flex items-center text-2xl font-bold text-gray-200 mb-12">
            <span className="text-accent mr-2">03.</span>
            Some Things I have Built
            <span className="ml-4 h-px bg-gray-700 flex-grow" />
          </h2>

          <div className="relative w-full overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="w-full sm:w-[90%] md:w-[100%] lg:w-[100%] xl:w-[100%] h-[50vh] sm:h-[40vh] md:h-[60vh] lg:h-[60vh] flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden shadow-lg group transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-[35vh]  md:h-[40vh] lg:h-[50vh] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 bg-gray-700 text-accent text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                 
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <button onClick={prevSlide} className="text-gray-400 hover:text-accent">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="text-gray-400 hover:text-accent">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
