/**
 * Color Tokens
 * 
 * Consolidated color system for the application.
 * All colors support both light and dark modes through CSS variables.
 */

/**
 * Foundation Colors
 * Base color palette using CSS variables from globals.css
 */
export const foundationColors = {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: 'hsl(var(--card))',
  cardForeground: 'hsl(var(--card-foreground))',
  popover: 'hsl(var(--popover))',
  popoverForeground: 'hsl(var(--popover-foreground))',
  primary: 'hsl(var(--primary))',
  primaryForeground: 'hsl(var(--primary-foreground))',
  secondary: 'hsl(var(--secondary))',
  secondaryForeground: 'hsl(var(--secondary-foreground))',
  muted: 'hsl(var(--muted))',
  mutedForeground: 'hsl(var(--muted-foreground))',
  accent: 'hsl(var(--accent))',
  accentForeground: 'hsl(var(--accent-foreground))',
  destructive: 'hsl(var(--destructive))',
  destructiveForeground: 'hsl(var(--destructive-foreground))',
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
} as const

/**
 * Semantic Colors
 * Colors that convey meaning and state
 */
export const semanticColors = {
  // Status colors
  success: {
    text: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-900/50',
    combined: 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400',
    hex: {
      light: '#16a34a', // green-600
      dark: '#4ade80',  // green-400
    },
  },
  warning: {
    text: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-100 dark:bg-yellow-900/50',
    combined: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400',
    hex: {
      light: '#ca8a04', // yellow-600
      dark: '#facc15',  // yellow-400
    },
  },
  danger: {
    text: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-100 dark:bg-red-900/50',
    combined: 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400',
    hex: {
      light: '#dc2626', // red-600
      dark: '#f87171',  // red-400
    },
  },
  info: {
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-900/50',
    combined: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
    hex: {
      light: '#2563eb', // blue-600
      dark: '#60a5fa',  // blue-400
    },
  },
  default: {
    text: 'text-foreground',
    bg: 'bg-muted',
    combined: 'bg-muted text-foreground',
  },
} as const

/**
 * Interactive State Colors
 * Colors for hover, active, focus, and disabled states
 */
export const interactiveStateColors = {
  hover: 'hover:bg-muted',
  active: 'bg-muted text-primary',
  focus: 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  disabled: 'disabled:pointer-events-none disabled:opacity-50',
} as const

/**
 * Quest Type Colors
 * Specific colors for different quest types
 */
export const questTypeColors = {
  'Sensory Feedback': {
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-900/50',
    combined: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
    hex: {
      light: '#2563eb', // blue-600
      dark: '#60a5fa',  // blue-400
    },
  },
  'Dine & Review': {
    text: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-100 dark:bg-yellow-900/50',
    combined: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400',
    hex: {
      light: '#ca8a04', // yellow-600
      dark: '#facc15',  // yellow-400
    },
  },
  'Ad Campaign': {
    text: 'text-pink-600 dark:text-pink-400',
    bg: 'bg-pink-100 dark:bg-pink-900/50',
    combined: 'bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400',
    hex: {
      light: '#db2777', // pink-600
      dark: '#f472b6',  // pink-400
    },
  },
  'App UX': {
    text: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-100 dark:bg-cyan-900/50',
    combined: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400',
    hex: {
      light: '#0891b2', // cyan-600
      dark: '#22d3ee',  // cyan-400
    },
  },
  'In-Store Experience': {
    text: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-900/50',
    combined: 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400',
    hex: {
      light: '#16a34a', // green-600
      dark: '#4ade80',  // green-400
    },
  },
  'Survey': {
    text: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-100 dark:bg-purple-900/50',
    combined: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400',
    hex: {
      light: '#9333ea', // purple-600
      dark: '#c084fc',  // purple-400
    },
  },
} as const

/**
 * Twin Matrix Dimension Colors
 * Colors for the four dimensions in the Twin Matrix
 */
export const matrixDimensionColors = {
  physical: {
    main: 'hsl(var(--matrix-physical))',
    light: 'hsl(var(--matrix-physical-light))',
    text: 'text-[hsl(var(--matrix-physical))]',
    bg: 'bg-[hsl(var(--matrix-physical-light))]',
  },
  social: {
    main: 'hsl(var(--matrix-social))',
    light: 'hsl(var(--matrix-social-light))',
    text: 'text-[hsl(var(--matrix-social))]',
    bg: 'bg-[hsl(var(--matrix-social-light))]',
  },
  digital: {
    main: 'hsl(var(--matrix-digital))',
    light: 'hsl(var(--matrix-digital-light))',
    text: 'text-[hsl(var(--matrix-digital))]',
    bg: 'bg-[hsl(var(--matrix-digital-light))]',
  },
  spiritual: {
    main: 'hsl(var(--matrix-spiritual))',
    light: 'hsl(var(--matrix-spiritual-light))',
    text: 'text-[hsl(var(--matrix-spiritual))]',
    bg: 'bg-[hsl(var(--matrix-spiritual-light))]',
  },
  undiscovered: {
    main: 'hsl(var(--matrix-undiscovered))',
    text: 'text-[hsl(var(--matrix-undiscovered))]',
    bg: 'bg-[hsl(var(--matrix-undiscovered))]',
  },
} as const

/**
 * Chart Colors
 * Colors for data visualization
 */
export const chartColors = {
  chart1: 'hsl(var(--chart-1))',
  chart2: 'hsl(var(--chart-2))',
  chart3: 'hsl(var(--chart-3))',
  chart4: 'hsl(var(--chart-4))',
  chart5: 'hsl(var(--chart-5))',
} as const

/**
 * TypeScript types for color scales
 */
export type SemanticColorVariant = keyof typeof semanticColors
export type QuestTypeColorKey = keyof typeof questTypeColors
export type MatrixDimensionKey = keyof typeof matrixDimensionColors
export type InteractiveState = keyof typeof interactiveStateColors
