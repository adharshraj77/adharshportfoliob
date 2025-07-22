import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, CheckCircle, FileText, Award, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(contentRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(highlightsRef.current?.children || [],
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: Briefcase,
      text: "Delivered 10+ end-to-end data science projects",
      color: "blue"
    },
    {
      icon: Award,
      text: "Expert in clustering, NLP, and model deployment",
      color: "purple"
    },
    {
      icon: CheckCircle,
      text: "Deployed production models on AWS and Streamlit",
      color: "green"
    },
    {
      icon: FileText,
      text: "5+ years of experience in data analytics",
      color: "cyan"
    },
    {
      icon: CheckCircle,
      text: "Proven track record in business impact delivery",
      color: "orange"
    }
  ];

  const handleDownloadResume = () => {
    // Placeholder for resume download
    alert('Resume download will be available soon!');
  };

  return (
    <section ref={sectionRef} id="resume" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent opacity-0"
        >
          📄 Resume
        </motion.h2>
        
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Comprehensive overview of my professional journey, technical expertise, and achievements
        </p>

        <motion.div
          ref={contentRef}
          className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl mb-8 border border-gray-700/50 opacity-0"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Career Highlights</h3>
          </div>
          
          <div ref={highlightsRef} className="grid md:grid-cols-2 gap-4 mb-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.text}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-start gap-3 text-left p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-8 h-8 bg-${highlight.color}-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <highlight.icon className={`text-${highlight.color}-400`} size={16} />
                </motion.div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {highlight.text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-full font-bold text-lg hover:from-orange-700 hover:to-pink-700 transition-all duration-300 group"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Download size={24} />
            </motion.div>
            Download Resume PDF
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400"
        >
          View my complete professional journey, technical skills, and project portfolio
        </motion.p>
      </div>
    </section>
  );
}