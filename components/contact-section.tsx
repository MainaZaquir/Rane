"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Calendar, Clock, Music } from 'lucide-react';

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vikxkunta@gmail.com',
      action: () => window.open('mailto:vikxkunta@gmail.com?subject=Event Booking Inquiry', '_blank')
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 742-469-001',
      action: () => window.open('tel:+25442469001')
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nairobi Area & Beyond',
      action: null
    }
  ];

  const eventTypes = [
    { icon: Music, title: 'Events', description: 'Rnb, Afro, Amapiano and more' },
    { icon: Calendar, title: 'Corporate Events', description: 'Conferences, galas, and team building' },
    { icon: Clock, title: 'Private Parties', description: 'Birthdays, hangouts, and celebrations' },
  ];

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make your event unforgettable? Let's discuss your vision and create the perfect 
            musical experience for your special day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                      method.action ? 'hover:bg-muted cursor-pointer' : 'bg-muted/50'
                    }`}
                    onClick={method.action || undefined}
                    whileHover={method.action ? { scale: 1.02 } : {}}
                    whileTap={method.action ? { scale: 0.98 } : {}}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{method.title}</div>
                      <div className="text-sm text-muted-foreground">{method.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            
            <div>
              <h4 className="text-lg font-semibold mb-4">Event Types I Specialize In:</h4>
              <div className="space-y-3">
                {eventTypes.map((type, index) => (
                  <motion.div
                    key={type.title}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <type.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{type.title}</div>
                      <div className="text-sm text-muted-foreground">{type.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            
            <motion.div
              className="grid grid-cols-3 gap-4 pt-6 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { value: '24hr', label: 'Response' },
                { value: '100%', label: 'Reliable' },
                { value: '4.5★', label: 'Rated' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          
          <motion.div
            className="bg-muted/30 rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Book a Consultation</h3>
              <p className="text-muted-foreground text-sm">
                Schedule a free 15-minute call to discuss your event needs
              </p>
            </div>
            
            
            <div className="bg-white rounded-lg p-8 text-center border-2 border-dashed border-border min-h-[400px] flex items-center justify-center">
              <div className="space-y-4">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Calendly Integration</h4>
                  <p className="text-muted-foreground text-sm">
                    Calendly booking widget would be embedded here.<br />
                    Visitors can select available time slots for consultations.
                  </p>
                </div>
                <button 
                  onClick={() => window.open('https://calendly.com/deejayrane', '_blank')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Open Calendly
                </button>
              </div>
            </div>
          </motion.div>
        </div>


        <motion.div
          className="text-center mt-16 p-8 bg-primary/5 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every great event starts with great music. Let's work together to create an unforgettable experience 
            that your guests will be talking about for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('mailto:vikxkunta@gmail.com?subject=Event Booking Inquiry&body=Hi Deejay Rane, I\'d like to discuss booking you for an upcoming event.', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Send Message
            </button>
            <button 
              onClick={() => window.open('tel:+254742469001')}
              className="border border-border hover:border-primary text-foreground hover:text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Call Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}