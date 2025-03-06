// src/components/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-400">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/kapil220"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors hover:text-gray-200"
        >
          <Github className="w-5 h-5" />

        </a>
        <a
          href="https://linkedin.com/in/kapil8361"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors hover:text-gray-200"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:kapilrajput8361@gmail.com"
          className="hover:text-accent transition-colors hover:text-gray-200"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm">
        Built with Next.js and Tailwind CSS
      </p>
    </footer>
  );
}