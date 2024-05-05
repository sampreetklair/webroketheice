"use client";
/*
 * Documentation:
 * Comment Bar — https://app.subframe.com/library?component=Comment+Bar_b5c3ef42-e7b7-4c54-84fa-e584ee14be2e
 * Icon with background — https://app.subframe.com/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { IconWithBackground } from "./IconWithBackground";
import { Button } from "./Button";

interface CommentBarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  className?: string;
}

const CommentBarRoot = React.forwardRef<HTMLElement, CommentBarRootProps>(
  function CommentBarRoot(
    { placeholder, className, ...otherProps }: CommentBarRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full items-center gap-2 border-t border-solid border-neutral-border pt-4 pb-4",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <IconWithBackground
          variant="neutral"
          size="medium"
          icon="FeatherUser"
        />
        {placeholder ? (
          <span className="w-full grow shrink-0 basis-0 text-body font-body text-subtext-color">
            {placeholder}
          </span>
        ) : null}
        <Button variant="neutral-secondary">Login to comment</Button>
      </div>
    );
  }
);

export const CommentBar = CommentBarRoot;
