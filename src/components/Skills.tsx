import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Database, 
  Brain, 
  BarChart3, 
  Code, 
  Cloud, 
  Settings,
  Activity,
  TrendingUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const coreGridRef = useRef<HTMLDivElement>(null);
  const techGridRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(coreGridRef.current?.children || [],
        { opacity: 0, y: 30, rotateY: 15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: coreGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(techGridRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: techGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Data Analytics",
      icon: BarChart3,
      description: "Statistical analysis, data exploration, and insights generation",
      color: "blue"
    },
    {
      title: "Data Science",
      icon: Database,
      description: "End-to-end data science pipeline development and optimization",
      color: "purple"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      description: "Supervised, unsupervised, and reinforcement learning algorithms",
      color: "cyan"
    },
    {
      title: "Deep Learning",
      icon: Activity,
      description: "Neural networks, CNNs, RNNs, and transformer architectures",
      color: "green"
    }
  ];

  const technologies = [
    {
      category: "Languages & Core",
      items: ["Python", "R", "SQL", "Pandas", "NumPy"],
      icon: Code,
      color: "blue"
    },
    {
      category: "ML & DL Frameworks",
      items: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch"],
      icon: Brain,
      color: "purple"
    },
    {
      category: "Computer Vision & NLP",
      items: ["OpenCV", "NLTK", "SpaCy", "Transformers"],
      icon: Activity,
      color: "cyan"
    },
    {
      category: "Visualization",
      items: ["Tableau", "Power BI", "Matplotlib", "Plotly"],
      icon: TrendingUp,
      color: "green"
    },
    {
      category: "Cloud & Deployment",
      items: ["AWS EC2", "SageMaker", "Streamlit", "Flask", "Docker"],
      icon: Cloud,
      color: "orange"
    },
    {
      category: "Tools & Others",
      items: ["Git", "Jupyter", "Excel"],
      icon: Settings,
      color: "pink"
    },
    {
      category: "Generative AI & Automation",
      items: ["OpenAI GPT", "LangChain", "Hugging Face", "AI Agents", "Prompt Engineering"],
      icon: Brain,
      color: "yellow"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent opacity-0"
        >
          Tech Stack
        </motion.h2>
        
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Comprehensive expertise in modern data science and machine learning technologies
        </p>

        {/* Core Areas */}
        <div ref={coreGridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((skill, index) => (
            <motion.div
              key={skill.title}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 text-center group cursor-pointer transition-all duration-300 hover:border-blue-500/50"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${skill.color}-500/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`h-8 w-8 text-${skill.color}-400`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <div ref={techGridRef} className="grid lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 group cursor-pointer transition-all duration-300 hover:border-purple-500/50"
            >
              <div className="flex items-center mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${tech.color}-500/20 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className={`h-6 w-6 text-${tech.color}-400`} />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {tech.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}