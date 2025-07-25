# iGlowLife Platform - Project Architecture

## Overview

This is a full-stack web application for iGlowLife, a platform focused on real projects, skill development, and mentorship. The application uses a modern stack with React frontend, Express backend, PostgreSQL database with Drizzle ORM, and shadcn/ui for the component library.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Router**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: shadcn/ui built on Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **API Style**: RESTful API with `/api` prefix

### Data Layer
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for database migrations
- **Validation**: Zod schemas for runtime type validation

## Key Components

### Database Schema
Currently includes a basic user system:
- `users` table with id, username, and password fields
- UUID primary keys with PostgreSQL's `gen_random_uuid()`
- Zod validation schemas for type safety

### Storage Layer
- Abstract `IStorage` interface for data operations
- `MemStorage` implementation for development/testing
- Prepared for PostgreSQL integration via Drizzle ORM
- CRUD operations: getUser, getUserByUsername, createUser

### Authentication System
- Foundation laid with user schema and storage interface
- Session management prepared with connect-pg-simple
- Password hashing and authentication logic to be implemented

### UI Components
- Complete shadcn/ui component library implementation
- Consistent design system with CSS variables
- Dark/light theme support built-in
- Responsive design with mobile-first approach
- Accessibility features through Radix UI primitives

### Development Tools
- Hot reload with Vite HMR
- TypeScript checking and compilation
- Tailwind CSS with PostCSS processing
- ESLint and development tooling ready

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle HTTP requests with `/api` prefix
3. **Business Logic**: Route handlers use storage interface for data operations
4. **Data Storage**: Storage implementation handles database operations
5. **Response**: JSON responses sent back to client with error handling

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Express.js with TypeScript support
- Vite build tooling with plugins

### Database & ORM
- Drizzle ORM with PostgreSQL dialect
- Neon serverless PostgreSQL driver
- Database migration tools

### UI & Styling
- Tailwind CSS for styling
- Radix UI primitives for accessibility
- Lucide React for icons
- shadcn/ui component system

### Development Tools
- TypeScript for type safety
- Vite plugins for Replit integration
- PostCSS for CSS processing

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- tsx for running TypeScript backend directly
- Environment variables for database configuration
- Replit-specific development tools and banners

### Production Build
- Vite builds optimized frontend bundle to `dist/public`
- esbuild compiles backend to `dist/index.js`
- Static file serving from Express in production
- Node.js process for running the compiled backend

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for PostgreSQL connection
- Separate development and production configurations
- Database migrations run via `drizzle-kit push`

### File Structure
- `client/` - Frontend React application
- `server/` - Backend Express application  
- `shared/` - Common schemas and types
- `migrations/` - Database migration files
- `dist/` - Production build output

The architecture supports scalable development with clear separation of concerns, type safety throughout the stack, and modern development practices.