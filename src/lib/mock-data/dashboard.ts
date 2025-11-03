import type { Quest } from '@/lib/types'

// User Stats for UserStatusCard
export type UserStats = {
  name: string
  earned: number
  potential: number
  humanityIndex: number
  profileViews: number
  avatarUrl?: string
}

// Re-export Twin Matrix types from matrix.ts
export type { MatrixTrait, MatrixDimension, TwinMatrixData } from '@/lib/types/matrix'

// Mock User Stats
export const mockUserStats: UserStats = {
  name: 'Alex Mercer',
  earned: 1450.75,
  potential: 2340.50,
  humanityIndex: 78,
  profileViews: 234,
  avatarUrl: undefined,
}

// Mock Quests - 展示所有變體組合
export const mockQuests: (Quest & { progress?: number })[] = [
  // 🔴 緊急時間 + 🔴 幾乎額滿
  {
    id: '1',
    title: 'Urgent: Last Chance Web3 Workshop',
    description: 'Final spots for exclusive Web3 development workshop',
    questType: 'App UX',
    reward: { twin3: 120 },
    status: 'in-progress',
    progress: 85,
    participants: {
      current: 232,
      max: 234, // Almost Full (>90%)
    },
    deadline: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours - Urgent
    targetAudience: {
      ageRange: [18, 65],
      location: ['US'],
      interests: ['web3'],
    },
    creatorId: 'creator1',
  },
  // 🔴 緊急時間 + 🟡 名額有限
  {
    id: '2',
    title: 'Flash Survey: AI Product Feedback',
    description: 'Quick survey about AI product preferences',
    questType: 'Survey',
    reward: { twin3: 25 },
    status: 'in-progress',
    progress: 60,
    participants: {
      current: 82,
      max: 100, // Limited Spots (82%)
    },
    deadline: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours - Urgent
    targetAudience: {
      ageRange: [18, 65],
      location: ['Global'],
      interests: ['ai'],
    },
    creatorId: 'creator1',
  },
  // 🟡 警告時間 + 🔴 幾乎額滿
  {
    id: '3',
    title: 'Premium Restaurant Tasting Event',
    description: 'Exclusive fine dining experience and review',
    questType: 'Dine & Review',
    reward: { twin3: 200 },
    status: 'in-progress',
    progress: 40,
    participants: {
      current: 48,
      max: 50, // Almost Full (96%)
    },
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days - Warning
    targetAudience: {
      ageRange: [25, 65],
      location: ['NYC'],
      interests: ['food'],
    },
    creatorId: 'creator1',
  },
  // 🟡 警告時間 + 🟡 名額有限
  {
    id: '4',
    title: 'Mobile App UX Testing Sprint',
    description: 'Test new mobile app features and provide feedback',
    questType: 'App UX',
    reward: { twin3: 85 },
    status: 'in-progress',
    progress: 55,
    participants: {
      current: 175,
      max: 234, // Limited Spots (75%)
    },
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days - Warning
    targetAudience: {
      ageRange: [18, 45],
      location: ['US'],
      interests: ['mobile'],
    },
    creatorId: 'creator1',
  },
  // ⚪ 正常時間 + 🟡 名額有限
  {
    id: '5',
    title: 'Blockchain Gaming Beta Test',
    description: 'Early access to new blockchain gaming platform',
    questType: 'Sensory Feedback',
    reward: { twin3: 150 },
    status: 'in-progress',
    progress: 30,
    participants: {
      current: 360,
      max: 500, // Limited Spots (72%)
    },
    deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days - Normal
    targetAudience: {
      ageRange: [18, 35],
      location: ['Global'],
      interests: ['gaming', 'blockchain'],
    },
    creatorId: 'creator1',
  },
  // ⚪ 正常時間 + ⚪ 名額充足
  {
    id: '6',
    title: 'Community Content Creation Challenge',
    description: 'Create and share content about your experience',
    questType: 'Ad Campaign',
    reward: { twin3: 75 },
    status: 'in-progress',
    progress: 20,
    participants: {
      current: 120,
      max: 500, // Normal (24%)
    },
    deadline: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000), // 25 days - Normal
    targetAudience: {
      ageRange: [18, 65],
      location: ['Global'],
      interests: ['content'],
    },
    creatorId: 'creator1',
  },
  // 日期格式顯示 (>30天) + ⚪ 名額充足
  {
    id: '7',
    title: 'Long-term Fitness Tracking Study',
    description: 'Participate in 60-day fitness and wellness study',
    questType: 'Sensory Feedback',
    reward: { twin3: 300 },
    status: 'in-progress',
    progress: 15,
    participants: {
      current: 45,
      max: 200, // Normal (22.5%)
    },
    deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // 60 days - Date format
    targetAudience: {
      ageRange: [18, 65],
      location: ['US'],
      interests: ['fitness', 'health'],
    },
    creatorId: 'creator1',
  },
  // 已過期
  {
    id: '8',
    title: 'Expired: Summer Marketing Campaign',
    description: 'Social media marketing campaign (expired)',
    questType: 'Ad Campaign',
    reward: { twin3: 100 },
    status: 'completed',
    participants: {
      current: 500,
      max: 500,
    },
    deadline: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago - Expired
    targetAudience: {
      ageRange: [18, 45],
      location: ['Global'],
      interests: ['marketing'],
    },
    creatorId: 'creator1',
  },
]

// Note: Twin Matrix data has been moved to src/lib/mock-data/matrix.ts
