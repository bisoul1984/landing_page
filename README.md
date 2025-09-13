# TechCorp - Modern Technology Solutions Website

A cutting-edge, fully responsive website for high-tech companies built with Next.js, TypeScript, and modern web technologies. This project showcases enterprise-grade UX with interactive animations, AI-powered features, and a scalable architecture.

## Features

### Core Features
- **Interactive Landing Page** - 3D scroll-based transitions with Three.js and Framer Motion
- **AI-Powered Global Search** - Intelligent search with keyboard navigation
- **Multi-language Support** - i18n-ready with locale switcher
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Progressive Web App (PWA)** - Offline support and app-like experience
- **Real-time Analytics Dashboard** - Charts and metrics using Recharts
- **Blog/News Section** - Markdown support with rich text editor
- **User Authentication** - OAuth via Google/GitHub with JWT sessions
- **Live Chat Assistant** - AI-powered customer support
- **Contact Forms** - Interactive forms with validation and submission handling

### Technical Features
- **Next.js 14** - App Router with server-side rendering
- **TypeScript** - Full type safety and better developer experience
- **TailwindCSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Smooth animations and micro-interactions
- **Three.js** - 3D graphics and interactive elements
- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **SEO Optimized** - Meta tags, structured data, and performance optimization
- **Accessibility** - WCAG 2.1 AA compliant with ARIA labels
- **Performance** - Lighthouse score 95+ with optimized loading

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend & Services
- **NextAuth.js** - Authentication
- **Prisma** - Database ORM
- **Sanity.io** - Headless CMS
- **Chart.js/Recharts** - Data visualization
- **Socket.io** - Real-time communication

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Playwright** - E2E testing
- **GitHub Actions** - CI/CD pipeline

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/techcorp-website.git
   cd techcorp-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   # Database
   DATABASE_URL="your-database-url"
   
   # Authentication
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   
   # Sanity CMS
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-sanity-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   SANITY_API_TOKEN="your-sanity-api-token"
   
   # Analytics
   NEXT_PUBLIC_GA_ID="your-google-analytics-id"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── hooks/                # Custom React hooks
├── utils/                # Helper functions
└── constants/            # App constants
```

## Design System

### Colors
- **Primary**: Blue (#3B82F6) - Main brand color
- **Secondary**: Gray (#64748B) - Supporting elements
- **Accent**: Purple (#D946EF) - Highlights and CTAs
- **Success**: Green (#22C55E) - Positive states
- **Warning**: Yellow (#F59E0B) - Caution states
- **Error**: Red (#EF4444) - Error states

### Typography
- **Primary Font**: Inter - Clean, modern sans-serif
- **Monospace**: JetBrains Mono - Code and technical content
- **Display**: Cal Sans - Headlines and branding

### Components
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Cards**: Consistent card design with hover effects
- **Forms**: Accessible form components with validation
- **Navigation**: Responsive navigation with mobile menu
- **Modals**: Reusable modal components
- **Toasts**: Notification system

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Configure environment variables

### Docker
```bash
# Build the Docker image
docker build -t techcorp-website .

# Run the container
docker run -p 3000:3000 techcorp-website
```

## Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimization Techniques
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Webpack bundle analyzer
- **Caching**: Static generation and ISR
- **CDN**: Global content delivery network

## Configuration

### TailwindCSS
Custom configuration with design tokens, animations, and responsive utilities.

### Next.js
Optimized for performance with custom webpack configuration and PWA support.

### TypeScript
Strict mode enabled with custom type definitions and path mapping.

## Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run e2e
```

### Type Checking
```bash
npm run type-check
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use Prettier for code formatting
- Follow ESLint rules
- Write meaningful commit messages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: [docs.techcorp.com](https://docs.techcorp.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/techcorp-website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/techcorp-website/discussions)
- **Email**: support@techcorp.com

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics library
- [Lucide](https://lucide.dev/) - Icon library

---

Built with ❤️ by the TechCorp team 