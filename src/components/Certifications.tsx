import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Calendar, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(gridRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certifications = [
    {
      title: "IBM Data Science Certificate",
      issuer: "IBM",
      date: "Jan 2024",
      description: "Complete data science methodology and tools mastery",
      color: "blue",
      verified: true
    },
    {
      title: "Google Cloud ML Engineer",
      issuer: "Google Cloud",
      date: "Mar 2024",
      description: "Machine Learning on Google Cloud Platform expertise",
      color: "green",
      verified: true
    },
    {
      title: "Advanced Machine Learning",
      issuer: "Simplilearn",
      date: "Feb 2024",
      description: "Deep learning and neural networks specialization",
      color: "purple",
      verified: true
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Apr 2024",
      description: "Cloud computing and AWS services fundamentals",
      color: "orange",
      verified: true
    }
  ];

  return (
    <section ref={sectionRef} id="certifications" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent opacity-0"
        >
          🎓 Certifications
        </motion.h2>
        
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Industry-recognized certifications validating expertise in data science and cloud technologies
        </p>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
              }}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 text-center cursor-pointer group transition-all duration-300 hover:border-green-500/50"
            >
              <div className="mb-4">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto bg-${cert.color}-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative`}
                >
                  <Award size={32} className={`text-${cert.color}-400`} />
                  {cert.verified && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <ExternalLink size={12} className="text-white" />
                    </div>
                  )}
                </motion.div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 mb-2 font-medium">
                {cert.issuer}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-sm text-gray-400 leading-relaxed">
                {cert.description}
              </p>

              {cert.verified && (
                <div className="mt-4 flex items-center justify-center gap-1 text-xs text-green-400">
                  <ExternalLink size={12} />
                  <span>Verified</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}