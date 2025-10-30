# Twin3 Quest Platform

A modern Next.js application for creating and managing user quests with AI-powered suggestions.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Material Design 3
- **UI Components**: Radix UI + shadcn/ui
- **AI**: Google Genkit
- **State Management**: React Server Components
- **Form Handling**: React Hook Form + Zod

## ✨ Features

- 🎨 Material Design 3 UI with custom components
- 🤖 AI-powered quest suggestions
- 📱 Responsive design (mobile & desktop)
- 🌓 Dark mode support
- 🎯 Type-safe with TypeScript
- 🔄 Server Actions for data mutations
- 📊 Quest management dashboard

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Fill in your environment variables
# Edit .env.local with your actual values
```

## 🔧 Environment Variables

Required environment variables (see `.env.example`):

```env
# Google AI (Genkit)
GOOGLE_GENAI_API_KEY=your_google_ai_api_key

# Application
NEXT_PUBLIC_APP_URL=http://localhost:9002
NODE_ENV=development
```

## 🏃 Development

```bash
# Start development server
npm run dev

# Start Genkit development UI
npm run genkit:dev

# Type checking
npm run typecheck

# Linting
npm run lint
```

The application will be available at `http://localhost:9002`

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── actions/           # Server Actions
│   ├── business/          # Business dashboard pages
│   └── components/        # App-specific components
├── components/            # Shared components
│   ├── ui/               # Base UI components (shadcn/ui)
│   └── shared/           # Shared business components
├── lib/                   # Utilities and configurations
│   ├── constants/        # Application constants
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Utility functions
├── hooks/                 # Custom React hooks
└── ai/                    # AI/Genkit flows
```

## 📚 Documentation

Comprehensive documentation is available in the `docs/` directory:

- [Design System](./docs/design-system/) - Material Design 3 guidelines
- [Architecture](./docs/architecture/) - Project architecture and patterns
- [Migration Guides](./docs/migration/) - Migration and upgrade guides

## 🎨 Design System

This project uses Material Design 3 with custom components:

- **Buttons**: 7 variants (filled, tonal, outlined, text, elevated, fab, destructive)
- **Typography**: Kanit (headings) + Montserrat (body)
- **Colors**: Customizable theme with dark mode support
- **Components**: Fully typed, reusable, and accessible

See [Material Design Guide](./docs/design-system/material-design-guide.md) for details.

## 🧩 Key Components

### Shared Components
- `PageHeader` - Consistent page headers
- `EmptyState` - Empty state displays
- `StatusBadge` - Status indicators
- `DataTable` - Generic data tables
- `BottomNav` - Mobile navigation
- `UserNav` - User menu
- `ModeToggle` - Theme switcher

### UI Components
All base UI components from shadcn/ui with Material Design 3 styling.

## 🔄 Scripts

```bash
npm run dev          # Start development server (port 9002)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
npm run genkit:dev   # Start Genkit development UI
npm run genkit:watch # Start Genkit with watch mode
```

## 📝 Quest Types

The platform supports 6 types of quests:

1. **Sensory Feedback** - Product sensory evaluation
2. **Dine & Review** - Restaurant and food reviews
3. **Ad Campaign** - Marketing campaign testing
4. **App UX** - Application usability testing
5. **In-Store Experience** - Retail experience evaluation
6. **Survey** - General questionnaires

## 🤝 Contributing

1. Follow the existing code style
2. Use TypeScript for all new code
3. Follow Material Design 3 guidelines
4. Write meaningful commit messages
5. Update documentation as needed

## 📄 License

[Your License Here]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Material Design 3](https://m3.material.io/)
- [Google Genkit](https://firebase.google.com/docs/genkit)
