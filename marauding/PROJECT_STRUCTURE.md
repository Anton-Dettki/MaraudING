# React/Next.js Project Structure Guide

## 📁 Current Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── page.module.css   # Page-specific styles
├── components/           # Reusable UI components
│   ├── Button/           # Button component
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── index.ts
│   ├── Header/           # Header component
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   └── index.ts
│   └── index.ts          # Components barrel export
├── hooks/                # Custom React hooks
│   ├── useLocalStorage.ts
│   └── useTheme.ts
├── lib/                  # Utility functions
│   └── utils.ts
└── types/                # TypeScript definitions
    └── index.ts
```

## 🎯 Key Principles

### 1. **Component Organization**
- Each component gets its own folder
- Include component file, styles, and index.ts
- Use barrel exports for clean imports

### 2. **File Naming Conventions**
- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Utilities: `camelCase.ts`
- Types: `index.ts` or descriptive names

### 3. **Import Organization**
```typescript
// External libraries first
import React from 'react';
import Image from 'next/image';

// Internal imports with @ alias
import { Button } from '@/components/Button';
import { useTheme } from '@/hooks/useTheme';
import { User } from '@/types';
```

## 🚀 Next Steps for Your Project

### 1. **Add More Components**
```
src/components/
├── Card/
├── Modal/
├── Form/
└── Navigation/
```

### 2. **Create Feature-Based Pages**
```
src/app/
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── dashboard/
    └── page.tsx
```

### 3. **Add State Management**
- For simple state: React Context
- For complex state: Zustand or Redux Toolkit
- For server state: TanStack Query

### 4. **Add API Layer**
```
src/
├── services/           # API calls
│   ├── api.ts
│   └── endpoints.ts
└── lib/
    └── api-client.ts
```

### 5. **Add Testing**
```
src/
├── __tests__/         # Test files
│   ├── components/
│   └── hooks/
└── __mocks__/         # Mock files
```

## 📚 Best Practices

### Component Structure
```typescript
// Button.tsx
import { ButtonProps } from '@/types';
import { cn } from '@/lib/utils';
import styles from './Button.module.css';

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return (
    <button className={cn(styles.button, styles[variant])}>
      {children}
    </button>
  );
}
```

### Custom Hooks
```typescript
// useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Hook implementation
}
```

### Type Definitions
```typescript
// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export type Theme = 'light' | 'dark';
```

## 🔧 Development Workflow

1. **Start with components** - Build reusable UI pieces
2. **Add hooks** - Extract logic into custom hooks
3. **Create pages** - Use components to build pages
4. **Add state management** - When components need to share state
5. **Add API integration** - Connect to backend services
6. **Add testing** - Ensure code quality

## 📖 Learning Resources

- [React Documentation](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 🎨 Styling Approach

- **CSS Modules** for component-specific styles
- **Global CSS** for app-wide styles
- **CSS Variables** for theming
- **Utility classes** for common patterns

This structure scales well from small projects to large applications!
