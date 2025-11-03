/**
 * Animation Tokens
 * 
 * Transition durations, easing functions, and animation utilities.
 */

/**
 * Transition Durations
 * Standard timing values for animations
 */
export const durations = {
  instant: 'duration-0',      // 0ms
  fast: 'duration-75',        // 75ms
  normal: 'duration-150',     // 150ms
  moderate: 'duration-200',   // 200ms
  slow: 'duration-300',       // 300ms
  slower: 'duration-500',     // 500ms
  slowest: 'duration-700',    // 700ms
  verySlow: 'duration-1000',  // 1000ms
} as const

/**
 * Easing Functions
 * Timing functions for smooth animations
 */
export const easings = {
  linear: 'ease-linear',
  in: 'ease-in',
  out: 'ease-out',
  inOut: 'ease-in-out',
} as const

/**
 * Transition Properties
 * What properties to animate
 */
export const transitionProperties = {
  none: 'transition-none',
  all: 'transition-all',
  colors: 'transition-colors',
  opacity: 'transition-opacity',
  shadow: 'transition-shadow',
  transform: 'transition-transform',
} as const

/**
 * Common Transition Combinations
 * Pre-configured transition styles
 */
export const transitions = {
  // Standard transitions
  default: 'transition-colors duration-150',
  fast: 'transition-all duration-75',
  normal: 'transition-all duration-150',
  slow: 'transition-all duration-300',
  
  // Specific property transitions
  colors: 'transition-colors duration-150',
  opacity: 'transition-opacity duration-200',
  transform: 'transition-transform duration-200',
  shadow: 'transition-shadow duration-200',
  
  // Interactive element transitions
  interactive: 'transition-colors duration-150 ease-in-out',
  hover: 'transition-all duration-200 ease-in-out',
} as const

/**
 * Animation Classes
 * Keyframe animations
 */
export const animations = {
  spin: 'animate-spin',
  ping: 'animate-ping',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
} as const

/**
 * Transform Utilities
 * Common transform values
 */
export const transforms = {
  // Scale
  scaleHover: 'hover:scale-105',
  scaleActive: 'active:scale-95',
  scale110: 'scale-110',
  scale105: 'scale-105',
  scale95: 'scale-95',
  
  // Rotate
  rotate45: 'rotate-45',
  rotate90: 'rotate-90',
  rotate180: 'rotate-180',
  
  // Translate
  translateYSmall: '-translate-y-1',
  translateYMedium: '-translate-y-2',
} as const

/**
 * TypeScript types
 */
export type Duration = keyof typeof durations
export type Easing = keyof typeof easings
export type TransitionProperty = keyof typeof transitionProperties
export type Transition = keyof typeof transitions
export type Animation = keyof typeof animations
export type Transform = keyof typeof transforms
