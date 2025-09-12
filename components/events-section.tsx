"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
  images: string[];
  stats: {
    guests: number;
    rating: number;
    duration: string;
  };
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
}

const events: Event[] = [
  {
    id: '1',
    title: 'Sarah & Michael\'s Wedding',
    date: 'September 15, 2024',
    location: 'Grand Oak Ballroom',
    type: 'Wedding',
    description: 'An elegant evening celebration with a perfect blend of romantic dinner music and energetic dance floor hits.',
    images: [
      './components/assets/Event-1.png',
      'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg',
      'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg'
    ],
    stats: {
      guests: 150,
      rating: 5.0,
      duration: '6 hours'
    },
    testimonial: {
      text: "Deejay Rane made our wedding absolutely perfect! The music selection was spot-on and kept everyone dancing all night.",
      author: "Sarah Johnson",
      role: "Bride"
    }
  },
  {
    id: '2',
    title: 'TechCorp Annual Gala',
    date: 'August 20, 2024',
    location: 'Metropolitan Convention Center',
    type: 'Corporate',
    description: 'A sophisticated corporate event featuring ambient background music during networking and upbeat selections for the after-party.',
    images: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
    ],
    stats: {
      guests: 300,
      rating: 4.9,
      duration: '4 hours'
    },
    testimonial: {
      text: "Professional, punctual, and perfectly matched to our corporate culture. Excellent music curation for our diverse audience.",
      author: "David Chen",
      role: "Event Director"
    }
  },
  {
    id: '3',
    title: 'Summer Pool Party Bash',
    date: 'July 4, 2024',
    location: 'Sunset Resort',
    type: 'Party',
    description: 'A high-energy pool party with summer hits, Latin rhythms, and crowd favorites that kept the party going until dawn.',
    images: [
      'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg',
      'https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg',
      'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg'
    ],
    stats: {
      guests: 200,
      rating: 5.0,
      duration: '8 hours'
    },
    testimonial: {
      text: "Best party DJ in the city! The energy was incredible and the music selection was absolutely perfect for our summer bash.",
      author: "Maria Rodriguez",
      role: "Event Host"
    }
  }
];

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="events" ref={ref} className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Recent Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of the memorable events I've had the pleasure to be part of. 
            Each celebration is unique and tailored to create the perfect atmosphere.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedEvent(event);
                setCurrentImageIndex(0);
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={event.images[0]}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Event Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {event.type}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 text-white px-2 py-1 rounded flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{event.stats.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {event.stats.guests} guests
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-background rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedEvent.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedEvent.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {selectedEvent.stats.guests} guests
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <div className="aspect-video">
                  <Image
                    src={selectedEvent.images[currentImageIndex]}
                    alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {selectedEvent.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedEvent.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex 
                              ? 'bg-white' 
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Event Details</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {selectedEvent.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{selectedEvent.stats.guests}</div>
                        <div className="text-sm text-muted-foreground">Guests</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                          {selectedEvent.stats.rating}
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </div>
                        <div className="text-sm text-muted-foreground">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{selectedEvent.stats.duration}</div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Client Testimonial</h4>
                    <blockquote className="bg-muted/50 p-6 rounded-lg">
                      <p className="text-muted-foreground italic mb-4">
                        "{selectedEvent.testimonial.text}"
                      </p>
                      <footer>
                        <div className="font-semibold">{selectedEvent.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{selectedEvent.testimonial.role}</div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}