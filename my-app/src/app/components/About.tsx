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
  
  // Updated function to use ReactNode instead of JSX.Element
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
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="flex items-center text-2xl font-bold text-gray-200 mb-12">
            <span className="text-accent mr-2">01.</span>
            About Me
            <span className="ml-4 h-px bg-gray-700 flex-grow" />
          </h2>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Left Section - About Text */}
            <div className="md:col-span-3 text-gray-400">
              <p className="mb-4">
                Hello! My name is Kapil, and I enjoy creating things that live on the internet.
                My interest in web development started back in college when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
              </p>
              <p className="mb-8">
                Fast-forward to today, and I haveve had the privilege of working at various companies,
                where I have honed my skills in modern web technologies and best practices.
              </p>

              <p className="mb-4">Here are a few technologies I haveve been working with recently:</p>

              {/* Skill Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {renderSkillCard('Programming Languages', programmingLanguages)}
                {renderSkillCard('Frontend Technologies', frontendTechnologies)}
                {renderSkillCard('Tools', tools)}
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="md:col-span-2 relative group">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/kapil.jpeg"
                  alt="Kapil Singh Rajput"
                  fill
                  className="rounded object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
