"use client";
/*
 * Documentation:
 * PH Comment — https://app.subframe.com/library?component=PH+Comment_6715035e-8a06-4350-88e9-4f2ad057a8e7
 * Avatar — https://app.subframe.com/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Badge — https://app.subframe.com/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "./Avatar";

interface PhCommentRootProps extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: string;
  name?: string;
  handle?: string;
  badges?: React.ReactNode;
  body?: string;
  actions?: React.ReactNode;
  className?: string;
}

const PhCommentRoot = React.forwardRef<HTMLElement, PhCommentRootProps>(
  function PhCommentRoot(
    {
      avatar,
      name,
      handle,
      badges,
      body,
      actions,
      className,
      ...otherProps
    }: PhCommentRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full items-start gap-2",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex h-full flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Avatar image={avatar}>AB</Avatar>
          </div>
          <div className="flex h-full w-1 grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            {name ? (
              <span className="text-body-bold font-body-bold text-default-font">
                {name}
              </span>
            ) : null}
            {handle ? (
              <span className="text-caption font-caption text-subtext-color">
                {handle}
              </span>
            ) : null}
            {badges ? (
              <div className="flex h-6 items-center gap-2">{badges}</div>
            ) : null}
          </div>
          {body ? (
            <span className="whitespace-pre-wrap text-body font-body text-subtext-color">
              {body}
            </span>
          ) : null}
          {actions ? (
            <div className="flex items-center gap-2">{actions}</div>
          ) : null}
        </div>
      </div>
    );
  }
);

export const PhComment = PhCommentRoot;
