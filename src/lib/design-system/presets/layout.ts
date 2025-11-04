/**
 * Layout Presets
 * 
 * Common layout patterns for cards, lists, sections, and containers.
 */

import { cn } from '../utils/cn'
import { componentSpacing, layoutSpacing } from '../tokens/spacing'

/**
 * Card Layout Presets
 * Pre-configured card layouts
 */
export const cardLayoutPresets = {
  default: 'rounded-lg border bg-card shadow-sm p-6',
  compact: 'rounded-lg border bg-card shadow-sm p-4',
  spacious: 'rounded-lg border bg-card shadow-sm p-8',
  flat: 'rounded-lg bg-card p-6',
  elevated: 'rounded-lg bg-card shadow-md p-6',
} as const

/**
 * List Layout Presets
 * Pre-configured list layouts
 */
export const listLayoutPresets = {
  default: 'space-y-2',
  compact: 'space-y-1',
  spacious: 'space-y-4',
  divided: 'divide-y divide-border',
} as const

/**
 * Grid Layout Presets
 * Pre-configured grid layouts
 */
export const gridLayoutPresets = {
  cards: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
  cardsCompact: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2',
  cardsSpacious: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  twoColumn: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  threeColumn: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
  fourColumn: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4',
  autoFit: 'grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4',
} as const

/**
 * Section Layout Presets
 * Pre-configured section layouts
 */
export const sectionLayoutPresets = {
  default: 'space-y-4',
  compact: 'space-y-2',
  spacious: 'space-y-6',
  withPadding: 'space-y-4 py-8',
  withMargin: 'space-y-4 my-8',
} as const

/**
 * Container Layout Presets
 * Pre-configured container layouts
 */
export const containerLayoutPresets = {
  default: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  narrow: 'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8',
  wide: 'mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8',
  full: 'w-full px-4 sm:px-6 lg:px-8',
  fluid: 'w-full',
} as const

/**
 * Flex Layout Presets
 * Pre-configured flexbox layouts
 */
export const flexLayoutPresets = {
  row: 'flex flex-row items-center gap-2',
  rowSpaceBetween: 'flex flex-row items-center justify-between',
  rowCenter: 'flex flex-row items-center justify-center gap-2',
  column: 'flex flex-col gap-2',
  columnCenter: 'flex flex-col items-center justify-center gap-2',
  wrap: 'flex flex-wrap gap-2',
} as const

/**
 * Stack Layout Presets
 * Vertical stacking layouts
 */
export const stackLayoutPresets = {
  tight: 'flex flex-col gap-1',
  default: 'flex flex-col gap-2',
  relaxed: 'flex flex-col gap-4',
  spacious: 'flex flex-col gap-6',
} as const

/**
 * Get layout classes
 * Helper function to get layout preset classes
 * 
 * @param category - Layout category
 * @param preset - Preset name
 * @returns Layout classes
 * 
 * @example
 * getLayoutClasses('card', 'default') // => 'rounded-lg border bg-card shadow-sm p-6'
 */
export function getLayoutClasses(
  category: 'card' | 'list' | 'grid' | 'section' | 'container' | 'flex' | 'stack',
  preset: string
): string {
  const presets = {
    card: cardLayoutPresets,
    list: listLayoutPresets,
    grid: gridLayoutPresets,
    section: sectionLayoutPresets,
    container: containerLayoutPresets,
    flex: flexLayoutPresets,
    stack: stackLayoutPresets,
  }
  
  const categoryPresets = presets[category]
  return (categoryPresets as any)[preset] || ''
}

/**
 * Combine layout with additional classes
 * 
 * @param category - Layout category
 * @param preset - Preset name
 * @param additionalClasses - Additional classes to merge
 * @returns Combined classes
 * 
 * @example
 * combineLayout('card', 'default', 'hover:shadow-lg')
 */
export function combineLayout(
  category: 'card' | 'list' | 'grid' | 'section' | 'container' | 'flex' | 'stack',
  preset: string,
  ...additionalClasses: string[]
): string {
  return cn(getLayoutClasses(category, preset), ...additionalClasses)
}

/**
 * TypeScript types
 */
export type CardLayoutPreset = keyof typeof cardLayoutPresets
export type ListLayoutPreset = keyof typeof listLayoutPresets
export type GridLayoutPreset = keyof typeof gridLayoutPresets
export type SectionLayoutPreset = keyof typeof sectionLayoutPresets
export type ContainerLayoutPreset = keyof typeof containerLayoutPresets
export type FlexLayoutPreset = keyof typeof flexLayoutPresets
export type StackLayoutPreset = keyof typeof stackLayoutPresets
