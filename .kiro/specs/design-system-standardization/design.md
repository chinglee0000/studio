# Design Document

## Overview

This design document outlines the architecture and implementation strategy for consolidating and standardizing the Quest application's design system. The current state has design tokens scattered across three files with overlapping concerns and inconsistent patterns. This design will create a unified, scalable design system that serves as the single source of truth for all visual design decisions.

### Current State Analysis

**Existing Files:**
1. `src/lib/constants/design-tokens.ts` - Filter and Quest Row specific tokens
2. `src/lib/styles/design-tokens.ts` - Interactive states and general styles
3. `src/lib/constants/quest-design-system.ts` - Quest type visual design

**Problems:**
- Duplication of typography and spacing definitions
- Inconsistent naming conventions
- No clear hierarchy or organization
- Difficult to discover available tokens
- Hard to maintain consistency across components

### Design Goals

1. **Single Source of Truth**: All design tokens in one location
2. **Semantic Organization**: Logical grouping by purpose
3. **Type Safety**: Full TypeScript support with autocomplete
4. **Backward Compatibility**: Existing code continues to work
5. **Developer Experience**: Easy to use and discover
6. **Scalability**: Easy to extend with new tokens
7. **Documentation**: Clear usage guidelines

## Architecture

### File Structure

```
src/lib/design-system/
├── index.ts                 # Main export file
├── tokens/
│   ├── index.ts            # Re-exports all tokens
│   ├── colors.ts           # Color system
│   ├── typography.ts       # Font sizes, weights, line heights
│   ├── spacing.ts          # Margins, paddings, gaps
│   ├── sizing.ts           # Component dimensions
│   ├── borders.ts          # Border radius, widths
│   ├── shadows.ts          # Box shadows, elevations
│   └── animations.ts       # Transitions, keyframes
├── variants/
│   ├── index.ts            # Re-exports all variants
│   ├── button.ts           # Button variants using CVA
│   ├── card.ts             # Card variants
│   ├── badge.ts            # Badge variants
│   └── interactive.ts      # Interactive state variants
├── utils/
│   ├── index.ts            # Re-exports all utilities
│   ├── cn.ts               # Class name utility
│   ├── responsive.ts       # Responsive helpers
│   └── theme.ts            # Theme utilities
├── presets/
│   ├── index.ts            # Re-exports all presets
│   ├── typography.ts       # Typography presets (h1-h6, body, etc.)
│   ├── layout.ts           # Layout presets (card, list, section)
│   └── quest.ts            # Quest-specific presets
└── README.md               # Comprehensive documentation

# Backward compatibility exports
src/lib/constants/design-tokens.ts  # Re-exports from new system
src/lib/styles/design-tokens.ts     # Re-exports from new system
```

### Design System Layers

**Layer 1: Foundation Tokens** (Primitive values)
- Raw values: colors, sizes, spacing units
- No semantic meaning
- Example: `spacing.2`, `colors.blue.600`

**Layer 2: Semantic Tokens** (Purpose-driven)
- Built from foundation tokens
- Convey meaning and purpose
- Example: `colors.semantic.success`, `spacing.card.padding`

**Layer 3: Component Tokens** (Component-specific)
- Composed from semantic tokens
- Specific to component needs
- Example: `button.size.md`, `card.padding.default`

**Layer 4: Presets** (Ready-to-use combinations)
- Complete style combinations
- Common patterns
- Example: `typography.heading.h1`, `layout.card.default`

## Components and Interfaces

### 1. Color System (`tokens/colors.ts`)


```typescript
// Foundation colors (from Tailwind theme)
export const foundationColors = {
  // Semantic color scales
  blue: { 100: '#dbeafe', 400: '#60a5fa', 600: '#2563eb', 900: '#1e3a8a' },
  green: { 100: '#dcfce7', 400: '#4ade80', 600: '#16a34a', 900: '#14532d' },
  yellow: { 100: '#fef9c3', 400: '#facc15', 600: '#ca8a04', 900: '#713f12' },
  red: { 100: '#fee2e2', 400: '#f87171', 600: '#dc2626', 900: '#7f1d1d' },
  // ... other colors
}

// Semantic colors (purpose-driven)
export const semanticColors = {
  success: {
    light: foundationColors.green[100],
    DEFAULT: foundationColors.green[600],
    dark: foundationColors.green[400],
    text: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-900/50',
  },
  warning: {
    light: foundationColors.yellow[100],
    DEFAULT: foundationColors.yellow[600],
    dark: foundationColors.yellow[400],
    text: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-100 dark:bg-yellow-900/50',
  },
  // ... other semantic colors
}

// Interactive state colors
export const interactiveColors = {
  hover: 'hover:bg-muted',
  active: 'bg-muted text-primary',
  focus: 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  disabled: 'disabled:pointer-events-none disabled:opacity-50',
}
```

