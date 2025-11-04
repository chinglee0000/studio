/**
 * Interactive State Variants
 * 
 * CVA-based variants for interactive states (hover, active, focus, disabled).
 * Provides consistent interactive feedback across all components.
 */

import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Interactive Element Variants
 * For clickable elements like list items, cards, etc.
 */
export const interactiveVariants = cva(
  'transition-colors',
  {
    variants: {
      state: {
        default: 'hover:bg-muted',
        active: 'bg-muted text-primary',
        focus: 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        disabled: 'pointer-events-none opacity-50',
      },
      intensity: {
        subtle: 'hover:bg-muted/50',
        normal: 'hover:bg-muted',
        strong: 'hover:bg-muted active:bg-muted/80',
      },
    },
    defaultVariants: {
      state: 'default',
      intensity: 'normal',
    },
  }
)

/**
 * List Item Variants
 * For interactive list items
 */
export const listItemVariants = cva(
  'flex items-center rounded-lg p-3 transition-colors',
  {
    variants: {
      interactive: {
        true: 'cursor-pointer hover:bg-muted',
        false: '',
      },
      selected: {
        true: 'bg-muted text-primary',
        false: '',
      },
    },
    defaultVariants: {
      interactive: true,
      selected: false,
    },
  }
)

/**
 * Clickable Card Variants
 * For cards that act as buttons
 */
export const clickableCardVariants = cva(
  'rounded-lg border bg-card transition-all cursor-pointer',
  {
    variants: {
      hover: {
        lift: 'hover:shadow-md hover:-translate-y-1',
        glow: 'hover:shadow-lg hover:border-primary/50',
        subtle: 'hover:bg-muted',
        scale: 'hover:scale-105',
      },
      active: {
        true: 'bg-muted border-primary',
        false: '',
      },
    },
    defaultVariants: {
      hover: 'subtle',
      active: false,
    },
  }
)

/**
 * Focus Ring Variants
 * Standardized focus indicators
 */
export const focusRingVariants = cva(
  'focus:outline-none',
  {
    variants: {
      style: {
        default: 'focus:ring-2 focus:ring-ring focus:ring-offset-2',
        primary: 'focus:ring-2 focus:ring-primary focus:ring-offset-2',
        subtle: 'focus:ring-1 focus:ring-ring',
        none: '',
      },
    },
    defaultVariants: {
      style: 'default',
    },
  }
)

/**
 * Disabled State Variants
 */
export const disabledVariants = cva(
  '',
  {
    variants: {
      disabled: {
        true: 'pointer-events-none opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

/**
 * Hover Effect Variants
 * Common hover effects
 */
export const hoverEffectVariants = cva(
  'transition-all',
  {
    variants: {
      effect: {
        none: '',
        background: 'hover:bg-muted',
        scale: 'hover:scale-105',
        lift: 'hover:-translate-y-1 hover:shadow-md',
        glow: 'hover:shadow-lg',
        opacity: 'hover:opacity-80',
      },
    },
    defaultVariants: {
      effect: 'background',
    },
  }
)

/**
 * TypeScript types
 */
export type InteractiveVariant = VariantProps<typeof interactiveVariants>
export type ListItemVariant = VariantProps<typeof listItemVariants>
export type ClickableCardVariant = VariantProps<typeof clickableCardVariants>
export type FocusRingVariant = VariantProps<typeof focusRingVariants>
export type DisabledVariant = VariantProps<typeof disabledVariants>
export type HoverEffectVariant = VariantProps<typeof hoverEffectVariants>
