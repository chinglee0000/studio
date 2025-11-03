export const ROUTES = {
  HOME: '/',
  BUSINESS: {
    ROOT: '/business',
    DASHBOARD: '/business/dashboard',
    QUESTS: {
      ROOT: '/business/quests',
      NEW: '/business/quests/new',
      CONFIGURE: '/business/quests/new/configure',
      REVIEW: '/business/quests/new/review',
    },
    RESULTS: '/business/results',
    BILLING: '/business/billing',
    COMPONENTS_DEMO: '/business/components-demo',
  },
  USER: {
    ROOT: '/user',
    DASHBOARD: '/user/dashboard',
    QUESTS: {
      ROOT: '/user/quests',
      DETAIL: (id: string) => `/user/quests/${id}`,
      PARTICIPATE: (id: string) => `/user/quests/${id}/participate`,
    },
    AGENTS: '/user/agents',
    PROFILE: {
      ROOT: '/user/profile',
      WALLET: '/user/profile/wallet',
      MATRIX: '/user/profile/matrix',
      HISTORY: '/user/profile/history',
      SETTINGS: '/user/profile/settings',
    },
  },
} as const
