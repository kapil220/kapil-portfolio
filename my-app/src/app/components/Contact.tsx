// src/components/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-accent mb-4">04. Whats Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">Get In Touch</h3>
          <p className="max-w-lg mx-auto text-gray-400 mb-12">
            I am currently looking for new opportunities. Whether you have a question
            or just want to say hi, I will try my best to get back to you!
          </p>
          <a
            href="mailto:kapilrajput8361@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 rounded"
          >
            <Mail className="w-5 h-5 mr-2" />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
