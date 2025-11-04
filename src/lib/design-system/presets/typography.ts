/**
 * Typography Presets
 * 
 * Ready-to-use typography combinations for common text patterns.
 */

import { cn } from '../utils/cn'
import { fontSizes, fontWeights } from '../tokens/typography'

/**
 * Heading Presets
 * Pre-configured heading styles
 */
export const headingPresets = {
  h1: `${fontSizes['2xl']} ${fontWeights.semibold}`,
  h2: `${fontSizes.xl} ${fontWeights.semibold}`,
  h3: `${fontSizes.lg} ${fontWeights.semibold}`,
  h4: `${fontSizes.base} ${fontWeights.semibold}`,
  h5: `${fontSizes.sm} ${fontWeights.semibold}`,
  h6: `${fontSizes.xs} ${fontWeights.semibold}`,
} as const

/**
 * Body Text Presets
 * Pre-configured body text styles
 */
export const bodyPresets = {
  large: `${fontSizes.base} ${fontWeights.normal}`,
  default: `${fontSizes.sm} ${fontWeights.normal}`,
  small: `${fontSizes.xs} ${fontWeights.normal}`,
  muted: `${fontSizes.sm} ${fontWeights.normal} text-muted-foreground`,
  mutedSmall: `${fontSizes.xs} ${fontWeights.normal} text-muted-foreground`,
} as const

/**
 * Special Text Presets
 * Pre-configured special text styles
 */
export const specialTextPresets = {
  caption: `${fontSizes.xs} ${fontWeights.normal} text-muted-foreground`,
  label: `${fontSizes.xs} ${fontWeights.medium}`,
  code: `${fontSizes.sm} ${fontWeights.normal} font-mono`,
  overline: `${fontSizes.xs} ${fontWeights.medium} uppercase tracking-wider`,
  subtitle: `${fontSizes.sm} ${fontWeights.medium} text-muted-foreground`,
} as const

/**
 * Component-Specific Text Presets
 */
export const componentTextPresets = {
  filterButton: fontSizes['10pt'],
  badgeNumber: fontSizes['9pt'],
  dropdownItem: fontSizes['10pt'],
  questTitle: `${fontSizes.base} ${fontWeights.semibold}`,
  questMeta: `${fontSizes.xs}`,
  cardTitle: `${fontSizes['2xl']} ${fontWeights.semibold}`,
  cardDescription: `${fontSizes.sm} text-muted-foreground`,
} as const

/**
 * Get typography classes
 * Helper function to get typography preset classes
 * 
 * @param preset - Typography preset name
 * @returns Typography classes
 * 
 * @example
 * getTypographyClasses('h1') // => 'text-2xl font-semibold'
 */
export function getTypographyClasses(
  preset: keyof typeof headingPresets | keyof typeof bodyPresets | keyof typeof specialTextPresets
): string {
  if (preset in headingPresets) {
    return headingPresets[preset as keyof typeof headingPresets]
  }
  if (preset in bodyPresets) {
    return bodyPresets[preset as keyof typeof bodyPresets]
  }
  if (preset in specialTextPresets) {
    return specialTextPresets[preset as keyof typeof specialTextPresets]
  }
  return ''
}

/**
 * Combine typography with additional classes
 * 
 * @param preset - Typography preset
 * @param additionalClasses - Additional classes to merge
 * @returns Combined classes
 * 
 * @example
 * combineTypography('h1', 'text-primary') // => 'text-2xl font-semibold text-primary'
 */
export function combineTypography(
  preset: keyof typeof headingPresets | keyof typeof bodyPresets | keyof typeof specialTextPresets,
  ...additionalClasses: string[]
): string {
  return cn(getTypographyClasses(preset), ...additionalClasses)
}

/**
 * Responsive typography
 * Apply different typography at different breakpoints
 * 
 * @param mobile - Mobile typography preset
 * @param tablet - Tablet typography preset
 * @param desktop - Desktop typography preset
 * @returns Responsive typography classes
 * 
 * @example
 * responsiveTypography('h3', 'h2', 'h1')
 * // => 'text-lg font-semibold md:text-xl lg:text-2xl'
 */
export function responsiveTypography(
  mobile: keyof typeof headingPresets,
  tablet?: keyof typeof headingPresets,
  desktop?: keyof typeof headingPresets
): string {
  const classes = [getTypographyClasses(mobile)]
  if (tablet) classes.push(`md:${getTypographyClasses(tablet)}`)
  if (desktop) classes.push(`lg:${getTypographyClasses(desktop)}`)
  return classes.join(' ')
}

/**
 * TypeScript types
 */
export type HeadingPreset = keyof typeof headingPresets
export type BodyPreset = keyof typeof bodyPresets
export type SpecialTextPreset = keyof typeof specialTextPresets
export type ComponentTextPreset = keyof typeof componentTextPresets
export type TypographyPreset = HeadingPreset | BodyPreset | SpecialTextPreset
