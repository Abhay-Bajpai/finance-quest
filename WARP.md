# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Finance Quest is a gamified personal expense dashboard built as a React SPA where users track finances like an RPG. The app uses fantasy/gaming metaphors: expense categories are "Kingdoms" with health bars, savings goals are "Quests," and total savings contribute to growing a magical tree garden.

## Development Commands

### Local Development
```bash
npm run dev          # Start development server on http://localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint with React-specific rules
```

### Testing
No test suite is currently configured. When adding tests, consider:
- Jest + React Testing Library for component testing
- Cypress or Playwright for E2E testing of the RPG-like interactions

## Architecture & Code Structure

### Core Architecture Patterns
- **React Context Pattern**: Central state management via `FinanceContext` handles all financial data, player stats, and game progression
- **Component Composition**: Modular components with clear separation between UI components and page layouts  
- **RPG Theme Integration**: All financial concepts are abstracted through gaming metaphors (kingdoms, quests, XP, levels)

### Key Architectural Components

**State Management (`src/context/FinanceContext.jsx`)**
- Single source of truth for all financial data
- Mock data structure for kingdoms (expense categories) and goals (savings targets)
- Computed values for total spending, budget, and savings
- Player progression system (level, XP)

**Routing Structure (`src/App.jsx`)**
- Simple 3-page SPA: Dashboard (/) → Kingdom details (/kingdom/:id) → Goals (/goals)
- Context provider wraps entire app for global state access

**Animation System**
- Framer Motion throughout for RPG-like transitions and interactions
- Staggered animations on Dashboard for dramatic effect
- Growth animations in Garden component tied to savings amounts

### Component Organization
```
src/
├── components/          # Reusable UI components
│   ├── Garden.jsx      # Magical tree visualization (savings)
│   ├── KingdomCard.jsx # Expense category cards with health bars
│   ├── GoalCard.jsx    # Savings goal quest cards
│   ├── ProgressBar.jsx # Animated progress bars
│   └── Navbar.jsx      # Main navigation
├── pages/              # Route components
│   ├── Dashboard.jsx   # Main overview page
│   ├── Kingdom.jsx     # Individual expense category details
│   └── Goals.jsx       # Savings goals management
└── context/
    └── FinanceContext.jsx # Global state management
```

### Styling Architecture
- **Tailwind CSS** with custom RPG theme extensions
- Custom color palette: dark fantasy theme with neon accents (`bg-dark`, `bg-light`, `primary`, `accent-green`, etc.)
- Custom fonts: Cinzel Decorative for headings, Orbitron for UI text
- Glow effects and shadows for magical/fantasy aesthetic
- Responsive design with mobile-first approach

### Key Design Patterns
1. **Gamification Layer**: All financial data is presented through RPG metaphors
2. **Progress Visualization**: Heavy use of animated progress bars for budgets, goals, and XP
3. **Contextual Theming**: Color schemes change based on financial health (green = good, yellow = warning, red = over budget)
4. **Motion-First UI**: All interactions include meaningful animations to enhance the gaming experience

## Data Flow & State
- Financial data is mocked in `FinanceContext` - no backend integration yet
- Kingdom health calculations: `(spent / budget) * 100` determines visual state
- Garden growth tied to total savings: `Math.min(Math.max(savings / 50, 1), 10)`
- Player XP system exists but not yet connected to actual financial behaviors

## Development Notes

### When Adding New Features
- Maintain the RPG theming - all new financial concepts should use gaming metaphors
- Follow the established animation patterns using Framer Motion
- Ensure responsive design works across all device sizes
- Use the custom Tailwind theme colors and typography

### Extending the Gamification
- XP and level systems are ready for integration with actual financial behaviors
- Consider adding achievement systems, streaks, or seasonal events
- Garden growth algorithm can be enhanced with different plant types or biomes

### Performance Considerations
- Large animation libraries (Framer Motion) - be mindful of bundle size
- Chart rendering (Recharts) - consider virtualization for large datasets
- Image assets for future RPG elements should be optimized

## Deployment
Configured for Vercel deployment with zero setup required. The `vercel.json` configuration handles SPA routing correctly.
