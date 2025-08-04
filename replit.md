# Overview

This is a comprehensive university orientation platform for Benin called "Après mon Bac" (After my Baccalaureate). The application helps high school graduates navigate their higher education options by providing information about universities, academic programs, internships, competitions, courses, and guidance. It features an interactive orientation test, AI chat assistance, and detailed information about educational pathways in Benin.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom design system featuring premium gradients, glass effects, and sophisticated animations
- **UI Components**: Radix UI primitives with custom shadcn/ui components for accessibility and consistency
- **Navigation**: React Router for client-side routing with dedicated pages for universities, programs, internships, competitions, courses, and guidance
- **State Management**: React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Server Framework**: Express.js with TypeScript for API development
- **Database ORM**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Development Setup**: Hot module replacement with Vite integration for seamless full-stack development
- **Static Assets**: Served through Express with Vite middleware in development

## Data Management
- **Database**: PostgreSQL with Drizzle schema definitions
- **Schema**: User management with authentication support
- **Storage Layer**: Abstract storage interface with in-memory implementation for development
- **Data Structure**: Comprehensive university and program data with relationships between institutions and academic offerings

## Key Features
- **Orientation System**: Interactive personality and career aptitude testing
- **AI Chat Integration**: Personalized guidance based on test results and user preferences
- **University Browser**: Detailed information about institutions with filtering and search capabilities
- **Program Explorer**: Academic program information with career outcomes and school associations
- **Resource Hub**: Internships, competitions, courses, and educational guidance

## Design System
- **Premium UI**: Custom gradient system with blue primary (#3B82F6) and orange accent (#FF6B35) colors
- **Animations**: Smooth transitions, hover effects, and scroll-based reveals
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint coverage
- **Accessibility**: Floating accessibility features and keyboard navigation support

# External Dependencies

## Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL database hosting with connection pooling
- **Drizzle Kit**: Database migrations and schema management

## UI & Styling
- **Radix UI**: Comprehensive accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Modern icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component for image galleries

## Development Tools
- **Vite**: Fast build tool with HMR and optimized bundling
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Type safety across the entire application stack

## Email Services
- **Resend**: Email service for newsletter subscriptions and contact forms
- **Supabase Functions**: Serverless functions for email handling and form processing

## Form Handling
- **React Hook Form**: Performant form library with validation
- **Hookform Resolvers**: Integration between form validation and schema validation
- **Drizzle Zod**: Type-safe schema validation using Zod

## Additional Libraries
- **React Query**: Server state management and caching
- **Date-fns**: Date manipulation and formatting
- **Class Variance Authority**: Type-safe variant handling for components
- **Sonner**: Toast notification system for user feedback