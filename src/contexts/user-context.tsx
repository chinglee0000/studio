"use client"

import React, { createContext, useContext, useState } from 'react'

export type UserRole = 'user' | 'business' | 'both'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: UserRole
  // User mode specific data
  earned?: number
  potential?: number
  humanityIndex?: number
  profileViews?: number
  level?: number
  // Business mode specific data
  companyName?: string
  subscription?: string
}

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
  isBusinessMode: boolean
  isUserMode: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

// Mock user data
const mockUser: User = {
  id: '1',
  name: 'Alex Mercer',
  email: 'alex.mercer@example.com',
  avatar: 'https://i.pravatar.cc/150?img=33',
  role: 'both',
  // User mode data
  earned: 1450.75,
  potential: 2340.50,
  humanityIndex: 78,
  profileViews: 234,
  level: 12,
  // Business mode data
  companyName: 'Twin3 Corp',
  subscription: 'Pro',
}

export function UserProvider({ 
  children,
  mode = 'user'
}: { 
  children: React.ReactNode
  mode?: 'user' | 'business'
}) {
  const [user, setUser] = useState<User | null>(mockUser)
  const isBusinessMode = mode === 'business'
  const isUserMode = mode === 'user'

  return (
    <UserContext.Provider value={{ user, setUser, isBusinessMode, isUserMode }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
