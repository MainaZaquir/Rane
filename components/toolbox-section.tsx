"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Radio, 
  Headphones, 
  Mic, 
  Smartphone, 
  Camera, 
  Monitor,
  Volume2
} from 'lucide-react';

interface Equipment {
  id: string;
  name: string;
  description: string;
  icon: any;
  usage: string;
  examples: string[];
}

const equipment: Equipment[] = [
  {
    id: 'turntables',
    name: 'Professional Turntables',
    description: 'Industry-standard DJ turntables for seamless mixing and creative scratching',
    icon: Radio,
    usage: 'Live mixing and beat matching',
    examples: ['Smooth transitions', 'Creative scratching', 'Live remixing']
  },
  {
    id: 'mixer',
    name: 'Digital Mixer',
    description: 'Professional-grade mixer with effects processing and multiple inputs',
    icon: Volume2,
    usage: 'Audio control and effects',
    examples: ['EQ adjustments', 'Sound effects', 'Volume control']
  },
  {
    id: 'headphones',
    name: 'Studio Headphones',
    description: 'High-quality headphones for precise monitoring and cueing',
    icon: Headphones,
    usage: 'Track previewing and monitoring',
    examples: ['Beat matching', 'Next song selection', 'Audio quality check']
  },
  {
    id: 'microphone',
    name: 'Wireless Microphone',
    description: 'Professional wireless mic system for announcements and MC duties',
    icon: Mic,
    usage: 'Live announcements and hosting',
    examples: ['Wedding introductions', 'Event hosting', 'Crowd interaction']
  },
  {
    id: 'phone',
    name: 'Mobile Control Hub',
    description: 'Smartphone with DJ apps and remote control capabilities',
    icon: Smartphone,
    usage: 'Remote control and music management',
    examples: ['Playlist management', 'Remote mixing', 'Music requests']
  },
  {
    id: 'camera',
    name: 'Content Camera Setup',
    description: 'Professional camera equipment for capturing event highlights',
    icon: Camera,
    usage: 'Content creation and documentation',
    examples: ['Event videos', 'Social content', 'Highlight reels']
  },
  {
    id: 'monitor',
    name: 'Performance Monitor',
    description: 'High-resolution display for track information and visual feedback',
    icon: Monitor,
    usage: 'Visual feedback and control',
    examples: ['Track visualization', 'BPM monitoring', 'Playlist display']
  }
];

export function ToolboxSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        damping: 20
      }
    }
  };

  return (
    <section id="toolbox" ref={ref} className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My Professional Toolbox
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every piece of equipment in my arsenal is chosen for reliability, quality, and versatility. 
            Here's what powers my performances and content creation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {equipment.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group"
              whileHover={{ 
                scale: 1.08,
                rotateY: 8,
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:border-primary/70 group-hover:bg-primary/5 perspective-1000">
                
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-primary/30 group-hover:scale-125 group-hover:rotate-12">
                  <item.icon className="w-8 h-8 text-primary transition-all duration-500 group-hover:scale-125 group-hover:text-primary-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-primary mb-2">Primary Use:</div>
                  <div className="text-sm text-muted-foreground">{item.usage}</div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-sm font-medium mb-2">Examples:</div>
                  <ul className="space-y-1">
                    {item.examples.map((example, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Professional Grade Equipment
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every event deserves the highest quality sound and production. 
            My equipment ensures crystal-clear audio and professional presentation for any occasion.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Book Your Event
          </button>
        </motion.div>
      </div>
    </section>
  );
}