/**
 * 時間格式化工具函數
 */

export interface TimeDisplayResult {
  text: string
  variant: 'normal' | 'warning' | 'urgent'
}

/**
 * 格式化剩餘時間顯示
 * @param deadline 截止日期
 * @returns 格式化的時間文字和變體
 */
export function formatTimeRemaining(deadline: Date): TimeDisplayResult {
  const now = new Date()
  const diffMs = deadline.getTime() - now.getTime()
  
  // 已過期
  if (diffMs <= 0) {
    return {
      text: 'Expired',
      variant: 'urgent'
    }
  }
  
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  const diffHours = Math.ceil(diffMs / (1000 * 60 * 60))
  const diffMinutes = Math.ceil(diffMs / (1000 * 60))
  
  // 一個月以上：顯示日期
  if (diffDays > 30) {
    return {
      text: deadline.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      variant: 'normal'
    }
  }
  
  // 一個月以內：相對時間
  let text: string
  let variant: 'normal' | 'warning' | 'urgent'
  
  if (diffDays >= 1) {
    text = `${diffDays} day${diffDays > 1 ? 's' : ''} left`
    variant = diffDays <= 3 ? 'warning' : 'normal'
  } else if (diffHours >= 1) {
    text = `${diffHours} hour${diffHours > 1 ? 's' : ''} left`
    variant = 'urgent'
  } else {
    text = `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} left`
    variant = 'urgent'
  }
  
  return { text, variant }
}

/**
 * 獲取時間變體的樣式類別
 */
export function getTimeVariantClass(variant: TimeDisplayResult['variant']): string {
  switch (variant) {
    case 'urgent':
      return 'text-red-600 dark:text-red-400'
    case 'warning':
      return 'text-yellow-600 dark:text-yellow-400'
    default:
      return 'text-muted-foreground'
  }
}
