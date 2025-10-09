"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Instagram, Youtube, ChevronRight } from 'lucide-react';

interface SidebarAction {
  id: string;
  icon: any;
  label: string;
  action: () => void;
  color: string;
}

export function RecruiterSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const actions: SidebarAction[] = [
    {
      id: "hire",
      icon: Mail,
      label: "Book Me",
      action: () => {
        const EMAIL = "vikxkunta@gmail.com";
        const SUBJECT = "Event Booking Inquiry";
        const BODY = "Hi Deejay Rane, I'd like to discuss booking you for an upcoming event.";
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
      },
      color: "bg-blue-600 hover:bg-blue-800"
  },
    {
      id: 'call',
      icon: Phone,
      label: 'Call Now',
      action: () => window.open('tel:+25442469001'),
      color: 'bg-green-600 hover:bg-green-800'
    },
    {
      id: 'instagram',
      icon: Instagram,
      label: 'Instagram',
      action: () => window.open('https://instagram.com/deejay_Rane', '_blank'),
      color: 'bg-pink-600 hover:bg-pink-800'
    },
    {
      id: 'youtube',
      icon: Youtube,
      label: 'YouTube',
      action: () => window.open('https://youtube.com/@Dj_Rane_The_scratch_kid', '_blank'),
      color: 'bg-red-600 hover:bg-red-800'
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <motion.div
        className="flex items-center"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="bg-card border border-border rounded-l-xl shadow-lg mr-1"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 space-y-3">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-sm">Quick Actions</h3>
                  <p className="text-xs text-muted-foreground">Let's connect!</p>
                </div>
                
                {actions.map((action) => (
                  <motion.button
                    key={action.id}
                    onClick={action.action}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white font-medium transition-all ${action.color}`}
                  whileHover={{ scale: 1.08, x: -5 }}
                  >
                    <action.icon className="w-5 h-5" />
                    <span className="text-sm">{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>


        <motion.button
            className="bg-primary text-primary-foreground w-12 h-20 rounded-l-xl flex flex-col items-center justify-center shadow-lg transition-colors duration-300 hover:bg-primary/90"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.08, x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            
          <span className="text-xs font-medium">HIRE ME</span>

            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="w-5 h-5 mb-1" />
            </motion.div>
        </motion.button>
      </motion.div>


      {!isExpanded && (
        <motion.div
          className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg"
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          Click for quick actions
        </motion.div>
      )}
    </div>
  );
}