/**
 * Button Variants
 * 
 * CVA-based button variants for consistent button styling.
 * Migrated from src/components/ui/button.tsx
 */

import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Button Variants using CVA
 */
export const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[18px] [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // Standard variants
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-sm',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full shadow-sm',
        outline: 'border border-input bg-background hover:bg-muted hover:text-foreground rounded-full',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full',
        ghost: 'hover:bg-muted hover:text-foreground rounded-full',
        link: 'text-primary underline-offset-4 hover:underline',
        
        // Material Design 3 aliases
        filled: 'bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-sm',
        tonal: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full',
        outlined: 'border border-input bg-background hover:bg-muted hover:text-foreground rounded-full',
        text: 'hover:bg-muted hover:text-foreground rounded-full',
        elevated: 'bg-background shadow-md hover:shadow-lg hover:bg-muted hover:text-foreground rounded-full',
        fab: 'bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 rounded-2xl',
      },
      size: {
        default: 'h-10 px-6 py-2.5',
        sm: 'h-9 px-4 py-2 text-xs',
        lg: 'h-14 px-8 py-3.5 text-base',
        icon: 'h-10 w-10 p-0',
        fab: 'h-14 w-14 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

/**
 * TypeScript types
 */
export type ButtonVariant = VariantProps<typeof buttonVariants>
