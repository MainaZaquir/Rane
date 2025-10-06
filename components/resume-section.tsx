"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Music, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface Milestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  achievements: string[];
  type: 'career' | 'achievement' | 'skill';
  skills?: string[];
}

const milestones: Milestone[] = [
  {
    id: '1',
    year: '2025',
    title: 'Senior Event DJ & Content Creator',
    organization: 'Freelance Professional',
    location: 'Regional Market',
    description: 'Established premium DJ and content creation services, specializing in high-end weddings and corporate events.',
    achievements: [
      'Averaged 15+ events per month',
      'Maintained 5-star rating across all platforms',
      'Created viral content reaching 100K+ views',
      'Built network of 50+ vendor partners'
    ],
    type: 'career',
    skills: ['Advanced Mixing', 'Content Strategy', 'Event Management', 'Client Relations']
  },
  {
    id: '2',
    year: '2024',
    title: 'Regional DJ Excellence Award',
    organization: 'Entertainment Professionals Association',
    location: 'Annual Conference',
    description: 'Recognized for outstanding service quality and innovation in event entertainment.',
    achievements: [
      'Top 10% of regional DJs',
      'Client satisfaction rating: 4.9/5',
      'Featured in industry magazine',
      'Speaking engagement at DJ summit'
    ],
    type: 'achievement'
  },
  {
    id: '3',
    year: '2023',
    title: 'DJ & Entertainment Coordinator',
    organization: 'Premier Event Company',
    location: 'Metropolitan Area',
    description: 'Led entertainment services for luxury weddings and corporate events while developing content creation skills.',
    achievements: [
      'Managed 200+ events annually',
      'Trained 5 junior DJs',
      'Implemented new audio systems',
      'Launched video content service'
    ],
    type: 'career',
    skills: ['Team Leadership', 'System Design', 'Video Production', 'Quality Control']
  },
  {
    id: '4',
    year: '2023',
    title: 'King of RnB',
    organization: 'Nairobi Singalong',
    location: 'Nairobi & environs',
    description: 'Cemented my work in digital mixing, sound engineering, and performance techniques.',
    achievements: [
      'Graduated with honors',
      'Mastered Serato DJ Pro',
      'Sound engineering certification',
      'Advanced scratching techniques'
    ],
    type: 'skill',
    skills: ['Digital Mixing', 'Sound Engineering', 'Performance Arts', 'Technical Mastery']
  },
  {
    id: '5',
    year: '2022',
    title: 'Resident DJ',
    organization: 'Brew Bistro',
    location: 'Westlands, Nairobi',
    description: 'Weekly Friday show and live event DJ, building audience and developing signature style.',
    achievements: [
      'Booked 10+ live events',
      'Social media growth: 15K followers',
      'Music industry connections'
    ],
    type: 'career',
    skills: ['Radio Broadcasting', 'Audience Engagement', 'Music Curation', 'Live Performance']
  },
  {
    id: '6',
    year: '2022',
    title: 'DJ Services Launch',
    organization: 'Personal Business Venture',
    location: '254 Brewing',
    description: 'Started professional DJ services focusing on private parties and small events.',
    achievements: [
      'Established client base of 30+ customers',
      'Invested in professional equipment',
      'Developed signature mixing style',
      'Built reputation for reliability'
    ],
    type: 'career',
    skills: ['Business Development', 'Equipment Management', 'Customer Service', 'Event Planning']
  },
  {
    id: '7',
    year: '2019',
    title: 'Deejaying in my room',
    organization: 'None',
    location: 'My Room',
    description: 'Student DJ, discovered passion for music curation and live performance.',
    achievements: [
      'Music Director for 2 years',
      'Increased listenership by 25%',
      'Organized campus music events',
      'Mentored new student DJs eg: Deejay Asiti'
    ],
    type: 'career',
    skills: ['Music Direction', 'Event Organization', 'Mentorship', 'Creative Programming']
  }
];

export function ResumeSection() {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'career': return Music;
      case 'achievement': return Award;
      case 'skill': return Users;
      default: return Calendar;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'career': return 'text-blue-500';
      case 'achievement': return 'text-yellow-500';
      case 'skill': return 'text-green-500';
      default: return 'text-primary';
    }
  };

  return (
    <section id="resume" ref={ref} className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My Journey in Music
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From college radio to professional events, here's how I've grown as a DJ and content creator 
            over the years. Each milestone represents growth, learning, and passion for music.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const Icon = getTypeIcon(milestone.type);
              const isExpanded = expandedMilestone === milestone.id;
              
              return (
                <motion.div
                  key={milestone.id}
                  className="relative pl-12 sm:pl-20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 sm:left-4 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center ${getTypeColor(milestone.type)}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute left-12 sm:left-16 top-0">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="bg-card border border-border rounded-xl p-6 mt-6 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-102"
                    onClick={() => setExpandedMilestone(isExpanded ? null : milestone.id)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            {milestone.organization}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {milestone.location}
                          </div>
                        </div>
                      </div>
                      
                      <button className="p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {milestone.description}
                    </p>

                    {/* Expanded Content */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isExpanded ? 'auto' : 0, 
                        opacity: isExpanded ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border space-y-4">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-medium mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {milestone.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        {milestone.skills && (
                          <div>
                            <h4 className="font-medium mb-2">Skills Developed:</h4>
                            <div className="flex flex-wrap gap-2">
                              {milestone.skills.map((skill, idx) => (
                                <span 
                                  key={idx}
                                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: '7+', label: 'Years Experience' },
            { value: '300+', label: 'Events Completed' },
            { value: '10+', label: 'Vendor Partners' },
            { value: '4.2★', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}