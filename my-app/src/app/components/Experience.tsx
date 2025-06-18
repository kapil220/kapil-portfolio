'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Experience() {
  const [activeExp, setActiveExp] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Animation progress for timeline
  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  const experiences = [
    {
      company: 'Freelance',
      position: 'Frontend Developer',
      period: 'October 2024 - Present',
      location: 'Indore, Madhya Pradesh, India · Remote',
      
      tech: ['JavaScript','TypeScript', 'React', 'Next.js', 'Framer Motion', 'UI/UX Design', 'Tailwind CSS', 'REST APIs', 'Node.js', 'Express', 'MongoDB',],
      points: [
        'Developed custom interactive components for client websites, increasing conversion rates by 15%',
        'Built and maintained responsive websites for multiple clients across various industries',
        'Created engaging animations and micro-interactions to enhance user experience',
        'Implemented performance optimizations resulting in 30% faster page load times',
        'Collaborated with clients to understand requirements and deliver tailored solutions'
      ]
    },
    {
      company: 'Aliema Infotech',
      position: 'Web Developer',
      period: 'January 2024 - August 2024',
      location: 'Indore, Madhya Pradesh, India · On-site',
      
      tech: ['React', 'Next.js', 'Tailwind CSS', 'REST APIs', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      points: [
        'Spearheaded front-end optimization for client websites, boosting user engagement by 20%',
        'Collaborated with senior developers to design reusable code and libraries',
        'Integrated REST APIs and external data sources for enhanced application responsiveness',
        'Implemented responsive design principles ensuring cross-browser compatibility',
        'Developed problem-solving and critical thinking skills through complex project challenges'
      ]
    },
    {
      company: 'Binary Bug ',
      position: 'Frontend Developer',
      period: 'February 2023 - December 2023',
      location: 'Indore, Madhya Pradesh, India · Remote',
      
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
      points: [
        'Built responsive web applications using modern frontend technologies',
        'Collaborated with design teams to implement pixel-perfect user interfaces',
        'Optimized website performance and ensured cross-browser compatibility',
        'Gained hands-on experience with React component development',
        'Participated in code reviews and maintained clean, readable code standards'
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="flex items-center text-3xl font-extrabold text-gray-200 mb-16"
            variants={itemVariants}
          >
            <span className="text-accent mr-2">02.</span>
            Where I&#39;ve Worked
            <motion.span 
              className="ml-4 h-px bg-gradient-to-r from-purple-500 to-transparent flex-grow"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <div className="lg:grid lg:grid-cols-5 gap-8">
            {/* Tab Buttons */}
            <motion.div 
              className="lg:col-span-1 mb-8 lg:mb-0 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide"
              variants={itemVariants}
            >
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.company}
                  onClick={() => setActiveExp(index)}
                  className={`py-3 px-6 font-mono text-sm whitespace-nowrap transition-all duration-300 rounded-lg border ${
                    activeExp === index 
                      ? 'bg-accent/10 text-accent border-accent' 
                      : 'text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {exp.company}
                </motion.button>
              ))}
            </motion.div>

            {/* Experience Content */}
            <div className="lg:col-span-4 relative">
              {/* Animated background */}
              <motion.div 
                className="absolute -inset-8 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl filter blur-xl z-0 hidden lg:block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "mirror" 
                }}
              />
              
              {/* Experience Cards */}
              <div className="relative">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: activeExp === index ? 1 : 0,
                      x: activeExp === index ? 0 : 20,
                      pointerEvents: activeExp === index ? "auto" : "none"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {activeExp === index && (
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center mb-2">
                            
                            <h3 className="text-2xl font-bold text-gray-200">
                              {exp.position}
                            </h3>
                          </div>
                          <h4 className="text-accent font-semibold text-lg mb-1">{exp.company}</h4>
                          <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                          <p className="text-gray-500 text-xs mb-4">{exp.location}</p>
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.tech.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <ul className="space-y-5">
                          {exp.points.map((point, i) => (
                            <motion.li 
                              key={i} 
                              className="flex text-gray-400 items-start"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + (i * 0.1) }}
                            >
                              <span className="text-accent mr-4 text-lg">▹</span>
                              <span className="leading-relaxed">{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline visualization (visible on smaller screens) */}
          <div className="mt-16 pt-8 lg:hidden">
            <div className="relative">
              {/* Animated progress line */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-gray-700"
                style={{ height: `${lineHeight}%` }}
              />
              
              <div className="space-y-16">
                {experiences.map((exp, ) => (
                  <motion.div
                    key={exp.company}
                    className="border-l-2 border-gray-700 pl-8 relative"
                    variants={itemVariants}
                  >
                    <motion.div 
                      className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <div className="flex items-center mb-2">
                      
                      <h3 className="text-xl font-bold text-gray-200">{exp.position}</h3>
                    </div>
                    <h4 className="text-accent mb-1">{exp.company}</h4>
                    <p className="text-gray-400 text-sm mb-1">{exp.period}</p>
                    <p className="text-gray-500 text-xs mb-4">{exp.location}</p>
                    
                    {/* Tech tags for mobile */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 rounded-full text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex text-gray-400">
                          <span className="text-accent mr-4">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}