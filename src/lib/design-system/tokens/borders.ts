/**
 * Border Tokens
 * 
 * Border radius and width tokens for consistent borders across the application.
 */

/**
 * Border Radius
 * Rounded corner values
 */
export const borderRadius = {
  none: 'rounded-none',     // 0
  sm: 'rounded-sm',         // 0.125rem (2px)
  base: 'rounded',          // 0.25rem (4px)
  md: 'rounded-md',         // 0.375rem (6px)
  lg: 'rounded-lg',         // 0.5rem (8px)
  xl: 'rounded-xl',         // 0.75rem (12px)
  '2xl': 'rounded-2xl',     // 1rem (16px)
  '3xl': 'rounded-3xl',     // 1.5rem (24px)
  full: 'rounded-full',     // 9999px (circle)
} as const

/**
 * Border Width
 * Border thickness values
 */
export const borderWidth = {
  0: 'border-0',
  base: 'border',      // 1px
  2: 'border-2',       // 2px
  4: 'border-4',       // 4px
  8: 'border-8',       // 8px
} as const

/**
 * Border Styles
 * Common border style combinations
 */
export const borderStyles = {
  default: 'border border-border',
  muted: 'border border-muted',
  primary: 'border border-primary',
  destructive: 'border border-destructive',
  none: 'border-0',
} as const

/**
 * Border Side Utilities
 * Apply borders to specific sides
 */
export const borderSides = {
  top: 'border-t',
  right: 'border-r',
  bottom: 'border-b',
  left: 'border-l',
  x: 'border-x',
  y: 'border-y',
} as const

/**
 * TypeScript types
 */
export type BorderRadius = keyof typeof borderRadius
export type BorderWidth = keyof typeof borderWidth
export type BorderStyle = keyof typeof borderStyles
