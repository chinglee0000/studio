/**
 * Card Variants
 * 
 * CVA-based card variants for consistent card styling.
 * Migrated from src/components/ui/card.tsx
 */

import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Card Variants using CVA
 */
export const cardVariants = cva(
  // Base styles
  'rounded-lg text-card-foreground',
  {
    variants: {
      variant: {
        default: 'border bg-card shadow-sm',
        outlined: 'border border-border/50 bg-transparent shadow-none',
        elevated: 'bg-card shadow-md',
        flat: 'bg-card',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

/**
 * Card Header Variants
 */
export const cardHeaderVariants = cva(
  'flex flex-col space-y-1.5',
  {
    variants: {
      padding: {
        default: 'p-6',
        sm: 'p-4',
        lg: 'p-8',
        none: 'p-0',
      },
    },
    defaultVariants: {
      padding: 'default',
    },
  }
)

/**
 * Card Content Variants
 */
export const cardContentVariants = cva(
  '',
  {
    variants: {
      padding: {
        default: 'p-6 pt-0',
        sm: 'p-4 pt-0',
        lg: 'p-8 pt-0',
        none: 'p-0',
        full: 'p-6',
      },
    },
    defaultVariants: {
      padding: 'default',
    },
  }
)

/**
 * Card Footer Variants
 */
export const cardFooterVariants = cva(
  'flex items-center',
  {
    variants: {
      padding: {
        default: 'p-6 pt-0',
        sm: 'p-4 pt-0',
        lg: 'p-8 pt-0',
        none: 'p-0',
      },
    },
    defaultVariants: {
      padding: 'default',
    },
  }
)

/**
 * TypeScript types
 */
export type CardVariant = VariantProps<typeof cardVariants>
export type CardHeaderVariant = VariantProps<typeof cardHeaderVariants>
export type CardContentVariant = VariantProps<typeof cardContentVariants>
export type CardFooterVariant = VariantProps<typeof cardFooterVariants>
