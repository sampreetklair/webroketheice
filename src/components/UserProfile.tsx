import React, { useEffect, useState } from 'react'
import { getUserSession } from '@/lib/session'

const UserProfile = async () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserSession()
      setUser(user)
    }
    fetchUser()
  }, [user])

  return <span>{user?.name}</span>
}

export default UserProfile