**Design Decisions:**
- Use Tailwind's CSS variables for theme colors (primary, secondary, etc.)
- Define semantic colors for consistent meaning
- Support both light and dark modes
- Provide both hex values and Tailwind classes

### 2. Typography System (`tokens/typography.ts`)

```typescript
// Font sizes with line heights
export const fontSize = {
  xs: { size: 'text-xs', lineHeight: 'leading-4' },      // 12px / 16px
  sm: { size: 'text-sm', lineHeight: 'leading-5' },      // 14px / 20px
  base: { size: 'text-base', lineHeight: 'leading-6' },  // 16px / 24px
  lg: { size: 'text-lg', lineHeight: 'leading-7' },      // 18px / 28px
  xl: { size: 'text-xl', lineHeight: 'leading-7' },      // 20px / 28px
  '2xl': { size: 'text-2xl', lineHeight: 'leading-8' },  // 24px / 32px
  '3xl': { size: 'text-3xl', lineHeight: 'leading-9' },  // 30px / 36px
}

// Font weights
export const fontWeight = {
  normal: 'font-normal',     // 400
  medium: 'font-medium',     // 500
  semibold: 'font-semibold', // 600
  bold: 'font-bold',         // 700
}

// Font families
export const fontFamily = {
  sans: 'font-sans',      // Inter
  headline: 'font-headline', // Montserrat
  code: 'font-code',      // Monospace
}
```

### 3. Spacing System (`tokens/spacing.ts`)


```typescript
// Foundation spacing scale (Tailwind default)
export const spacing = {
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
}

// Semantic spacing (purpose-driven)
export const semanticSpacing = {
  // Icon to text gaps
  iconText: {
    tight: 'gap-0.5',   // 2px
    compact: 'gap-1',   // 4px
    normal: 'gap-2',    // 8px
    relaxed: 'gap-3',   // 12px
  },
  
  // Component padding
  component: {
    xs: 'p-2',   // 8px
    sm: 'p-3',   // 12px
    md: 'p-4',   // 16px
    lg: 'p-6',   // 24px
    xl: 'p-8',   // 32px
  },
  
  // Layout spacing
  layout: {
    section: 'space-y-6',  // 24px between sections
    list: 'space-y-2',     // 8px between list items
    card: 'space-y-4',     // 16px within cards
  },
}
```

### 4. Sizing System (`tokens/sizing.ts`)

```typescript
// Component sizes
export const componentSizing = {
  // Icons
  icon: {
    xs: 'h-3 w-3',       // 12px
    sm: 'h-3.5 w-3.5',   // 14px
    md: 'h-4 w-4',       // 16px
    lg: 'h-5 w-5',       // 20px
    xl: 'h-6 w-6',       // 24px
    '2xl': 'h-8 w-8',    // 32px
  },
  
  // Buttons
  button: {
    sm: 'h-8 px-3',      // 32px height
    md: 'h-10 px-4',     // 40px height
    lg: 'h-12 px-6',     // 48px height
  },
  
  // Avatars
  avatar: {
    sm: 'h-8 w-8',       // 32px
    md: 'h-10 w-10',     // 40px
    lg: 'h-12 w-12',     // 48px
    xl: 'h-16 w-16',     // 64px
  },
  
  // Badges
  badge: {
    sm: 'h-4 min-w-4 px-1',     // 16px height
    md: 'h-5 min-w-5 px-1.5',   // 20px height
  },
}
```

### 5. Component Variants System (`variants/`)

Using `class-variance-authority` for type-safe variant management:

```typescript
// variants/button.ts
import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-input bg-background hover:bg-muted',
        ghost: 'hover:bg-muted',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)
```

### 6. Typography Presets (`presets/typography.ts`)


```typescript
// Ready-to-use typography combinations
export const typographyPresets = {
  // Headings
  h1: 'text-3xl font-bold leading-tight',
  h2: 'text-2xl font-semibold leading-tight',
  h3: 'text-xl font-semibold leading-snug',
  h4: 'text-lg font-semibold leading-snug',
  h5: 'text-base font-semibold leading-normal',
  h6: 'text-sm font-semibold leading-normal',
  
  // Body text
  body: 'text-base font-normal leading-relaxed',
  bodyLarge: 'text-lg font-normal leading-relaxed',
  bodySmall: 'text-sm font-normal leading-normal',
  
  // Special text
  caption: 'text-xs font-normal text-muted-foreground',
  label: 'text-sm font-medium',
  code: 'font-code text-sm',
  
  // Interactive text
  link: 'text-primary hover:underline',
  buttonText: 'text-sm font-medium',
}

// Utility function
export function getTypographyClasses(preset: keyof typeof typographyPresets): string {
  return typographyPresets[preset]
}
```

