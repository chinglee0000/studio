export const QUEST_TYPES = [
  'Sensory Feedback',
  'Dine & Review',
  'Ad Campaign',
  'App UX',
  'In-Store Experience',
  'Survey'
] as const

export type QuestType = typeof QUEST_TYPES[number]

export const QUEST_STATUS = [
  'matching',
  'in-progress',
  'completed'
] as const

export type QuestStatus = typeof QUEST_STATUS[number]

export const SUBMISSION_STATUS = [
  'pending-review',
  'approved'
] as const

export type SubmissionStatus = typeof SUBMISSION_STATUS[number]
