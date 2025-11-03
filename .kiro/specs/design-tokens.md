# Design Tokens

## Overview
Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to ensure consistency and maintainability.

## Color System

### Primary Colors
```css
--primary: 222.2 47.4% 11.2%
--primary-foreground: 210 40% 98%
```

### Secondary Colors
```css
--secondary: 210 40% 96.1%
--secondary-foreground: 222.2 47.4% 11.2%
```

### Accent Colors
```css
--accent: 210 40% 96.1%
--accent-foreground: 222.2 47.4% 11.2%
```

### Destructive Colors
```css
--destructive: 0 84.2% 60.2%
--destructive-foreground: 210 40% 98%
```

### Muted Colors
```css
--muted: 210 40% 96.1%
--muted-foreground: 215.4 16.3% 46.9%
```

### Background & Foreground
```css
--background: 0 0% 100%
--foreground: 222.2 84% 4.9%
--card: 0 0% 100%
--card-foreground: 222.2 84% 4.9%
--popover: 0 0% 100%
--popover-foreground: 222.2 84% 4.9%
```

### Border & Input
```css
--border: 214.3 31.8% 91.4%
--input: 214.3 31.8% 91.4%
--ring: 222.2 84% 4.9%
```

### Chart Colors
```css
--chart-1: 12 76% 61%
--chart-2: 173 58% 39%
--chart-3: 197 37% 24%
--chart-4: 43 74% 66%
--chart-5: 27 87% 67%
```

### Matrix Colors (Custom)
```css
--matrix-physical: 142 76% 36%    /* Green */
--matrix-social: 221 83% 53%      /* Blue */
--matrix-digital: 262 83% 58%     /* Purple */
--matrix-spiritual: 280 100% 70%  /* Violet */
```

### Semantic Colors

**Success:**
```css
--success: 142 76% 36%
--success-foreground: 0 0% 100%
```

**Warning:**
```css
--warning: 43 74% 66%
--warning-foreground: 222.2 84% 4.9%
```

**Error:**
```css
--error: 0 84.2% 60.2%
--error-foreground: 210 40% 98%
```

**Info:**
```css
--info: 221 83% 53%
--info-foreground: 0 0% 100%
```

## Typography

### Font Families
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
--font-mono: 'JetBrains Mono', 'Fira Code', monospace
```

### Font Sizes

**Mobile + Tablet (< 768px):**
```css
--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 0.875rem   /* 14px */
--text-lg: 1rem         /* 16px */
--text-xl: 1.25rem      /* 20px */
--text-2xl: 1.5rem      /* 24px */
```

**Desktop (≥ 768px):**
```css
--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 1rem       /* 16px */
--text-lg: 1.125rem     /* 18px */
--text-xl: 1.25rem      /* 20px */
--text-2xl: 1.875rem    /* 30px */
```

### Font Weights
```css
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

### Line Heights
```css
--leading-none: 1
--leading-tight: 1.25
--leading-snug: 1.375
--leading-normal: 1.5
--leading-relaxed: 1.625
--leading-loose: 2
```

## Spacing Scale

### Base Unit: 4px (0.25rem)

```css
--spacing-0: 0
--spacing-0.5: 0.125rem   /* 2px */
--spacing-1: 0.25rem      /* 4px */
--spacing-1.5: 0.375rem   /* 6px */
--spacing-2: 0.5rem       /* 8px */
--spacing-2.5: 0.625rem   /* 10px */
--spacing-3: 0.75rem      /* 12px */
--spacing-3.5: 0.875rem   /* 14px */
--spacing-4: 1rem         /* 16px */
--spacing-5: 1.25rem      /* 20px */
--spacing-6: 1.5rem       /* 24px */
--spacing-8: 2rem         /* 32px */
--spacing-10: 2.5rem      /* 40px */
--spacing-12: 3rem        /* 48px */
--spacing-16: 4rem        /* 64px */
```

### Component-Specific Spacing

**Mobile + Tablet:**
```css
--section-padding-x: 1rem        /* 16px - px-4 */
--section-padding-y: 0.75rem     /* 12px - py-3 */
--section-gap: 0.5rem            /* 8px - gap-2 */
--section-divider: 0.5rem        /* 8px - h-2 */
```

**Desktop:**
```css
--section-padding-x: 1.5rem      /* 24px - px-6 */
--section-padding-y: 1rem        /* 16px - py-4 */
--section-gap: 1rem              /* 16px - gap-4 */
```

## Border Radius

```css
--radius-none: 0
--radius-sm: 0.125rem     /* 2px */
--radius-base: 0.25rem    /* 4px */
--radius-md: 0.375rem     /* 6px */
--radius-lg: 0.5rem       /* 8px */
--radius-xl: 0.75rem      /* 12px */
--radius-2xl: 1rem        /* 16px */
--radius-full: 9999px
```

