import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export async function getById(req: NextApiRequest, res: NextApiResponse) {
  const { icebreakerId } = req.query

  try {
    const icebreaker = await prisma.icebreaker.findUnique({
      where: {
        id: icebreakerId as string,
      },
    })
    res.status(200).json({ icebreaker })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export async function getMany(req: NextApiRequest, res: NextApiResponse) {
  try {
    const icebreakers = await prisma.icebreaker.findMany()
    res.status(200).json({ icebreakers })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
