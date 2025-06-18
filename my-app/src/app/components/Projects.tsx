'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Code, } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
const projects = [
  {
    title: 'The Ink Pot Group website',
    description: 'Responsive and performant website for business with modern design and smooth animations.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO Optimization'],
    githubLink: 'https://github.com/kapil220/abc',
    liveLink: 'https://www.theinkpotgroup.com/',
    image: '/inkpot.png',
    category: 'Business',
    highlight: 'Performance'
  },
   {
    title: 'RPA International',
    description: 'Professional automation services website showcasing RPA solutions and business process optimization.',
    technologies: ['Next.js', 'Tailwind CSS', 'SEO Optimization', 'Responsive Design'],
  
    liveLink: 'https://www.rpa.international/',
    image: '/rpa.jpeg',
    category: 'Business',
    highlight: 'Automation'
  },
  {
    title: 'Homeify Automation',
    description: 'Smart home automation platform with IoT integration and intelligent control systems.',
    technologies: ['React.js', 'IoT Integration', 'API Integration', 'Real-time Controls'],
    
    liveLink: 'https://homeifyautomation.com/',
    image: '/homeify.jpeg',
    category: 'IoT',
    highlight: 'Smart Technology'
  },
  {
    title: 'IG Wines',
    description: 'Premium wine e-commerce platform with elegant design and seamless shopping experience.',
    technologies: ['Next.js', 'E-commerce', 'Payment Integration', 'Product Catalog'],
  
    liveLink: 'https://igwines.com/',
    image: '/ig.jpeg',
    category: 'E-commerce',
    highlight: 'Premium Design'
  },
  {
    title: 'China Bistro India',
    description: 'Restaurant website with online ordering system and location-based services.',
    technologies: ['React.js', 'Online Ordering', 'Location Services', 'Responsive Design'],
    githubLink: '',
    liveLink: 'https://ind.chinabistro.co/',
    image: '/china.jpeg',
    category: 'Restaurant',
    highlight: 'Online Ordering'
  },
  {
    title: 'Car Rental Service',
    description: 'Full-stack web application for car rental with custom backend API and database integration.',
    technologies: ['Node.js', 'Express.js', 'Database Integration', 'Custom API'],
    githubLink: '',
    liveLink: 'http://3.108.23.172:3005/',
    image: '/car.jpeg',
    category: 'Full-stack',
    highlight: 'Custom Backend'
  },
  {
    title: 'Travel Agency Website',
    description: 'Immersive travel booking platform with interactive maps and real-time availability.',
    technologies: ['Next.js', 'Tailwind CSS', 'API Integration', 'Responsive Design'],
  
    liveLink: 'https://travel-fawn-one.vercel.app/',
    image: '/buisness.jpeg',
    category: 'Travel',
    highlight: 'Design'
  },
  {
    title: 'User Dashboard',
    description: 'Comprehensive dashboard for tracking expenses, activities and performance metrics with data visualization.',
    technologies: ['Next.js', 'Tailwind CSS', 'Chart.js', 'Authentication'],
   
    liveLink: 'https://dash-pink-omega.vercel.app/',
    image: '/dash.png',
    category: 'Dashboard',
    highlight: 'Functionality'
  },
  {
    title: 'Cryptocurrency Tracker',
    description: 'Real-time cryptocurrency market analysis with interactive charts and price alerts.',
    technologies: ['React.js', 'Chart.js', 'API Integration', 'WebSocket'],
   
    liveLink: 'https://kapil220.github.io/crypto-tracker/',
    image: '/crypto.jpeg',
    category: 'Finance',
    highlight: 'Real-time Data'
  },
  {
    title: 'Task Management System',
    description: 'A collaborative platform with real-time task tracking and team chat functionality.',
    technologies: ['React.js', 'Sass', 'WebSocket', 'REST API'],
   
    liveLink: '#',
    image: '/task.jpeg',
    category: 'Productivity',
    highlight: 'Collaboration'
  }
  // New projects based on your URLs
 
];

   const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [direction, setDirection] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [dragging, setDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  
  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filtered projects
  const filteredProjects = filterCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === filterCategory);

  useEffect(() => {
    // Reset current index when changing filters
    setCurrentIndex(0);
  }, [filterCategory]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, filteredProjects.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch and drag handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (diff > 50) {
      nextSlide();
      setDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsAutoPlaying(false);
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;
    
    if (diff > 50) {
      nextSlide();
      setDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setDragging(false);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background grid decoration */}
      <div className="absolute inset-0 grid grid-cols-12 gap-6 opacity-5 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="col-span-1 border-r border-gray-500 h-full"></div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="flex items-center text-3xl font-extrabold text-gray-200 mb-12">
            <span className="text-accent mr-2">03.</span>
            Featured Projects
            <motion.span 
              className="ml-4 h-px bg-gradient-to-r from-purple-500 to-transparent flex-grow"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </h2>

          {/* Category filters */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filterCategory === category 
                    ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <div 
            className="relative flex items-center justify-center overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div 
                key={currentIndex}
                custom={direction}
                initial={direction > 0 ? { x: '100%', opacity: 0 } : { x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={direction > 0 ? { x: '-100%', opacity: 0 } : { x: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 16 }}
                className="w-full"
              >
                <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
                  {/* Project Image */}
                  <motion.div
                    className="relative h-[40vh] min-h-[300px] overflow-hidden rounded-xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.5 }}
                    />
                    <Image
                      src={filteredProjects[currentIndex].image}
                      alt={filteredProjects[currentIndex].title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 p-6 z-20"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <span className="inline-block px-3 py-1 bg-accent text-white text-xs rounded-full mb-2">
                        {filteredProjects[currentIndex].category}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {filteredProjects[currentIndex].title}
                      </h3>
                    </motion.div>
                  </motion.div>
                  
                  {/* Project Details */}
                  <motion.div
                    className="p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700 flex flex-col relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="mb-auto">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <Code className="text-accent mr-2" size={18} />
                          <span className="text-gray-300 text-sm">{filteredProjects[currentIndex].technologies.length} Technologies</span>
                        </div>
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full">
                          {filteredProjects[currentIndex].highlight}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-6 text-lg">{filteredProjects[currentIndex].description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {filteredProjects[currentIndex].technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                 
                      <motion.a 
                        href={filteredProjects[currentIndex].liveLink} 
                        className="flex items-center text-accent hover:text-white transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation and Pagination */}
          <div className="mt-12">
            <div className="flex justify-between items-center">
              <motion.button 
                onClick={prevSlide} 
                className="p-3 bg-gray-800 rounded-full hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </motion.button>
              
              <div className="flex gap-2">
                {filteredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'w-8 bg-accent' : 'bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>
              
              <motion.button 
                onClick={nextSlide} 
                className="p-3 bg-gray-800 rounded-full hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
          
          {/* View all projects button */}
          {/* <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/projects"
              className="px-8 py-3 rounded-full border-2 border-accent text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300 flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Layers className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={18} />
              View All Projects
              <motion.span 
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}