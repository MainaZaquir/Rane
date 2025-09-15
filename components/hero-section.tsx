"use client";

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, ChevronDown, Music } from 'lucide-react';

// Dynamic import for Three.js component
const ParticleBackground = dynamic(
  () => import('@/components/particle-background'),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
  }
);

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAudio = () => {
    const audioSection = document.querySelector('#audio');
    if (audioSection) {
      audioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />}>
        <ParticleBackground />
      </Suspense>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Added Deejay Rane branding */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Music className="w-7 h-7 text-primary-foreground" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Deejay Rane</h2>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I make your nights and events{' '}
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            unforgettable
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Professional DJ and content creator bringing energy to weddings, corporate events, 
          and celebrations across the region.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            onClick={scrollToAudio}
            className="group relative overflow-hidden px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Listen Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 text-lg font-semibold border-2 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            Book Event
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground cursor-pointer"
          onClick={scrollToAudio}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}