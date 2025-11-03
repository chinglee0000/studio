'use client'

import { UserStatusCard } from '@/components/user/user-status-card'
import { QuestOverview } from '@/components/user/quest-overview'
import { TwinMatrixCard } from '@/components/user/twin-matrix-card'
import { mockQuests } from '@/lib/mock-data/dashboard'
import { web3EngineerMatrixData } from '@/lib/mock-data/twin-matrix-persona'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Section 1: User Status */}
      <UserStatusCard />

      {/* Divider - Mobile only */}
      <div className="sm:hidden border-t border-border" />

      {/* Section 2 & 3: Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Section 2: Quest Hub (2/3 width on desktop) */}
        <div className="lg:col-span-2">
          <QuestOverview quests={mockQuests} />
        </div>

        {/* Divider - Mobile only */}
        <div className="lg:hidden border-t border-border" />

        {/* Section 3: Twin Matrix (1/3 width on desktop) */}
        <div className="lg:col-span-1">
          <TwinMatrixCard data={web3EngineerMatrixData} />
        </div>
      </div>
    </div>
  )
}
