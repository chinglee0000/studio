/**
 * 參與者名額格式化工具函數
 */

export interface ParticipantsDisplayResult {
  text: string
  label?: string
  variant: 'normal' | 'warning' | 'urgent'
}

/**
 * 格式化參與者名額顯示
 * @param current 當前參與人數
 * @param max 最大名額
 * @returns 格式化的參與者資訊和變體
 */
export function formatParticipants(current: number, max: number): ParticipantsDisplayResult {
  const remaining = max - current
  const filledPercentage = (current / max) * 100
  
  const text = `${current}/${max}`
  
  // 🔴 幾乎額滿 (≥ 90% 或剩餘 ≤ 5)
  if (filledPercentage >= 90 || remaining <= 5) {
    return {
      text,
      label: 'Almost Full',
      variant: 'urgent'
    }
  }
  
  // 🟡 名額有限 (70-90% 或剩餘 ≤ 20)
  if (filledPercentage >= 70 || remaining <= 20) {
    return {
      text,
      label: 'Limited Spots',
      variant: 'warning'
    }
  }
  
  // 🟢 名額充足
  return {
    text,
    variant: 'normal'
  }
}

/**
 * 獲取參與者變體的樣式類別
 */
export function getParticipantsVariantClass(variant: ParticipantsDisplayResult['variant']): string {
  switch (variant) {
    case 'urgent':
      return 'text-red-600 dark:text-red-400'
    case 'warning':
      return 'text-yellow-600 dark:text-yellow-400'
    default:
      return 'text-muted-foreground'
  }
}

/**
 * 獲取參與者標籤的樣式類別
 */
export function getParticipantsLabelClass(variant: ParticipantsDisplayResult['variant']): string {
  switch (variant) {
    case 'urgent':
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
    default:
      return 'bg-muted text-muted-foreground'
  }
}
