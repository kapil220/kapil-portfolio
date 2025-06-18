'use client';

import React, { ReactNode, useState,  } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
    SiJavascript, 
    SiTypescript, 
    SiReact, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiHtml5, 
    SiCss3, 
    SiFigma, 
    SiGithub, 
    SiVscodium,
    SiNodedotjs,
    SiSvelte
} from 'react-icons/si';

export default function About() {
  // Interactive state
  const [activeSkillset, setActiveSkillset] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isInView, setIsInView] = useState(false);
  
  // Skill categories with expanded content
  const programmingLanguages = [
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-yellow-400" />, proficiency: 90 },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, proficiency: 85 },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" />, proficiency: 82 },
  ];

  const frontendTechnologies = [
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, proficiency: 95 },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-600" />, proficiency: 92 },
    { name: 'React', icon: <SiReact className="text-cyan-400" />, proficiency: 88 },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300" />, proficiency: 85 },
    { name: 'Svelte', icon: <SiSvelte className="text-orange-600" />, proficiency: 78 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, proficiency: 90 },
  ];

  const tools = [
    { name: 'Figma', icon: <SiFigma className="text-pink-500" />, proficiency: 80 },
    { name: 'GitHub', icon: <SiGithub className="text-gray-300" />, proficiency: 85 },
    { name: 'VS Code', icon: <SiVscodium className="text-blue-500" />, proficiency: 92 },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Shimmer effect for highlighting text
  const shimmer = {
    hidden: { 
      backgroundPosition: "0% 50%" 
    },
    visible: { 
      backgroundPosition: "100% 50%",
      transition: { 
        repeat: Infinity, 
        repeatType: "mirror" as const, 
        duration: 3,
        ease: "linear"
      }
    }
  };

  // Render Skill Card with proficiency bar
  const renderSkillCard = (title: string, skills: { name: string; icon: ReactNode; proficiency: number }[]) => (
    <motion.div 
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 15px 20px -5px rgba(138, 75, 255, 0.1), 0 8px 8px -5px rgba(138, 75, 255, 0.04)"
      }} 
      initial="hidden"
      whileInView="visible"
      variants={itemVariants}
      viewport={{ once: true, margin: "-50px" }}
      onClick={() => setActiveSkillset(activeSkillset === title ? null : title)}
      className={`bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 cursor-pointer ${activeSkillset === title ? 'ring-2 ring-accent' : 'hover:border-accent/30'}`}
    >
      <h3 className="text-lg font-semibold text-accent mb-3 flex items-center justify-between">
        {title}
        <motion.span 
          animate={{ rotate: activeSkillset === title ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs opacity-70"
        >
          {activeSkillset === title ? '▲' : '▼'}
        </motion.span>
      </h3>
      <motion.ul 
        className="space-y-3"
        animate={{ height: activeSkillset === title ? 'auto' : '100%' }}
      >
        {skills.map((skill) => (
          <motion.li 
            key={skill.name} 
            className="flex flex-col text-gray-300 gap-1"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="text-lg">{skill.icon}</div>
              <span className="text-sm">{skill.name}</span>
            </div>
            
            {/* Proficiency bar */}
            <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );

  return (
    <section id="about" className="py-16 bg-black text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/20 filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-900/10 filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          {/* Section Title */}
          <motion.h2 
            className="flex items-center text-3xl font-extrabold text-gray-200 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-accent mr-2"
              variants={itemVariants}
            >01.</motion.span>
            <motion.span variants={itemVariants}>About Me</motion.span>
            <motion.span 
              className="ml-4 h-px bg-gradient-to-r from-purple-500 to-transparent flex-grow"
              variants={itemVariants}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Section - About Text */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* About Text */}
              <div className="text-gray-400 space-y-4">
                <motion.p 
                  className="leading-relaxed text-base"
                  variants={itemVariants}
                >
                  Hey there! I&apos;m{' '}
                  <motion.span 
                    className="text-accent font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent bg-size-200"
                    variants={shimmer}
                    animate="visible"
                    initial="hidden"
                  > Kapil</motion.span>, a passionate full-stack developer who loves crafting sleek and interactive web experiences.
                  My journey into coding started with customizing Tumblr themes in college, and ever since, I&apos;ve been obsessed with blending design and functionality to build amazing digital products.
                </motion.p>
                
                <motion.p 
                  className="leading-relaxed text-base"
                  variants={itemVariants}
                >
                  Over the years, I&apos;ve worked with startups, freelancers, and businesses, building everything from stunning landing pages and fully functional websites to complex e-commerce platforms and custom enterprise software solutions.
                </motion.p>

                <motion.p 
                  className="leading-relaxed text-base"
                  variants={itemVariants}
                >
                  My expertise spans across modern technologies like React.js, Next.js, Svelte, Node.js, Tailwind CSS, and TypeScript, allowing me to handle both frontend and backend development with equal proficiency.
                </motion.p>
              </div>

              <motion.p 
                className="font-medium text-gray-300 text-base"
                variants={itemVariants}
              >
                Here are a few technologies I&#39;ve been working with recently:
              </motion.p>

              {/* Image and Contact Info Section */}
              <div className="grid md:grid-cols-2 gap-8 mt-8 items-start">
                {/* Image */}
                <motion.div 
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-56 h-72 group">
                    <motion.div
                      className="w-full h-full relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      {/* Glowing background effect */}
                      <motion.div 
                        className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl z-0 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Main image container */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                        <Image
                          src="/kapil.jpeg"
                          alt="Kapil Singh Rajput"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          style={{ 
                            objectPosition: "center top"
                          }}
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                      
                      {/* Decorative elements */}
                      <motion.div 
                        className="absolute -bottom-3 -left-3 w-16 h-16 border-2 border-purple-500/50 rounded-xl z-0"
                        animate={{ 
                          rotate: [0, 5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          repeatType: "mirror" 
                        }}
                      />
                      
                      <motion.div 
                        className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-lg z-0"
                        animate={{ 
                          rotate: [0, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          repeatType: "mirror",
                          delay: 0.5
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Contact Info Card */}
                <motion.div 
                  className="flex justify-center md:justify-start"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 shadow-2xl max-w-sm w-full">
                    {/* Title */}
                    <motion.div 
                      className="text-center mb-6"
                      variants={itemVariants}
                    >
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        Kapil Singh Rajput
                      </h3>
                      <div className="relative">
                        <motion.p 
                          className="text-accent font-medium text-lg tracking-wide"
                          animate={{ 
                            backgroundPosition: ["0%", "100%", "0%"] 
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "linear" 
                          }}
                          style={{
                            background: "linear-gradient(90deg, #8B5CF6, #3B82F6, #06B6D4, #8B5CF6)",
                            backgroundSize: "200% 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          }}
                        >
                          Full Stack Developer
                        </motion.p>
                        <motion.div 
                          className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2"
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                      </div>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div 
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {/* Email */}
                      <motion.div 
                        className="flex items-center gap-3 group cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                          <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div className="text-gray-300">
                          <p className="text-xs text-gray-500 mb-1">Email</p>
                          <p className="text-sm font-medium group-hover:text-accent transition-colors">
                            kapilrajput8361@gmail.com
                          </p>
                        </div>
                      </motion.div>

                      {/* Phone */}
                      <motion.div 
                        className="flex items-center gap-3 group cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-colors">
                          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div className="text-gray-300">
                          <p className="text-xs text-gray-500 mb-1">Phone</p>
                          <p className="text-sm font-medium group-hover:text-accent transition-colors">
                            +91 70498 75864
                          </p>
                        </div>
                      </motion.div>

                      {/* Location */}
                      <motion.div 
                        className="flex items-center gap-3 group"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-green-500/30 transition-colors">
                          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-gray-300">
                          <p className="text-xs text-gray-500 mb-1">Location</p>
                          <p className="text-sm font-medium">
                            Indore, India
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Availability Status */}
                    <motion.div 
                      className="mt-6 pt-4 border-t border-gray-700/50"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <motion.div 
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-sm text-gray-400">Available for projects</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Section - Skills */}
            <motion.div 
              className="lg:col-span-1 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {renderSkillCard('Languages', programmingLanguages)}
              {renderSkillCard('Frontend', frontendTechnologies)}
              {renderSkillCard('Tools', tools)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}