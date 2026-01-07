# AI Rules for Shinjitsu Blog Platform

## Tech Stack

- **React 19.2.3** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with strict type checking
- **React Router 7.11.0** - Client-side routing with hash-based navigation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Icon library with consistent, clean icons
- **Vite** - Fast build tool and development server
- **shadcn/ui** - Pre-built UI components (already installed, ready to use)

## Library Usage Rules

### Components
- **Use shadcn/ui components** when available for common UI elements (buttons, inputs, cards, etc.)
- **Create custom components** in `src/components/` for unique functionality
- **Keep components small and focused** - aim for under 100 lines per component
- **Use TypeScript interfaces** for component props to ensure type safety

### Styling
- **Use Tailwind CSS classes exclusively** for all styling
- **Follow the existing color scheme** defined in `tailwind.config.js` (ink, paper, accent colors)
- **Use the predefined shadow classes** (`shadow-manga`, `shadow-manga-dark`, etc.)
- **Implement responsive design** using Tailwind's responsive utilities

### Routing
- **Keep all routes in `src/App.tsx`** using React Router
- **Use hash-based routing** (`HashRouter`) for better compatibility
- **Implement scroll restoration** for better UX
- **Create page components** in `src/pages/` directory

### Data Management
- **Use the existing data structure** in `src/data/posts.ts` for blog posts
- **Import types from `src/types.ts`** for consistent type definitions
- **Keep data files separate** from components for maintainability

### Icons
- **Use Lucide React icons** exclusively
- **Import icons individually** (don't import entire library)
- **Keep icon usage consistent** with existing patterns

### File Organization
- **Source code goes in `src/` folder**
- **Pages go in `src/pages/`**
- **Components go in `src/components/`**
- **Data goes in `src/data/`**
- **Types go in `src/types.ts`**

### Best Practices
- **Use functional components with hooks**
- **Implement proper TypeScript typing**
- **Follow the existing code style and patterns**
- **Keep dependencies minimal** - only add what's necessary
- **Test components thoroughly** before adding new features
- **Use the existing dark/light theme system**
- **Maintain accessibility** in all components

### When to Add New Libraries
- **Only add new packages** when absolutely necessary
- **Check if shadcn/ui has** the component you need first
- **Consider if the feature** can be built with existing tools
- **Update package.json** and run `npm install` when adding dependencies