"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Music, Camera, Mic, Users, Award, Clock } from 'lucide-react';
import Rane from './Assets/Rane.jpg';

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { icon: Music, value: '300+', label: 'Events DJ\'d' },
    { icon: Camera, value: '100+', label: 'Content Videos' },
    { icon: Users, value: '10K+', label: 'Happy Guests' },
    { icon: Award, value: '4.5★', label: 'Average Rating' },
  ];

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={Rane}
                alt="Deejay Rane"
                width={500}
                height={625}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            
            <motion.div
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-card border border-border rounded-xl p-4 shadow-lg hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">5+ Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                I'm More Than Just a DJ
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm Deejay Rane! For over 5 years, I've been creating unforgettable experiences 
                  through music. What started as a passion for music has evolved into a comprehensive 
                  entertainment service that combines professional DJ skills with modern content creation.
                </p>
                <p>
                  My journey began in my room back in 2022, where I discovered my love for curating the perfect 
                  playlist for any given moment. Today, I not only provide DJ services for Events, corporate 
                  events, and parties, but I also create engaging content that captures the energy and 
                  emotion of each celebration.
                </p>
                <p>
                  When I'm behind the decks, I'm reading the room, feeling the energy, and crafting a 
                  musical journey that keeps everyone engaged. When I'm creating content, I'm telling 
                  the story of your event through dynamic videos and social media content that you'll 
                  treasure forever.
                </p>
              </div>
            </div>

            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Let's Work Together
              </button>
              <button 
                onClick={() => document.querySelector('#resume')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-border hover:border-primary text-foreground hover:text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View Experience
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}