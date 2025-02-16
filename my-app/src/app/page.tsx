// src/app/page.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';



export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      <Footer />
     
    </main>
  );
}