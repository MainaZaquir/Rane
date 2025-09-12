"use client";

import { HeroSection } from '@/components/hero-section';
import { AudioSection } from '@/components/audio-section';
import { EventsSection } from '@/components/events-section';
import { AboutSection } from '@/components/about-section';
import { ToolboxSection } from '@/components/toolbox-section';
import { ResumeSection } from '@/components/resume-section';
import { ContactSection } from '@/components/contact-section';
import { RecruiterSidebar } from '@/components/recruiter-sidebar';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <RecruiterSidebar />
      
      <main>
        <HeroSection />
        <AudioSection />
        <EventsSection />
        <AboutSection />
        <ToolboxSection />
        <ResumeSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}