/**
 * Badge Variants
 * 
 * CVA-based badge variants for consistent badge styling.
 * Includes semantic color variants and size options.
 */

import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Badge Variants using CVA
 */
export const badgeVariants = cva(
  // Base styles
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        // Standard variants
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        
        // Semantic color variants
        success: 'border-transparent bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400',
        warning: 'border-transparent bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400',
        danger: 'border-transparent bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400',
        info: 'border-transparent bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
        
        // Quest type variants
        sensoryFeedback: 'border-transparent bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
        dineReview: 'border-transparent bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400',
        adCampaign: 'border-transparent bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400',
        appUx: 'border-transparent bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400',
        inStore: 'border-transparent bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400',
        survey: 'border-transparent bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400',
      },
      size: {
        sm: 'h-4 min-w-4 px-1 text-[9pt]',      // Filter count badge
        default: 'h-5 min-w-5 px-2.5 py-0.5',   // Standard badge
        lg: 'h-6 min-w-6 px-3 py-1 text-sm',    // Large badge
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

/**
 * Count Badge Variants
 * Specialized badges for displaying counts
 */
export const countBadgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        muted: 'bg-muted text-muted-foreground',
        success: 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400',
        warning: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400',
      },
      size: {
        sm: 'h-4 min-w-4 px-1 text-[9pt]',
        md: 'h-5 min-w-5 px-1.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

/**
 * TypeScript types
 */
export type BadgeVariant = VariantProps<typeof badgeVariants>
export type CountBadgeVariant = VariantProps<typeof countBadgeVariants>
