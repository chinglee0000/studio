/**
 * Typography Tokens
 * 
 * Consolidated typography system for the application.
 * Includes font sizes, weights, line heights, and font families.
 */

/**
 * Font Families
 */
export const fontFamilies = {
  body: 'var(--font-body)', // Inter
  headline: 'var(--font-headline)', // Montserrat
} as const

/**
 * Font Sizes
 * Using Tailwind's text-* classes for consistency
 */
export const fontSizes = {
  '9pt': 'text-[9pt]',   // 9pt - Badge numbers
  '10pt': 'text-[10pt]', // 10pt - Filter buttons, dropdown items
  xs: 'text-xs',         // 12px - Auxiliary text, captions
  sm: 'text-sm',         // 14px - Secondary text, body small
  base: 'text-base',     // 16px - Primary text, body
  lg: 'text-lg',         // 18px - Headings
  xl: 'text-xl',         // 20px - Large headings
  '2xl': 'text-2xl',     // 24px - Page titles
  '3xl': 'text-3xl',     // 30px - Hero titles
  '4xl': 'text-4xl',     // 36px - Display titles
} as const

/**
 * Font Weights
 */
export const fontWeights = {
  normal: 'font-normal',     // 400
  medium: 'font-medium',     // 500
  semibold: 'font-semibold', // 600
  bold: 'font-bold',         // 700
  extrabold: 'font-extrabold', // 800
  black: 'font-black',       // 900
} as const

/**
 * Line Heights
 */
export const lineHeights = {
  none: 'leading-none',       // 1
  tight: 'leading-tight',     // 1.25
  snug: 'leading-snug',       // 1.375
  normal: 'leading-normal',   // 1.5
  relaxed: 'leading-relaxed', // 1.625
  loose: 'leading-loose',     // 2
} as const

/**
 * Typography Presets
 * Common text style combinations
 */
export const typographyPresets = {
  // Headings
  h1: `${fontSizes['2xl']} ${fontWeights.semibold}`,
  h2: `${fontSizes.xl} ${fontWeights.semibold}`,
  h3: `${fontSizes.lg} ${fontWeights.semibold}`,
  h4: `${fontSizes.base} ${fontWeights.semibold}`,
  
  // Body text
  body: `${fontSizes.sm} ${fontWeights.normal}`,
  bodyLarge: `${fontSizes.base} ${fontWeights.normal}`,
  bodyMuted: `${fontSizes.sm} ${fontWeights.normal} text-muted-foreground`,
  
  // Small text
  caption: `${fontSizes.xs} ${fontWeights.normal} text-muted-foreground`,
  label: `${fontSizes.xs} ${fontWeights.medium}`,
  
  // Special
  filterButton: `${fontSizes['10pt']}`,
  badgeNumber: `${fontSizes['9pt']}`,
  dropdownItem: `${fontSizes['10pt']}`,
} as const

/**
 * Text Alignment
 */
export const textAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
} as const

/**
 * Text Transform
 */
export const textTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  normalCase: 'normal-case',
} as const

/**
 * Text Decoration
 */
export const textDecoration = {
  underline: 'underline',
  lineThrough: 'line-through',
  noUnderline: 'no-underline',
} as const

/**
 * TypeScript types
 */
export type FontSize = keyof typeof fontSizes
export type FontWeight = keyof typeof fontWeights
export type LineHeight = keyof typeof lineHeights
export type TypographyPreset = keyof typeof typographyPresets
