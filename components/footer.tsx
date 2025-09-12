"use client";

import { motion } from 'framer-motion';
import { Music, Mail, Phone, Instagram, Youtube, MapPin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/deejay_Rane', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@Dj_Rane_The_scratch_kid', label: 'YouTube' },
    { icon: Mail, href: 'mailto:vikxkunta@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+25442469001', label: 'Phone' },
    { icon: Phone, href: 'tel:+25438680796', label: 'Phone' },
  ];

  const quickLinks = [
    { href: '#audio', label: 'Listen' },
    { href: '#events', label: 'Events' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Deejay Rane</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional DJ and content creator making your nights and events unforgettable. 
              5+ years of experience bringing energy to celebrations.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Nairobi Area & Beyond
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Events</li>
              <li>Corporate Events</li>
              <li>Private Parties</li>
              <li>Audio/Visual Setup</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:deejayrane@example.com" className="hover:text-primary transition-colors">
                  vikxkunta@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  +(254) 424-69001
                </a>
              </div>
            </div>
            
            <div className="flex gap-3 mt-4">
              {socialLinks.slice(0, 2).map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group hover:shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Deejay Rane. All rights reserved.
          </p>
          
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Built and managed by{' '}
            <a 
              href="https://coredigitaltechy.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer"
              >
            CoreDigital
            </a>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}