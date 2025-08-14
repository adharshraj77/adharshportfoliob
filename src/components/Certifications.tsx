import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Calendar, ExternalLink, CheckCircle, Star, Trophy, Medal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for cards
      gsap.fromTo(gridRef.current?.children || [],
        { 
          opacity: 0, 
          y: 100, 
          rotationX: 45,
          scale: 0.7
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Continuous floating animation
      gsap.to(gridRef.current?.children || [], {
        y: "random(-10, 10)",
        rotation: "random(-2, 2)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: "random"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certifications = [
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "Jan 2024",
      description: "Complete data science methodology covering Python, SQL, machine learning, and data visualization",
      color: "blue",
      verified: true,
      icon: Trophy,
      level: "Professional",
      skills: ["Python", "SQL", "Machine Learning", "Data Viz"]
    },
    {
      title: "Google Cloud ML Engineer",
      issuer: "Google Cloud",
      date: "Mar 2024",
      description: "Advanced machine learning on GCP with TensorFlow, AutoML, and MLOps best practices",
      color: "green",
      verified: true,
      icon: Medal,
      level: "Expert",
      skills: ["GCP", "TensorFlow", "MLOps", "AutoML"]
    },
    {
      title: "Advanced Machine Learning Specialization",
      issuer: "Simplilearn",
      date: "Feb 2024",
      description: "Deep learning, neural networks, computer vision, and natural language processing mastery",
      color: "purple",
      verified: true,
      icon: Star,
      level: "Advanced",
      skills: ["Deep Learning", "CNN", "RNN", "NLP"]
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Apr 2024",
      description: "Cloud computing fundamentals, AWS services, security, and architectural best practices",
      color: "orange",
      verified: true,
      icon: Award,
      level: "Foundational",
      skills: ["AWS", "Cloud Computing", "Security", "Architecture"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 45,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "back.out(1.7)"
      }
    }
  };

  return (
    <section ref={sectionRef} id="certifications" className="py-20 px-4 bg-gray-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🏆 Professional Certifications
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Industry-recognized certifications validating expertise in data science, machine learning, and cloud technologies
          </motion.p>
        </motion.div>

        <motion.div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.08,
                y: -15,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Floating Card */}
              <div className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 text-center transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20 relative overflow-hidden">
                
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(34, 197, 94, 0.1))",
                      "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))",
                      "linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Level Badge */}
                <motion.div
                  className={`absolute top-4 right-4 px-2 py-1 bg-${cert.color}-500/20 text-${cert.color}-400 text-xs font-bold rounded-full border border-${cert.color}-500/30`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {cert.level}
                </motion.div>

                {/* Icon with Animation */}
                <motion.div 
                  className="mb-4 relative"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-20 h-20 mx-auto bg-${cert.color}-500/20 rounded-full flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    />
                    <cert.icon size={36} className={`text-${cert.color}-400 relative z-10`} />
                    
                    {cert.verified && (
                      <motion.div 
                        className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + 0.8,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle size={16} className="text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
                
                {/* Content */}
                <motion.h3 
                  className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {cert.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-400 mb-2 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {cert.issuer}
                </motion.p>
                
                <motion.div 
                  className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </motion.div>
                
                <motion.p 
                  className="text-sm text-gray-400 leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {cert.description}
                </motion.p>

                {/* Skills Tags */}
                <motion.div 
                  className="flex flex-wrap gap-1 justify-center mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`px-2 py-1 bg-${cert.color}-500/10 text-${cert.color}-400 text-xs rounded-full border border-${cert.color}-500/20`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + 0.8 + skillIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                {cert.verified && (
                  <motion.div 
                    className="flex items-center justify-center gap-1 text-xs text-green-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                    viewport={{ once: true }}
                  >
                    <ExternalLink size={12} />
                    <span>Verified Certificate</span>
                  </motion.div>
                )}

                {/* Floating Particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-${cert.color}-400 rounded-full`}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}