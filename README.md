# DJ Rane - Professional DJ Portfolio Website

A stunning, production-ready Next.js website for DJ Rane featuring dark nightlife aesthetics, interactive music showcases, merchandise store, and event booking capabilities.

## 🚀 Features

### Core Functionality
- **Hero Section**: Animated logo with vinyl record aesthetic and quick action buttons
- **Music Showcase**: Custom-styled embedded players with streaming platform integration
- **Merch Store**: Product grid with countdown timers for limited drops and bundle offers
- **Events Calendar**: Upcoming shows with booking integration and past events archive
- **About Timeline**: Vinyl-themed timeline showing career progression
- **Behind the Scenes**: Content grid for vlogs, studio sessions, and voice notes
- **Contact System**: Professional contact form with social media integration
- **Persistent Audio Player**: Bottom bar player for continuous music experience

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
- **Forms**: React Hook Form with validation

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

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#8B5CF6) - Main brand color
- **Secondary**: Cyan (#00FFFF) - Accent and highlights
- **Background**: Black (#000000) with subtle gradients
- **Text**: White (#FFFFFF) with gray variations for hierarchy

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with proper line spacing
- **Special**: Neon text effects for emphasis

### Components
- **Cards**: Semi-transparent backgrounds with hover effects
- **Buttons**: Gradient backgrounds with glow effects
- **Badges**: Contextual colors for different content types
- **Animations**: Smooth transitions and vinyl record rotations

## 🔧 Setup Instructions

### Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

### Integration Guidelines

#### Stripe Integration
1. Sign up for a Stripe account
2. Get your publishable and secret keys
3. Update the environment variables
4. Implement product catalog in Stripe dashboard
5. Update product IDs in the merch section

#### Calendly Integration
1. Create a Calendly account and event type
2. Get your embed URL
3. Replace the booking button with Calendly embed
4. Customize the booking flow to match site theme

#### CMS Integration (Optional)
For the Behind the Scenes section:
1. Choose a headless CMS (Sanity, Contentful, or Strapi)
2. Create content types for videos, voice notes, and studio sessions
3. Replace static data with CMS API calls
4. Add content management interface

#### Audio Streaming Setup
1. Upload mix files to a CDN or streaming service
2. Update audio URLs in the music section data
3. Configure streaming platform embeds (SoundCloud, Mixcloud, Spotify)

## 🚀 Deployment

The site is optimized for deployment on:
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Alternative with edge functions support
- **Custom hosting**: Static export ready

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

## 🛍️ E-commerce Features

- **Product catalog**: Grid layout with filtering options
- **Limited drops**: Countdown timers for urgent sales
- **Bundle offers**: Multi-product packages with discounts
- **Cart system**: Ready for Stripe checkout integration
- **Wishlist**: Save items for later (implementation ready)

## 📅 Event Management

- **Calendar integration**: Upcoming and past events
- **Ticket links**: Direct integration with ticketing platforms
- **Venue information**: Comprehensive event details
- **Photo galleries**: Past event memories and recaps

## 🔒 Security & Performance

- **Type safety**: Full TypeScript coverage
- **Form validation**: Client and server-side validation
- **Image optimization**: Next.js Image component with lazy loading
- **Bundle analysis**: Optimized imports and code splitting

## 📈 Analytics Ready

The site is prepared for analytics integration:
- Google Analytics 4 setup ready
- Custom event tracking for music plays
- E-commerce tracking for merchandise sales
- Contact form conversion tracking

This website provides a solid foundation for a professional DJ's online presence with room for growth and customization based on specific needs and branding requirements.