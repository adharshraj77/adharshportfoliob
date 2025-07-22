import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, Code, BarChart3, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
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
      description: "Developed a machine learning model using K-means clustering and semi-supervised learning to classify 18,000+ FIFA players into 4 distinct playing roles. Achieved 89% accuracy using performance metrics analysis and feature engineering with PCA dimensionality reduction.",
      tools: ["Python", "Scikit-learn", "PCA", "Plotly", "Pandas"],
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/[yourhandle]/fifa-classifier",
      demo: null,
      category: "Machine Learning",
      metrics: "89% Accuracy • 18K+ Players • 4 Roles"
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Built an interactive Tableau dashboard with Prophet time series forecasting model to predict retail sales with 94% accuracy. Implemented seasonal decomposition and trend analysis, resulting in 15% improvement in inventory planning efficiency.",
      tools: ["Python", "Tableau", "Prophet", "SQL", "AWS"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/[yourhandle]/sales-dashboard",
      demo: "https://public.tableau.com/views/[your-dashboard]",
      category: "Data Visualization",
      metrics: "94% Accuracy • 15% Efficiency Gain"
    },
    {
      title: "Customer Churn Prediction API",
      description: "Deployed a production-ready ML pipeline on AWS EC2 with Flask API for real-time customer churn prediction. Used XGBoost ensemble method achieving 92% precision and 88% recall, processing 1000+ predictions per minute with sub-200ms response time.",
      tools: ["Python", "Flask", "Docker", "AWS EC2", "XGBoost"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/[yourhandle]/churn-api",
      demo: "https://churn-predictor.herokuapp.com",
      category: "MLOps",
      metrics: "92% Precision • <200ms Response • 1K+ req/min"
    },
    {
      title: "NLP Sentiment Analysis Tool",
      description: "Created a deep learning sentiment analysis tool using LSTM neural networks trained on 50K+ social media posts. Achieved 91% accuracy with real-time processing capabilities and deployed via Streamlit with interactive visualization dashboard.",
      tools: ["Python", "TensorFlow", "NLTK", "Streamlit", "Docker"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/[yourhandle]/sentiment-analyzer",
      demo: "https://sentiment-analyzer.streamlit.app",
      category: "Natural Language Processing",
      metrics: "91% Accuracy • 50K+ Training Posts • Real-time"
    }
  ];

  const handleProjectCatalogue = () => {
    // This will be replaced with the actual URL provided by the user
    window.open('https://your-project-catalogue-url.com', '_blank');
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-0"
        >
          💻 Featured Projects
        </motion.h2>
        
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Real-world applications showcasing end-to-end data science solutions with measurable business impact
        </p>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                rotateX: 2,
              }}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 group cursor-pointer transition-all duration-300 hover:border-purple-500/50"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="mb-4 overflow-hidden rounded-lg"
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                    className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    {project.category === 'Machine Learning' && <BarChart3 size={24} className="text-purple-400" />}
                    {project.category === 'Data Visualization' && <BarChart3 size={24} className="text-green-400" />}
                    {project.category === 'MLOps' && <Code size={24} className="text-blue-400" />}
                    {project.category === 'Natural Language Processing' && <Code size={24} className="text-cyan-400" />}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-purple-400">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <span className="text-xs text-cyan-400 font-mono bg-cyan-400/10 px-2 py-1 rounded">
                  {project.metrics}
                </span>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-xs border border-cyan-400/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
                {project.demo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Catalogue CTA */}
        <motion.div
          ref={ctaRef}
          className="max-w-4xl mx-auto opacity-0"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-lg p-8 rounded-2xl text-center border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore More Projects
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my complete project catalogue featuring 15+ data science projects, 
              including deep learning models, data pipelines, and business intelligence solutions.
            </p>
            <motion.button
              onClick={handleProjectCatalogue}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 group"
            >
              View Project Catalogue
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}