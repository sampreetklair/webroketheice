import React from 'react'
import { getUserSession } from '@/lib/session'

const UserProfile = async () => {
  const user = await getUserSession()

  return <span>{user?.name}</span>
}

export default UserProfile