### Component-Specific Radius
```css
--radius-card: 0.5rem           /* 8px - rounded-lg */
--radius-button: 0.375rem       /* 6px - rounded-md */
--radius-input: 0.375rem        /* 6px - rounded-md */
--radius-badge: 9999px          /* rounded-full */
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Component-Specific Shadows
```css
--shadow-card: var(--shadow-sm)
--shadow-dropdown: var(--shadow-md)
--shadow-modal: var(--shadow-xl)
```

## Z-Index Scale

```css
--z-base: 0
--z-dropdown: 1000
--z-sticky: 1020
--z-fixed: 1030
--z-modal-backdrop: 1040
--z-modal: 1050
--z-popover: 1060
--z-tooltip: 1070
--z-notification: 1080
```

## Transitions

### Duration
```css
--duration-fast: 150ms
--duration-base: 200ms
--duration-slow: 300ms
--duration-slower: 500ms
```

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Common Transitions
```css
--transition-all: all 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-colors: color, background-color, border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-transform: transform 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-opacity: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)
```

## Breakpoints

```css
--breakpoint-sm: 640px    /* Tablet start */
--breakpoint-md: 768px    /* Desktop start */
--breakpoint-lg: 1024px   /* Large desktop */
--breakpoint-xl: 1280px   /* Extra large desktop */
--breakpoint-2xl: 1536px  /* 2X large desktop */
```

## Touch Targets

```css
--touch-target-min: 44px  /* Minimum touch target size */
--touch-target-comfortable: 48px
```

## Icon Sizes

```css
--icon-xs: 0.75rem        /* 12px - h-3 w-3 */
--icon-sm: 0.875rem       /* 14px - h-3.5 w-3.5 */
--icon-base: 1rem         /* 16px - h-4 w-4 */
--icon-md: 1.25rem        /* 20px - h-5 w-5 */
--icon-lg: 1.5rem         /* 24px - h-6 w-6 */
--icon-xl: 2rem           /* 32px - h-8 w-8 */
```

## Usage Guidelines

### Applying Design Tokens

**In Tailwind:**
```tsx
// Use Tailwind classes that map to design tokens
<div className="bg-primary text-primary-foreground rounded-lg p-4">
```

**In CSS:**
```css
.custom-component {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
}
```

**In JavaScript:**
```tsx
// Access CSS variables
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary');
```

### Token Naming Convention

Format: `--{category}-{property}-{variant}`

Examples:
- `--color-primary-500`
- `--spacing-section-x`
- `--radius-card`
- `--shadow-dropdown`

### When to Create New Tokens

✅ **Do create tokens for:**
- Values used in 3+ places
- Values that define brand identity
- Values that need to be consistent across themes
- Values that may change based on context (light/dark mode)

❌ **Don't create tokens for:**
- One-off values specific to a single component
- Values that are purely decorative
- Values that are calculated dynamically

## Dark Mode Tokens

### Color Adjustments
```css
.dark {
  --background: 222.2 84% 4.9%
  --foreground: 210 40% 98%
  --card: 222.2 84% 4.9%
  --card-foreground: 210 40% 98%
  --popover: 222.2 84% 4.9%
  --popover-foreground: 210 40% 98%
  --primary: 210 40% 98%
  --primary-foreground: 222.2 47.4% 11.2%
  --secondary: 217.2 32.6% 17.5%
  --secondary-foreground: 210 40% 98%
  --muted: 217.2 32.6% 17.5%
  --muted-foreground: 215 20.2% 65.1%
  --accent: 217.2 32.6% 17.5%
  --accent-foreground: 210 40% 98%
  --destructive: 0 62.8% 30.6%
  --destructive-foreground: 210 40% 98%
  --border: 217.2 32.6% 17.5%
  --input: 217.2 32.6% 17.5%
  --ring: 212.7 26.8% 83.9%
}
```

## Accessibility Considerations

### Color Contrast
- Text on background: minimum 4.5:1 ratio (WCAG AA)
- Large text (18pt+): minimum 3:1 ratio
- Interactive elements: minimum 3:1 ratio

### Focus Indicators
```css
--focus-ring: 2px solid hsl(var(--ring))
--focus-ring-offset: 2px
```

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  --duration-fast: 0ms
  --duration-base: 0ms
  --duration-slow: 0ms
}
```

## Maintenance

### Updating Tokens
1. Update the token value in this document
2. Update the corresponding CSS variable in `globals.css`
3. Test across all themes (light/dark)
4. Document the change in the changelog
5. Notify the team of breaking changes

### Version Control
- Major version: Breaking changes to token names or structure
- Minor version: New tokens added
- Patch version: Token value adjustments

Current Version: **1.0.0**
