"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, X } from 'lucide-react';
import { YouTubeEmbed } from './YouTubeEmbed';

interface AudioMix {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  genre: string;
}

const audioMixes: AudioMix[] = [
  {
    id: '1',
    title: 'The RnB Throne with the King Of RnB Deejay Rane',
    description: 'High-energy RnB hits to keep the dance floor packed',
    thumbnail: 'https://i.ytimg.com/vi/RthnCMi_H5I/hqdefault.jpg',
    youtubeId: 'RthnCMi_H5I',
    duration: '1:34:46',
    genre: 'RnB'
  },
  {
    id: '2',
    title: 'Hangout Sessions with DJ Asiti',
    description: 'Sophisticated music for hangout sessions and chill vibes',
    thumbnail: 'https://i.ytimg.com/vi/jZZSqILIyOE/hqdefault.jpg',
    youtubeId: 'jZZSqILIyOE',
    duration: '2:28:29',
    genre: 'Hangout Sessions'
  },
  {
    id: '3',
    title: 'Ranefest Vol 1',
    description: 'Taste of Kenyan Music Rane Fest Experience',
    thumbnail: 'https://i.ytimg.com/vi/RnY6qtcUydM/hqdefault.jpg',
    youtubeId: 'RnY6qtcUydM',
    duration: '1:03:47',
    genre: 'Kenyan tunes'
  },
  // {
    // id: '4',
    // title: 'Throwback Hits',
    // description: 'Nostalgic favorites from the 80s, 90s, and 2000s',
    // thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    // youtubeId: 'dQw4w9WgXcQ',
    // duration: '52:08',
    // genre: 'Throwback'
  // }
];

export function AudioSection() {
  const [selectedMix, setSelectedMix] = useState<AudioMix | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="audio" ref={ref} className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Listen to My Mixes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the energy and versatility that I bring to every event.
            Each mix is crafted to create the perfect atmosphere for your special moments.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {audioMixes.map((mix) => (
            <motion.div
              key={mix.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMix(mix)}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={mix.thumbnail}
                  alt={mix.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:bg-primary">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {mix.genre}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                    {mix.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {mix.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {mix.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedMix && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMix(null)}
          >
            <motion.div
              className="bg-background rounded-lg p-6 w-full max-w-4xl pointer-events-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedMix.title}</h3>
                  <p className="text-muted-foreground">{selectedMix.description}</p>
                </div>
                <button
                  onClick={() => setSelectedMix(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="aspect-video">
                <YouTubeEmbed
                  videoId={selectedMix.youtubeId}
                  title={selectedMix.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
