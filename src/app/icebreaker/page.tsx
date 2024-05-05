'use client'

import React from 'react'
import { Breadcrumbs } from '@/subframe/components/Breadcrumbs'
import { Button } from '@/subframe/components/Button'
import { Badge } from '@/subframe/components/Badge'
import { LinkButton } from '@/subframe/components/LinkButton'
import { PhMakerShoutout } from '@/subframe/components/PhMakerShoutout'
import { CommentBar } from '@/subframe/components/CommentBar'
import { DropdownMenu } from '@/subframe/components/DropdownMenu'
import * as SubframeCore from '@subframe/core'
import { PhComment } from '@/subframe/components/PhComment'

function PhLaunchPostCopy() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background">
      <div className="container max-w-none flex w-full max-w-[1024px] flex-col items-start gap-8 pt-12 pr-6 pb-12 pl-6">
        <Breadcrumbs>
          <Breadcrumbs.Item>Home</Breadcrumbs.Item>
          <Breadcrumbs.Divider />
          <Breadcrumbs.Item>Product</Breadcrumbs.Item>
          <Breadcrumbs.Divider />
          <Breadcrumbs.Item active={true}>Subframe</Breadcrumbs.Item>
        </Breadcrumbs>
        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full items-center justify-between">
              <div className="flex h-16 w-16 flex-none items-center justify-between">
                <img
                  className="h-full w-full grow shrink-0 basis-0"
                  src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
                />
              </div>
            </div>
            <div className="flex w-full items-center gap-2">
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="text-heading-1 font-heading-1 text-default-font">
                  Subframe
                </span>
                <span className="text-heading-3 font-heading-3 text-subtext-color">
                  The best way to build UI, fast
                </span>
              </div>
              <Button size="large" icon="FeatherChevronUp">
                UPVOTE
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full flex-col items-start gap-2">
              <div className="flex w-full items-center gap-1">
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  icon="FeatherMessageSquare"
                >
                  Discuss
                </Button>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  icon="FeatherBookmark"
                >
                  Collect
                </Button>
                <Button
                  variant="neutral-tertiary"
                  size="small"
                  icon="FeatherShare"
                >
                  Share
                </Button>
              </div>
              <span className="text-body font-body text-default-font">
                Visually build UI using real components. Start with stunning
                templates. Personalize your theme. Design pages with our
                intuitive drag-and-drop editor. Then, save hours by never having
                to write CSS again.
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-body font-body text-subtext-color">
                Launched in
              </span>
              <Badge variant="neutral">Design Tools</Badge>
              <Badge variant="neutral">Website Builder</Badge>
              <Badge variant="neutral">Developer Tools</Badge>
              <span className="text-body font-body text-subtext-color">by</span>
              <LinkButton>webroketheice.club</LinkButton>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 pt-8">
          <span className="w-full text-heading-2 font-heading-2 text-default-font">
            Similar
          </span>
          <PhMakerShoutout>
            <PhMakerShoutout.Shoutout
              className="h-auto w-full grow shrink-0 basis-0"
              logo="https://res.cloudinary.com/subframe/image/upload/v1713909359/uploads/279/d7be8pphlxlqp7zep9ch.avif"
              title="Supabase"
              subtitle="8,379 upvotes"
              desc="Supabase helped us launch our product in way less time."
            />
            <div className="flex h-full w-px flex-none flex-col items-center gap-2 bg-neutral-border" />
            <PhMakerShoutout.Shoutout
              className="h-auto w-full grow shrink-0 basis-0"
              logo="https://res.cloudinary.com/subframe/image/upload/v1713909352/uploads/279/rsam5v66hcvpj96fr5hc.avif"
              title="Liveblocks"
              subtitle="2,124 upvotes"
              desc="Liveblocks powers Subframe's real-time collaboration features. "
            />
            <div className="flex h-full w-px flex-none flex-col items-center gap-2 bg-neutral-border" />
            <PhMakerShoutout.Shoutout
              className="h-auto w-full grow shrink-0 basis-0"
              logo="https://res.cloudinary.com/subframe/image/upload/v1713909410/uploads/279/lrksle90ypvwqhk1pksk.avif"
              title="Loops"
              subtitle="2,730 upvotes"
              desc="Awesome tool for B2B email! Really responsive customer support too."
            />
          </PhMakerShoutout>
        </div>
        <div className="flex w-full flex-col items-start gap-4 border-b border-solid border-neutral-border">
          <CommentBar placeholder="What do you think?" />
        </div>
        <div className="flex items-center">
          <span className="text-caption-bold font-caption-bold text-default-font">
            Sort by:
          </span>
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <Button
                variant="neutral-tertiary"
                size="small"
                iconRight="FeatherChevronDown"
              >
                Best
              </Button>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon={null}>
                    Best
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Newest
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Most helpful
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
        <div className="flex w-full flex-col items-start gap-8">
          <PhComment
            avatar="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg"
            name="Irvin Zhan"
            handle="@irvon_at_subframe"
            badges={<Badge variant="success">Maker</Badge>}
            body="Hey PH! I’m Irvin, CEO of Subframe (https://subframe.com/)\n\nBack in 2022, I started Subframe as a passion project because I was frustrated by the inefficiencies in building UI:\n🤯 My team wasted hours drawing rectangles in Figma, translating mockups to CSS, and sitting in meetings correcting the mistakes.\n🤯 I tried Figma plugins that promised design-to-code, but rarely produced high-quality code.\n🤯 As a non-designer, I couldn’t get things to look good when I tried designing it myself.\n\nThat’s why we built Subframe, a new way to quickly go from idea to production-ready UI.\n\nHere’s how it works:\n✨ Browse hundreds of beautiful, designer-approved templates to kickstart your designs\n🎨 Refine your designs by drag-and-dropping in Subframe’s visual editor using real components, not mockups\n💻 Export your designs to high-quality React/Tailwind code by copy and pasting\n\nSubframe is unlike existing tools out there in that:\n➡️ We help you build your actual product, not just marketing pages. You can create screens like dashboards, settings pages, chat bots, and more.\n➡️ Our editor is easy and intuitive for non-designers. We are an alternative to Figma that gives you guardrails like choosing colors, which takes the guesswork of “making things look good”.\n➡️ We work within your codebase. After you build something on Subframe, the UI code you copy/paste is all yours. You can hook it up to your custom business logic, without any lock-in.\n\nWe’ve seen hundreds of companies build UI on Subframe already and are excited to now open up to the public.\n\nAnd that’s not all – we have an exciting roadmap ahead. I wrote about it here: https://medium.com/@irvin_zhan/i...\n\nThank you for your support PH 🙏"
            actions={
              <>
                <Button variant="neutral-tertiary" size="small">
                  Upvote (33)
                </Button>
                <Button variant="neutral-tertiary" size="small">
                  Share
                </Button>
                <Button variant="neutral-tertiary" size="small">
                  Apr 22
                </Button>
              </>
            }
          />
          <PhComment
            avatar="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
            name="Aris Merlo"
            handle="@saa"
            body="This is awesome. Turning ideas into code is one of the most critical task I've ever had. Subframe is super useful and user friendly. Glad to see you addressing something so challenging. Keep on that way my friend. All the best!"
            actions={
              <>
                <Button variant="brand-tertiary" size="small">
                  Upvoted (8)
                </Button>
                <Button variant="neutral-tertiary" size="small">
                  Share
                </Button>
                <Button variant="neutral-tertiary" size="small">
                  Apr 23
                </Button>
              </>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default PhLaunchPostCopy
