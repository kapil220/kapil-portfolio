// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-md' : 'py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">KR.</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Experience', 'Projects', 'Contact'].map((item, i) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-sm text-gray-300 hover:text-accent"
            >
              <span className="text-accent mr-1">0{i + 1}.</span>
              {item}
            </Link>
          ))}
         
        </div>
      </div>
    </nav>
  );
}