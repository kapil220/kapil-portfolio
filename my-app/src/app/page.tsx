import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black text-white relative">
      {/* Social Links (Left Side) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 hidden md:flex">

        <a href="https://github.com/kapil220" target="_blank">
          <FaGithub className="text-gray-300 hover:text-white text-2xl transition-transform hover:scale-110" />
        </a>
        <a href="https://linkedin.com/in/kapil8361" target="_blank">
          <FaLinkedin className="text-gray-300 hover:text-white text-2xl transition-transform hover:scale-110" />
        </a>
        <a href="https://x.com/Kp8361" target="_blank">
          <FaTwitter className="text-gray-300 hover:text-white text-2xl transition-transform hover:scale-110" />
        </a>
      </div>

      
      

      {/* Page Content */}
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