### 7. Quest-Specific Presets (`presets/quest.ts`)

Consolidate quest-specific design patterns:

```typescript
import { QUEST_TYPE_DESIGN } from '@/lib/constants/quest-design-system'

// Quest type colors and icons (migrated from quest-design-system.ts)
export const questTypePresets = QUEST_TYPE_DESIGN

// Quest component presets
export const questPresets = {
  // Quest Row
  row: {
    container: 'flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-muted cursor-pointer',
    icon: 'h-12 w-12 rounded-lg flex items-center justify-center',
    title: 'text-base font-semibold',
    meta: 'flex items-center gap-4 text-xs',
    progress: 'h-1.5',
  },
  
  // Quest Card
  card: {
    container: 'rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50',
    header: 'flex items-start gap-3',
    icon: 'h-10 w-10 rounded-lg flex items-center justify-center',
    title: 'text-lg font-semibold',
    description: 'text-sm text-muted-foreground',
  },
  
  // Quest Filter
  filter: {
    button: 'h-8 px-3 text-[10pt] font-medium',
    badge: 'h-4 min-w-4 px-1 text-[9pt]',
    dropdown: 'text-[10pt]',
  },
}
```

## Data Models

### Design Token Types

```typescript
// Core token types
export type SpacingScale = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 6 | 8 | 12 | 16
export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl'
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold'
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SemanticColor = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'muted'

// Variant types
export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link'
export type CardVariant = 'default' | 'outlined'
export type BadgeVariant = SemanticColor

// Component prop types
export interface DesignSystemProps {
  variant?: string
  size?: ComponentSize
  className?: string
}
```

## Error Handling

### Token Not Found

```typescript
// Provide fallback values
export function getToken<T>(
  tokens: Record<string, T>,
  key: string,
  fallback: T
): T {
  return tokens[key] ?? fallback
}

// Example usage
const iconSize = getToken(componentSizing.icon, size, componentSizing.icon.md)
```

### Invalid Variant

```typescript
// CVA handles invalid variants gracefully
// Returns default variant if invalid variant provided
const classes = buttonVariants({ variant: 'invalid' as any })
// Returns: default variant classes
```

### Migration Errors

```typescript
// Backward compatibility layer catches errors
try {
  // Try new design system
  return newDesignSystem.getToken(key)
} catch {
  // Fall back to old system
  return oldDesignSystem.getToken(key)
}
```

## Testing Strategy

### 1. Visual Regression Testing

**Approach**: Manual testing with before/after screenshots

**Test Cases**:
- All shared components render correctly
- Interactive states work (hover, focus, active)
- Light and dark modes display properly
- Responsive layouts maintain consistency

**Process**:
1. Take screenshots of all components before refactoring
2. Apply design system changes
3. Take screenshots after refactoring
4. Compare visually for any regressions
5. Document any intentional changes

### 2. Type Safety Testing

**Approach**: TypeScript compilation and IDE autocomplete

**Test Cases**:
- All token imports have proper types
- Variant props are type-safe
- Invalid values show TypeScript errors
- Autocomplete works for all tokens

**Validation**:
```typescript
// Should compile
const validSize: ComponentSize = 'md'
const classes = buttonVariants({ variant: 'default', size: 'md' })

// Should show TypeScript error
const invalidSize: ComponentSize = 'invalid' // ❌ Type error
const invalidClasses = buttonVariants({ variant: 'invalid' }) // ❌ Type error
```

### 3. Backward Compatibility Testing


**Approach**: Ensure existing imports continue to work

**Test Cases**:
- Old import paths still work
- Old token names still accessible
- Components using old tokens render correctly
- No breaking changes for existing code

**Validation**:
```typescript
// Old imports should still work
import { TYPOGRAPHY } from '@/lib/constants/design-tokens'
import { interactiveStates } from '@/lib/styles/design-tokens'
import { QUEST_TYPE_DESIGN } from '@/lib/constants/quest-design-system'

// Should resolve to new design system
expect(TYPOGRAPHY.fontSize.base).toBe(newDesignSystem.typography.fontSize.base.size)
```

### 4. Component Integration Testing

**Approach**: Test refactored components in isolation

**Test Cases**:
- StatCard renders with all variants
- MetricBadge displays correct colors
- StatusBadge shows proper states
- All props work as expected

**Manual Testing Checklist**:
- [ ] StatCard with different icons and colors
- [ ] StatCard with trend indicators
- [ ] StatCard with href (clickable)
- [ ] MetricBadge with all variants
- [ ] MetricBadge with different sizes
- [ ] StatusBadge with all status types
- [ ] Interactive states (hover, focus, active)
- [ ] Dark mode rendering

### 5. Documentation Testing

**Approach**: Verify documentation accuracy

**Test Cases**:
- All code examples compile and run
- Token values match implementation
- Usage guidelines are clear
- Migration guides work correctly

