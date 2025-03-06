'use client';

import React, { ReactNode } from 'react';
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
    SiVscodium 
} from 'react-icons/si';

export default function About() {
  const programmingLanguages = [
    { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  ];

  const frontendTechnologies = [
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-600" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  const tools = [
    { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
    { name: 'GitHub', icon: <SiGithub className="text-gray-300" /> },
    { name: 'VS Code', icon: <SiVscodium className="text-blue-500" /> },
  ];
  
  // Render Skill Card
  const renderSkillCard = (title: string, skills: { name: string; icon: ReactNode }[]) => (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }} 
      className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-accent transition-shadow border border-gray-700 hover:border-accent cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-accent mb-4 flex items-center justify-center">{title}</h3>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center text-gray-300 gap-3">
            <div className="text-2xl">{skill.icon}</div>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <h2 className="flex items-center text-3xl font-extrabold text-gray-200 mb-12">
            <span className="text-accent mr-2">01.</span>
            About Me
            <span className="ml-4 h-px bg-gray-700 flex-grow" />
          </h2>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Left Section - About Text */}
            <div className="md:col-span-3 text-gray-400">
              <p className="mb-4 leading-relaxed">
                Hey there! I’m <span className="text-accent font-semibold">Kapil</span>, a passionate front-end developer who loves crafting sleek and interactive web experiences.
                My journey into coding started with customizing Tumblr themes in college, and ever since, I’ve been obsessed with blending design and functionality to build amazing digital products.
              </p>
              <p className="mb-8 leading-relaxed">
                Over the years, I’ve worked with startups, freelancers, and businesses, honing my skills in React.js, Next.js, Tailwind CSS, and TypeScript.
                My focus is on developing user-friendly, accessible, and high-performance websites.
              </p>

              <p className="mb-4 font-medium text-gray-300">Here are a few technologies I’ve been working with recently:</p>

              {/* Skill Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {renderSkillCard('Programming Languages', programmingLanguages)}
                {renderSkillCard('Frontend Technologies', frontendTechnologies)}
                {renderSkillCard('Tools', tools)}
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="md:col-span-2 relative group flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/kapil.jpeg"
                  alt="Kapil Singh Rajput"
                  fill
                  className="rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all border-4 border-gray-700 shadow-xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black bg-opacity-50 rounded-lg group-hover:opacity-0 transition-all"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
