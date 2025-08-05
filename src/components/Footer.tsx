import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold neon-text mb-2">Kavala Adharsh Raj </h3>
            <p className="text-gray-400">Data Scientist & ML Engineer</p>
          </div>

          <div className="flex justify-center gap-8 mb-6 text-gray-400">
            <motion.a 
              href="#about" 
              whileHover={{ color: '#3B82F6' }}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              About
            </motion.a>
            <motion.a 
              href="#skills" 
              whileHover={{ color: '#3B82F6' }}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Skills
            </motion.a>
            <motion.a 
              href="#projects" 
              whileHover={{ color: '#3B82F6' }}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ color: '#3B82F6' }}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>© {currentYear} Adharsh Raj. Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and lots of data</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
