import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, Code, BarChart3, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      // Project cards floating animation
      gsap.fromTo(gridRef.current?.children || [],
        { 
          opacity: 0, 
          y: 100, 
          rotationY: 45,
          scale: 0.7
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Continuous floating animation for project cards
      gsap.to(gridRef.current?.children || [], {
        y: "random(-15, 15)",
        rotation: "random(-3, 3)",
        duration: "random(4, 6)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 3,
          from: "random"
        }
      });

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "FIFA 20 Player Role Classifier",
      description: "Advanced machine learning model using K-means clustering and semi-supervised learning to classify 18,000+ FIFA players into 4 distinct playing roles. Implemented PCA dimensionality reduction and achieved 89% accuracy through comprehensive performance metrics analysis.",
      tools: ["Python", "Scikit-learn", "PCA", "Plotly", "Pandas"],
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/adharshraj77/fifa-classifier",
      demo: null,
      category: "Machine Learning",
      metrics: "89% Accuracy • 18K+ Players • 4 Roles",
      icon: BarChart3,
      color: "blue",
      impact: "Revolutionized player analysis for sports analytics"
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Interactive Tableau dashboard integrated with Prophet time series forecasting model to predict retail sales with 94% accuracy. Implemented seasonal decomposition and trend analysis, resulting in 15% improvement in inventory planning efficiency.",
      tools: ["Python", "Tableau", "Prophet", "SQL", "AWS"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/adharshraj77/sales-dashboard",
      demo: "https://public.tableau.com/views/sales-dashboard",
      category: "Data Visualization",
      metrics: "94% Accuracy • 15% Efficiency Gain",
      icon: TrendingUp,
      color: "green",
      impact: "Optimized inventory management for retail chains"
    },
    {
      title: "Customer Churn Prediction API",
      description: "Production-ready ML pipeline deployed on AWS EC2 with Flask API for real-time customer churn prediction. Utilized XGBoost ensemble method achieving 92% precision and 88% recall, processing 1000+ predictions per minute with sub-200ms response time.",
      tools: ["Python", "Flask", "Docker", "AWS EC2", "XGBoost"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/adharshraj77/churn-api",
      demo: "https://churn-predictor.herokuapp.com",
      category: "MLOps",
      metrics: "92% Precision • <200ms Response • 1K+ req/min",
      icon: Zap,
      color: "purple",
      impact: "Reduced customer churn by 25% for SaaS companies"
    },
    {
      title: "NLP Sentiment Analysis Tool",
      description: "Deep learning sentiment analysis tool using LSTM neural networks trained on 50K+ social media posts. Achieved 91% accuracy with real-time processing capabilities and deployed via Streamlit with interactive visualization dashboard.",
      tools: ["Python", "TensorFlow", "NLTK", "Streamlit", "Docker"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/adharshraj77/sentiment-analyzer",
      demo: "https://sentiment-analyzer.streamlit.app",
      category: "Natural Language Processing",
      metrics: "91% Accuracy • 50K+ Training Posts • Real-time",
      icon: Code,
      color: "cyan",
      impact: "Enhanced social media monitoring for brands"
    }
  ];

  const handleProjectCatalogue = () => {
    window.open('https://astro-code-lab.vercel.app/', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateY: 45,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "power3.out"
      }
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -60, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 80, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
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
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            💻 Featured Projects
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Real-world applications showcasing end-to-end data science solutions with measurable business impact
          </motion.p>
        </motion.div>

        <motion.div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -20,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.4 }
              }}
              className="relative group cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Floating Card */}
              <div className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20 relative overflow-hidden h-full">
                
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))",
                      "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Project Image with Hover Effect */}
                <motion.div 
                  className="mb-4 overflow-hidden rounded-lg relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Overlay with Icon */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className={`w-16 h-16 bg-${project.color}-500/20 rounded-full flex items-center justify-center backdrop-blur-sm`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon size={32} className={`text-${project.color}-400`} />
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className={`w-12 h-12 bg-${project.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      <project.icon size={24} className={`text-${project.color}-400`} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className={`text-sm text-${project.color}-400`}>{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Badge */}
                <motion.div 
                  className="mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs text-cyan-400 font-mono bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                    {project.metrics}
                  </span>
                </motion.div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Impact */}
                <motion.div 
                  className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Target size={16} className="text-green-400" />
                    <span className="text-green-400 text-sm font-semibold">Business Impact</span>
                  </div>
                  <p className="text-green-300 text-sm">{project.impact}</p>
                </motion.div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <motion.span
                      key={tool}
                      className="px-3 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-xs border border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all duration-300"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + 0.6 + toolIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: true }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300 group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Github size={18} />
                    </motion.div>
                    GitHub
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink size={18} />
                      </motion.div>
                      Demo
                    </motion.a>
                  )}
                </div>

                {/* Floating Particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-${project.color}-400 rounded-full`}
                      style={{
                        left: `${15 + i * 12}%`,
                        top: `${20 + (i % 3) * 30}%`
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Catalogue CTA */}
        <motion.div
          ref={ctaRef}
          className="max-w-4xl mx-auto opacity-0"
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-lg p-8 rounded-2xl text-center border border-purple-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))",
                  "linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))",
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05))"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.h3 
              className="text-2xl font-bold text-white mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Explore More Projects
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Check out my complete project catalogue featuring 15+ data science projects, 
              including deep learning models, data pipelines, and business intelligence solutions.
            </motion.p>
            
            <motion.button
              onClick={handleProjectCatalogue}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 group relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              View Project Catalogue
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}