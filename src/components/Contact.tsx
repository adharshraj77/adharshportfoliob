import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from 'react-hook-form';
import { Github, Linkedin, Phone, Mail, MessageSquare, Send, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

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

      gsap.fromTo(socialRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(formRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
    alert('Message sent successfully!');
    reset();
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/[yourhandle]',
      color: 'gray',
      description: 'View my code repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/[yourname]',
      color: 'blue',
      description: 'Connect professionally'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/91XXXXXXXXXX',
      color: 'green',
      description: 'Quick chat and discussions'
    },
    {
      icon: MessageSquare,
      label: 'Telegram',
      url: 'https://t.me/[yourusername]',
      color: 'cyan',
      description: 'Instant messaging'
    },
    {
      icon: Phone,
      label: 'Phone',
      url: 'tel:+91XXXXXXXXXX',
      color: 'yellow',
      description: 'Direct phone contact'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:youremail@example.com',
      color: 'pink',
      description: 'Professional inquiries'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent opacity-0"
        >
          Let's Connect
        </motion.h2>
        
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          🚀 Ready to turn your data challenges into business solutions? Let's discuss how we can collaborate to drive data-driven insights and business growth.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Links */}
          <motion.div
            ref={socialRef}
            className="space-y-6 opacity-0"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-pink-400" />
              </div>
              Get In Touch
            </h3>
            <div className="grid gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, x: 10, rotateY: 5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-lg rounded-lg text-gray-300 hover:text-white border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 bg-${social.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <social.icon size={24} className={`text-${social.color}-400`} />
                  </motion.div>
                  <div>
                    <span className="font-medium text-lg">{social.label}</span>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {social.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 opacity-0"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-cyan-400" />
              </div>
              Send Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-1 block">{errors.name.message as string}</span>
                )}
              </div>

              <div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-1 block">{errors.email.message as string}</span>
                )}
              </div>

              <div>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-4 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none"
                />
                {errors.message && (
                  <span className="text-red-400 text-sm mt-1 block">{errors.message.message as string}</span>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-cyan-600 to-pink-600 text-white rounded-lg font-bold text-lg hover:from-cyan-700 hover:to-pink-700 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send size={20} />
                </motion.div>
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}