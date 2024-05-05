'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { prisma } from '@/lib/prisma'
import { Icebreaker } from '@prisma/client'

type Props = {
  icebreaker: Icebreaker | null
}

const IcebreakerPage = (props: Props) => {
  if (!props.icebreaker) {
    return <p>No icebreaker found</p>
  }
  return (
    <div>
      <h1>Icebreaker: {props.icebreaker.id}</h1>
      {/* <div>
        <h2>{icebreaker.title}</h2>
        <p>{icebreaker.description}</p>
        {icebreaker.rules && <p>{icebreaker.rules}</p>}
      </div> */}
    </div>
  )
}
