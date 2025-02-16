// src/components/Experience.tsx
'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: 'Aliema Infotech',
      position: 'Front-End Developer',
      period: 'January 2024 - Aug 2024',
      points: [
        'Spearheaded front-end optimization for client websites, boosting user engagement by 20%',
        'Collaborated with senior developers to design reusable code and libraries',
        'Integrated REST APIs and external data sources for enhanced application responsiveness'
      ]
    },
    {
        company: 'Freelance',
        position: 'Front-End Developer',
        period: 'Sept 2024 - current',
        points: [
          'Spearheaded front-end optimization for client websites, boosting user engagement by 20%',
          'Collaborated with senior developers to design reusable code and libraries',
          'Integrated REST APIs and external data sources for enhanced application responsiveness'
        ]
      }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="flex items-center text-2xl font-bold text-gray-200 mb-12">
            <span className="text-accent mr-2">02.</span>
            Where I have Worked
            <span className="ml-4 h-px bg-gray-700 flex-grow" />
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-accent pl-8 relative"
              >
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0" />
                <h3 className="text-xl font-bold text-gray-200 mb-1">{exp.position}</h3>
                <h4 className="text-accent mb-2">{exp.company}</h4>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
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
        </motion.div>
      </div>
    </section>
  );
}