# DJ Rane - Professional DJ Portfolio Website

A stunning website for DJ Rane featuring dark nightlife aesthetics, interactive music showcases and event booking capabilities.

## 🚀 Features

### Technical Features
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Performance Optimized**: Next.js App Router with static generation
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **Smooth Animations**: Framer Motion for professional micro-interactions
- **Dark Theme**: Consistent nightlife aesthetic with purple/cyan color scheme
- **TypeScript**: Full type safety across the application

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives with custom styling
- **Audio**: React Player with custom controls
- **Payments**: Stripe integration ready
- **Booking**: Calendly integration placeholder

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with audio provider
│   ├── page.tsx            # Main homepage
│   ├── globals.css         # Global styles and theme
│   └── api/                # API routes
├── components/
│   ├── sections/           # Page sections
│   ├── audio/              # Audio player components
│   ├── navigation/         # Navigation components
│   └── ui/                 # Reusable UI components
├── lib/                    # Utilities and configurations
└── types/                  # TypeScript definitions
```

### Build Commands
```bash
npm run build    # Build for production
npm run start    # Start production server
npm run dev      # Development server
```

## 📱 Mobile Optimization

- Touch-friendly interface with appropriate button sizes
- Swipe gestures for music and merch carousels
- Optimized images with responsive loading
- Performance-focused with minimal bundle size

## 🎵 Audio Player Features

- **Persistent playback**: Continues across page navigation
- **Custom controls**: Play/pause, skip, volume, progress
- **Vinyl aesthetic**: Rotating album art and themed design
- **Background loading**: Pre-loads next tracks for smooth experience

## 📅 Event Management

- **Calendar integration**: Upcoming and past events
- **Venue information**: Comprehensive event details
- **Photo galleries**: Past event memories and recaps

## 🔒 Security & Performance

- **Type safety**: Full TypeScript coverage
- **Form validation**: Client and server-side validation
- **Image optimization**: Next.js Image component with lazy loading
- **Bundle analysis**: Optimized imports and code splitting
