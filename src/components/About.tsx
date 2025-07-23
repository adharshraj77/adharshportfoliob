import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Brain, Award, Mail, User, Code, Target,School} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(statsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: MapPin, label: "Location", value: "India,Chennai", color: "blue" },
    { icon: Brain, label: "Experience", value: "1+ Years", color: "purple" },
    { icon: Award, label: "Specilization", value: "AI & ML + DataScience", color: "green" },
    { icon: Mail, label: "Email", value: "kavalaadharshraj@gmail.com", color: "cyan" },
    { icon: School, label: "VIT-AP University", value: "Btech CSE AI/ML", color: "red" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent opacity-0"
        >
          About Me
        </motion.h2>
        
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Passionate about transforming data into actionable business insights
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={contentRef}
            className="space-y-6 opacity-0"
          >
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Journey</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm a certified data scientist passionate about analytics, machine learning, and model deployment. 
                I turn raw data into real-world impact using clean pipelines, scalable models, and data storytelling.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans from exploratory data analysis to deploying production-ready ML models on cloud platforms. 
                I believe in making complex data insights accessible and actionable for business stakeholders.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mission & Vision</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Dedicated to bridging the gap between complex data science concepts and practical business solutions. 
                I focus on creating models that not only perform well but also drive measurable business value.
              </p>
            </div>
          </motion.div>

          <div ref={statsRef} className="space-y-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-6 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 cursor-pointer group transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 text-${stat.color}-400`} />
                </div>
                <div>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                  <p className="text-white font-semibold text-lg">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
