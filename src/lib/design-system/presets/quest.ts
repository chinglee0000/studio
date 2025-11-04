/**
 * Quest-Specific Presets
 * 
 * Quest type designs and quest component presets.
 * Migrated from src/lib/constants/quest-design-system.ts
 */

import {
  BrainCircuit,
  UtensilsCrossed,
  Megaphone,
  Smartphone,
  Store,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react'
import { questTypeColors } from '../tokens/colors'

/**
 * Quest Type Definition
 */
export type QuestType =
  | 'Sensory Feedback'
  | 'Dine & Review'
  | 'Ad Campaign'
  | 'App UX'
  | 'In-Store Experience'
  | 'Survey'

/**
 * Quest Type Design Configuration
 */
export interface QuestTypeDesign {
  /** Lucide icon component */
  icon: LucideIcon
  /** Text color (light mode) */
  textColor: string
  /** Text color (dark mode) */
  textColorDark: string
  /** Background color (light mode) */
  bgColor: string
  /** Background color (dark mode) */
  bgColorDark: string
  /** Tailwind text color class */
  textClass: string
  /** Tailwind background color class */
  bgClass: string
  /** Combined Tailwind class */
  combinedClass: string
}

/**
 * Quest Type Design System
 * 
 * Color system:
 * - Sensory Feedback: Blue - represents perception and thinking
 * - Dine & Review: Yellow - represents food and warmth
 * - Ad Campaign: Pink - represents creativity and marketing
 * - App UX: Cyan - represents technology and digital
 * - In-Store Experience: Green - represents physical and environment
 * - Survey: Purple - represents data and analysis
 */
export const QUEST_TYPE_DESIGN: Record<QuestType, QuestTypeDesign> = {
  'Sensory Feedback': {
    icon: BrainCircuit,
    textColor: '#2563eb', // blue-600
    textColorDark: '#60a5fa', // blue-400
    bgColor: '#dbeafe', // blue-100
    bgColorDark: 'rgba(30, 58, 138, 0.5)', // blue-900/50
    textClass: questTypeColors['Sensory Feedback'].text,
    bgClass: questTypeColors['Sensory Feedback'].bg,
    combinedClass: questTypeColors['Sensory Feedback'].combined,
  },
  'Dine & Review': {
    icon: UtensilsCrossed,
    textColor: '#ca8a04', // yellow-600
    textColorDark: '#facc15', // yellow-400
    bgColor: '#fef9c3', // yellow-100
    bgColorDark: 'rgba(113, 63, 18, 0.5)', // yellow-900/50
    textClass: questTypeColors['Dine & Review'].text,
    bgClass: questTypeColors['Dine & Review'].bg,
    combinedClass: questTypeColors['Dine & Review'].combined,
  },
  'Ad Campaign': {
    icon: Megaphone,
    textColor: '#db2777', // pink-600
    textColorDark: '#f472b6', // pink-400
    bgColor: '#fce7f3', // pink-100
    bgColorDark: 'rgba(131, 24, 67, 0.5)', // pink-900/50
    textClass: questTypeColors['Ad Campaign'].text,
    bgClass: questTypeColors['Ad Campaign'].bg,
    combinedClass: questTypeColors['Ad Campaign'].combined,
  },
  'App UX': {
    icon: Smartphone,
    textColor: '#0891b2', // cyan-600
    textColorDark: '#22d3ee', // cyan-400
    bgColor: '#cffafe', // cyan-100
    bgColorDark: 'rgba(22, 78, 99, 0.5)', // cyan-900/50
    textClass: questTypeColors['App UX'].text,
    bgClass: questTypeColors['App UX'].bg,
    combinedClass: questTypeColors['App UX'].combined,
  },
  'In-Store Experience': {
    icon: Store,
    textColor: '#16a34a', // green-600
    textColorDark: '#4ade80', // green-400
    bgColor: '#dcfce7', // green-100
    bgColorDark: 'rgba(20, 83, 45, 0.5)', // green-900/50
    textClass: questTypeColors['In-Store Experience'].text,
    bgClass: questTypeColors['In-Store Experience'].bg,
    combinedClass: questTypeColors['In-Store Experience'].combined,
  },
  'Survey': {
    icon: ClipboardList,
    textColor: '#9333ea', // purple-600
    textColorDark: '#c084fc', // purple-400
    bgColor: '#f3e8ff', // purple-100
    bgColorDark: 'rgba(88, 28, 135, 0.5)', // purple-900/50
    textClass: questTypeColors['Survey'].text,
    bgClass: questTypeColors['Survey'].bg,
    combinedClass: questTypeColors['Survey'].combined,
  },
}

/**
 * Get quest type design configuration
 * 
 * @param questType - Quest type
 * @returns Design configuration
 */
export function getQuestTypeDesign(questType: QuestType): QuestTypeDesign {
  return QUEST_TYPE_DESIGN[questType]
}

/**
 * Get quest type icon component
 * 
 * @param questType - Quest type
 * @returns Lucide icon component
 */
export function getQuestTypeIcon(questType: QuestType): LucideIcon {
  return QUEST_TYPE_DESIGN[questType].icon
}

/**
 * Get quest type color classes
 * 
 * @param questType - Quest type
 * @returns Color classes object
 */
export function getQuestTypeColorClasses(questType: QuestType): {
  text: string
  bg: string
  combined: string
} {
  const design = QUEST_TYPE_DESIGN[questType]
  return {
    text: design.textClass,
    bg: design.bgClass,
    combined: design.combinedClass,
  }
}

/**
 * Get all quest type designs
 * Useful for generating menus or lists
 * 
 * @returns Array of quest types with their designs
 */
export function getAllQuestTypeDesigns(): Array<{
  type: QuestType
  design: QuestTypeDesign
}> {
  return Object.entries(QUEST_TYPE_DESIGN).map(([type, design]) => ({
    type: type as QuestType,
    design,
  }))
}

/**
 * Quest Component Presets
 * Pre-configured styles for quest-related components
 */
export const questComponentPresets = {
  // Quest row
  questRow: {
    icon: 'h-12 w-12 rounded-lg',
    title: 'text-base font-semibold',
    meta: 'text-xs',
    progress: 'h-1.5',
  },
  
  // Quest card
  questCard: {
    container: 'rounded-lg border bg-card shadow-sm p-6',
    title: 'text-2xl font-semibold',
    description: 'text-sm text-muted-foreground',
    badge: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
  },
  
  // Quest type badge
  questTypeBadge: {
    container: 'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
    icon: 'h-3.5 w-3.5',
  },
} as const

/**
 * Get quest component preset
 * 
 * @param component - Component name
 * @returns Component preset styles
 */
export function getQuestComponentPreset(
  component: keyof typeof questComponentPresets
) {
  return questComponentPresets[component]
}
