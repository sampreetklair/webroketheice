'use client'
import React from 'react'

import { TextField } from '@/subframe/components/TextField'
import { Tabs } from '@/subframe/components/Tabs'
import { ExploreFeatureCard } from '@/subframe/components/ExploreFeatureCard'
import { ListingCard } from '@/subframe/components/ListingCard'
import { IconWithBackground } from '@/subframe/components/IconWithBackground'
import { ExploreCard } from '@/subframe/components/ExploreCard'
import { Button } from '@/subframe/components/Button'
import Image from 'next/image'
import Nav from '@/components/Navbar'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { Spotlight } from '../components/ui/Spotlight'

function ExploreHomePageCopy() {
  const items = [
    {
      id: 1,
      title: 'Stand Up If…',
      description:
        'Someone comes up with a list of experiences and everyone else stands up if any of the prompts apply to them.',
      link: '/',
    },
    {
      id: 2,
      title: 'Two Truths and a Lie (Art Edition)',
      description:
        "Participants draw two true things about themselves and one lie on a piece of paper. Others try to guess the lie while learning about each other's artistic skills.",
      link: '/',
    },
    {
      id: 3,
      title: 'Rose, Thorn, and Bud',
      description:
        'Participants share a rose, thorn, and bud or in other words, something that’s going well, something that’s not going well, and something they’re hopeful for.',
      link: '/',
    },
    {
      id: 4,
      title: 'Stand Up If…',
      description:
        'Someone comes up with a list of experiences and everyone else stands up if any of the prompts apply to them.',
      link: '/',
    },
    {
      id: 5,
      title: 'Two Truths and a Lie (Art Edition)',
      description:
        "Participants draw two true things about themselves and one lie on a piece of paper. Others try to guess the lie while learning about each other's artistic skills.",
      link: '/',
    },
    {
      id: 6,
      title: 'Rose, Thorn, and Bud',
      description:
        'Participants share a rose, thorn, and bud or in other words, something that’s going well, something that’s not going well, and something they’re hopeful for.',
      link: '/',
    },
  ]

  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-2 bg-default-background pt-4 pr-6 pb-12 pl-6 ">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      <div className="flex w-full max-w-[768px] flex-col items-center gap-6">
        <div className="flex w-full max-w-[576px] flex-col items-center justify-center gap-6 pt-6 pr-6 pb-6 pl-6">
          <div className="flex w-144 flex-col items-center justify-center gap-2">
            <Image
              alt="hero-logo"
              className="h-112 w-full flex-none -mb-16"
              height={600}
              width={500}
              src="https://res.cloudinary.com/subframe/image/upload/v1714830640/uploads/1617/bmkudhsnyifcnlz2qaz1.svg"
            />

            <span className="w-full text-heading-1 font-heading-1 text-default-font text-center">
              have a nice break
            </span>
            <span className="w-full text-heading-2 font-heading-2 text-default-font text-center">
              or
            </span>
            <span className="h-9 w-full flex-none text-heading-1 font-heading-1 text-default-font text-center italic">
              have an ice break
            </span>
          </div>

          <TextField
            className="h-auto w-full flex-none"
            label=""
            helpText=""
            icon="FeatherSearch"
          >
            <TextField.Input placeholder="Search our best ice breakers" />
          </TextField>
        </div>
        <div className="flex w-full flex-col items-center gap-12">
          <Tabs>
            <Tabs.Item active={true}>Most popular</Tabs.Item>
            <Tabs.Item active={false}>Beginner</Tabs.Item>
            <Tabs.Item active={false}>Top rated</Tabs.Item>
            <Tabs.Item active={false}>New &amp; noteworthy</Tabs.Item>
            <Tabs.Item active={false}>Creative</Tabs.Item>
            <Tabs.Item active={false}>Developer</Tabs.Item>
            <Tabs.Item active={false}>Business</Tabs.Item>
          </Tabs>
          <div
            id="editor-picks"
            className="flex w-full flex-col items-center gap-16"
          >
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  Editor&#39;s picks
                </span>
                <span className="w-full text-body font-body text-subtext-color">
                  Curated selection of the most innovative AI models
                </span>
              </div>
              <HoverEffect items={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreHomePageCopy
