import { redirect } from 'next/navigation'

export default function Home() {
  // TODO: Implement user preference detection
  // For now, default to user dashboard
  redirect('/user/dashboard')
  return null
}
