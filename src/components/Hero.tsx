import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Download, Rocket, User, Brain, Database, BarChart3, Cpu,BookOpen } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(nameRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(taglineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(subtextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.2"
    );
  }, []);

  const handleViewResume = () => {
    document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutMe = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={heroRef} className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 
            ref={nameRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent opacity-0"
          >
            Kavala Adharsh Raj
          </h1>
          
          <p 
            ref={taglineRef}
            className="text-xl md:text-2xl lg:text-3xl text-white mb-4 opacity-0"
          >
            Certified Data Scientist | ML & DL Developer | Business Insight Creator
          </p>
          
          <p 
            ref={subtextRef}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 italic"
          >
            "Solving business problems with code, insight, and storytelling."
          </p>
          
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
          >
            <motion.button
              onClick={handleViewResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              View Resume
            </motion.button>
            
            <motion.button
              onClick={handleExploreProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 group"
            >
              <Rocket className="w-5 h-5 group-hover:animate-bounce" />
              Explore Projects
            </motion.button>
            
            <motion.button
              onClick={handleAboutMe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 group"
            >
              <User className="w-5 h-5 group-hover:animate-bounce" />
              About Me
            </motion.button>

            <motion.button
              onClick={() => window.open("https://astro-code-lab.vercel.app/", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 group"
              >
              <BookOpen className="w-5 h-5 group-hover:animate-bounce" />
              Catalogue
              </motion.button>
            
          </div>
        </motion.div>
      </div>
      
      {/* Floating AI Elements */}
      <motion.div
        className="absolute top-20 left-10 flex items-center justify-center w-16 h-16 bg-blue-500/10 backdrop-blur-lg rounded-xl border border-blue-500/20"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 180, 360],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Brain className="w-8 h-8 text-blue-400" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16 flex items-center justify-center w-12 h-12 bg-purple-500/10 backdrop-blur-lg rounded-xl border border-purple-500/20"
        animate={{
          y: [10, -10, 10],
          rotate: [360, 180, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Database className="w-6 h-6 text-purple-400" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 flex items-center justify-center w-14 h-14 bg-cyan-500/10 backdrop-blur-lg rounded-full border border-cyan-500/20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <BarChart3 className="w-7 h-7 text-cyan-400" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-8 flex items-center justify-center w-10 h-10 bg-green-500/10 backdrop-blur-lg rounded-lg border border-green-500/20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Cpu className="w-5 h-5 text-green-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
