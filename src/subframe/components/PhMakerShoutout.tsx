'use client'
/*
 * Documentation:
 * PH Maker Shoutout — https://app.subframe.com/library?component=PH+Maker+Shoutout_be6a339b-cac4-470c-91c3-0816aec7e115
 */

import React from 'react'
import * as SubframeCore from '@subframe/core'
import Image from 'next/image'

interface ShoutoutProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: string
  title?: string
  subtitle?: string
  desc?: string
  className?: string
}

const Shoutout = React.forwardRef<HTMLElement, ShoutoutProps>(function Shoutout(
  { logo, title, subtitle, desc, className, ...otherProps }: ShoutoutProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        'flex w-full min-w-[224px] flex-col items-center gap-4 pt-6 pr-6 pb-6 pl-6',
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex items-center gap-2">
        {logo ? (
          <Image alt="image" className="h-11 w-11 flex-none" src={logo} />
        ) : null}
        <div className="flex flex-col items-start gap-1">
          {title ? (
            <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
              {title}
            </span>
          ) : null}
          {subtitle ? (
            <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
              {subtitle}
            </span>
          ) : null}
        </div>
      </div>
      {desc ? (
        <span className="line-clamp-3 text-body font-body text-subtext-color text-center">
          {desc}
        </span>
      ) : null}
    </div>
  )
})

interface PhMakerShoutoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

const PhMakerShoutoutRoot = React.forwardRef<
  HTMLElement,
  PhMakerShoutoutRootProps
>(function PhMakerShoutoutRoot(
  { children, className, ...otherProps }: PhMakerShoutoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        'flex flex-col items-center gap-4 rounded-md border border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4 shadow-default',
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {children ? (
        <div className="flex w-full items-center gap-4">{children}</div>
      ) : null}
    </div>
  )
})

export const PhMakerShoutout = Object.assign(PhMakerShoutoutRoot, {
  Shoutout,
})
