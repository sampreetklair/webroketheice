import { getUserSession } from '@/src/lib/session'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const user = await getUserSession()
  return NextResponse.json({
    user: user?.name,
  })
}
