/**
 * Quest Design System
 * 
 * 統一的 Quest Type 視覺設計規範
 * 所有使用 quest type 的地方都應該參考這個檔案，確保一致性
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
import type { QuestType } from './quest-types'

/**
 * Quest Type 視覺設計配置
 */
export interface QuestTypeDesign {
  /** Lucide icon 組件 */
  icon: LucideIcon
  /** 文字顏色 (light mode) */
  textColor: string
  /** 文字顏色 (dark mode) */
  textColorDark: string
  /** 背景顏色 (light mode) */
  bgColor: string
  /** 背景顏色 (dark mode) */
  bgColorDark: string
  /** Tailwind 文字顏色類別 */
  textClass: string
  /** Tailwind 背景顏色類別 */
  bgClass: string
  /** 完整的 Tailwind 類別組合 */
  combinedClass: string
}

/**
 * Quest Type 設計系統映射表
 * 
 * 顏色系統：
 * - Sensory Feedback: Blue (藍色) - 代表感知和思考
 * - Dine & Review: Yellow (黃色) - 代表美食和溫暖
 * - Ad Campaign: Pink (粉色) - 代表創意和行銷
 * - App UX: Cyan (青色) - 代表科技和數位
 * - In-Store Experience: Green (綠色) - 代表實體和環境
 * - Survey: Purple (紫色) - 代表數據和分析
 */
export const QUEST_TYPE_DESIGN: Record<QuestType, QuestTypeDesign> = {
  'Sensory Feedback': {
    icon: BrainCircuit,
    textColor: '#2563eb', // blue-600
    textColorDark: '#60a5fa', // blue-400
    bgColor: '#dbeafe', // blue-100
    bgColorDark: 'rgba(30, 58, 138, 0.5)', // blue-900/50
    textClass: 'text-blue-600 dark:text-blue-400',
    bgClass: 'bg-blue-100 dark:bg-blue-900/50',
    combinedClass: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
  },
  'Dine & Review': {
    icon: UtensilsCrossed,
    textColor: '#ca8a04', // yellow-600
    textColorDark: '#facc15', // yellow-400
    bgColor: '#fef9c3', // yellow-100
    bgColorDark: 'rgba(113, 63, 18, 0.5)', // yellow-900/50
    textClass: 'text-yellow-600 dark:text-yellow-400',
    bgClass: 'bg-yellow-100 dark:bg-yellow-900/50',
    combinedClass: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400',
  },
  'Ad Campaign': {
    icon: Megaphone,
    textColor: '#db2777', // pink-600
    textColorDark: '#f472b6', // pink-400
    bgColor: '#fce7f3', // pink-100
    bgColorDark: 'rgba(131, 24, 67, 0.5)', // pink-900/50
    textClass: 'text-pink-600 dark:text-pink-400',
    bgClass: 'bg-pink-100 dark:bg-pink-900/50',
    combinedClass: 'bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400',
  },
  'App UX': {
    icon: Smartphone,
    textColor: '#0891b2', // cyan-600
    textColorDark: '#22d3ee', // cyan-400
    bgColor: '#cffafe', // cyan-100
    bgColorDark: 'rgba(22, 78, 99, 0.5)', // cyan-900/50
    textClass: 'text-cyan-600 dark:text-cyan-400',
    bgClass: 'bg-cyan-100 dark:bg-cyan-900/50',
    combinedClass: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400',
  },
  'In-Store Experience': {
    icon: Store,
    textColor: '#16a34a', // green-600
    textColorDark: '#4ade80', // green-400
    bgColor: '#dcfce7', // green-100
    bgColorDark: 'rgba(20, 83, 45, 0.5)', // green-900/50
    textClass: 'text-green-600 dark:text-green-400',
    bgClass: 'bg-green-100 dark:bg-green-900/50',
    combinedClass: 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400',
  },
  'Survey': {
    icon: ClipboardList,
    textColor: '#9333ea', // purple-600
    textColorDark: '#c084fc', // purple-400
    bgColor: '#f3e8ff', // purple-100
    bgColorDark: 'rgba(88, 28, 135, 0.5)', // purple-900/50
    textClass: 'text-purple-600 dark:text-purple-400',
    bgClass: 'bg-purple-100 dark:bg-purple-900/50',
    combinedClass: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400',
  },
}

/**
 * 獲取 Quest Type 的設計配置
 */
export function getQuestTypeDesign(questType: QuestType): QuestTypeDesign {
  return QUEST_TYPE_DESIGN[questType]
}

/**
 * 獲取 Quest Type 的 Icon 組件
 */
export function getQuestTypeIcon(questType: QuestType): LucideIcon {
  return QUEST_TYPE_DESIGN[questType].icon
}

/**
 * 獲取 Quest Type 的顏色類別
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
 * 獲取所有 Quest Types 的設計配置（用於生成選單或列表）
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