## Migration Strategy

### Phase 1: Create New Design System (Non-Breaking)

1. Create new `src/lib/design-system/` directory structure
2. Implement all token files
3. Implement variant files
4. Implement preset files
5. Create comprehensive documentation
6. **No changes to existing code yet**

### Phase 2: Add Backward Compatibility Layer

1. Update old files to re-export from new system:

```typescript
// src/lib/constants/design-tokens.ts
export * from '@/lib/design-system/tokens/typography'
export * from '@/lib/design-system/tokens/spacing'
export * from '@/lib/design-system/presets/quest'

// Maintain old API
export const TYPOGRAPHY = {
  fontSize: typography.fontSize,
  fontWeight: typography.fontWeight,
}
```

2. Test that all existing imports still work
3. Verify no visual regressions

### Phase 3: Refactor Shared Components

1. Update components one at a time:
   - StatCard
   - MetricBadge
   - StatusBadge
   - QuestCard
   - QuestTypeIcon

2. For each component:
   - Import from new design system
   - Use variant system (CVA)
   - Test thoroughly
   - Document changes

3. Maintain backward compatibility for component props

### Phase 4: Update Documentation

1. Create migration guide
2. Update component documentation
3. Add design system usage examples
4. Create visual style guide

### Phase 5: Gradual Adoption (Optional)

1. Encourage new components to use new system
2. Gradually update existing components
3. Eventually deprecate old token files
4. Remove backward compatibility layer (breaking change)

## Implementation Priorities

### High Priority (Core System)

1. **Color System** - Most visible, affects all components
2. **Typography System** - Second most visible
3. **Spacing System** - Affects layout consistency
4. **Component Variants** - Enables consistent component API

### Medium Priority (Developer Experience)

5. **Presets** - Makes common patterns easier
6. **Utilities** - Helper functions for composing styles
7. **Documentation** - Essential for adoption

### Low Priority (Nice to Have)

8. **Animations** - Can be added later
9. **Shadows** - Less critical for current design
10. **Advanced Utilities** - Can be added as needed

## Design Decisions and Rationale

### Why CVA (class-variance-authority)?

**Pros**:
- Type-safe variants
- Excellent TypeScript support
- Already used in existing components (Button, Card)
- Small bundle size
- Great developer experience

**Cons**:
- Additional dependency
- Learning curve for team

**Decision**: Use CVA for all component variants

### Why Keep Tailwind Classes?

**Pros**:
- No runtime overhead
- Excellent IDE support
- Familiar to team
- Easy to customize

**Cons**:
- String-based (less type-safe than CSS-in-JS)
- Requires Tailwind configuration

**Decision**: Continue using Tailwind classes, enhance with TypeScript types

### Why Separate Foundation and Semantic Tokens?

**Pros**:
- Clear separation of concerns
- Easier to maintain
- Semantic tokens convey meaning
- Foundation tokens provide flexibility

**Cons**:
- More files to manage
- Slightly more complex

**Decision**: Use layered token system for better organization

### Why Backward Compatibility?

**Pros**:
- No breaking changes
- Gradual migration
- Lower risk
- Team can adopt at their own pace

**Cons**:
- More code to maintain temporarily
- Slightly more complex

**Decision**: Maintain backward compatibility during transition

## Future Enhancements

### 1. Design Token Studio Integration

- Export tokens to JSON format
- Enable design tool integration
- Sync with Figma/Sketch

### 2. Automated Visual Testing

- Implement Chromatic or Percy
- Automated screenshot comparison
- CI/CD integration

### 3. Component Playground

- Interactive component explorer
- Live code examples
- Visual variant picker

### 4. Theme Customization

- Runtime theme switching
- Custom color schemes
- Brand-specific themes

### 5. Accessibility Enhancements

- WCAG compliance checking
- Color contrast validation
- Focus indicator standards

## Success Metrics

### Quantitative

- **Reduced Code Duplication**: Target 50% reduction in repeated style definitions
- **Faster Component Creation**: Target 30% faster to create new components
- **Smaller Bundle Size**: Target 10% reduction through better tree-shaking
- **Type Safety**: 100% of design tokens have TypeScript types

### Qualitative

- **Developer Satisfaction**: Easier to find and use design tokens
- **Design Consistency**: Visual consistency across all components
- **Maintainability**: Easier to update global styles
- **Documentation Quality**: Clear, comprehensive, and accurate

## Conclusion

This design system consolidation will provide a solid foundation for consistent, maintainable UI development. By creating a single source of truth for design decisions, we'll reduce duplication, improve developer experience, and ensure visual consistency across the Quest application.

The phased migration approach ensures we can implement these changes safely without breaking existing functionality, while the backward compatibility layer allows the team to adopt the new system gradually.
