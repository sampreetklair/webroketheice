"use client";
/*
 * Documentation:
 * PH Nav — https://app.subframe.com/library?component=PH+Nav_2eee19a9-f5f1-448c-96f8-d05330a005a8
 * Text Field — https://app.subframe.com/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Dropdown Menu — https://app.subframe.com/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Avatar — https://app.subframe.com/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { DropdownMenu } from "./DropdownMenu";
import { Avatar } from "./Avatar";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  children?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(function NavItem(
  { label, children, className, ...otherProps }: NavItemProps,
  ref
) {
  return (
    <SubframeCore.HoverCard.Root>
      <SubframeCore.HoverCard.Trigger asChild={true}>
        <div
          className={SubframeCore.twClassNames(
            "group/5a70be18 flex cursor-pointer flex-col items-start gap-4",
            className
          )}
          ref={ref as any}
          {...otherProps}
        >
          {label ? (
            <span className="text-body font-body text-subtext-color group-hover/5a70be18:text-brand-600">
              {label}
            </span>
          ) : null}
        </div>
      </SubframeCore.HoverCard.Trigger>
      <SubframeCore.HoverCard.Portal>
        <SubframeCore.HoverCard.Content
          side="bottom"
          align="start"
          sideOffset={4}
          asChild={true}
        >
          {children ? (
            <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background pt-3 pr-3 pb-3 pl-3 shadow-overlay">
              {children}
            </div>
          ) : null}
        </SubframeCore.HoverCard.Content>
      </SubframeCore.HoverCard.Portal>
    </SubframeCore.HoverCard.Root>
  );
});

interface NavDropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "green" | "red" | "blue";
  icon?: SubframeCore.IconName;
  title?: string;
  subtitle?: string;
  className?: string;
}

const NavDropdownItem = React.forwardRef<HTMLElement, NavDropdownItemProps>(
  function NavDropdownItem(
    {
      variant = "green",
      icon = "FeatherCheck",
      title,
      subtitle,
      className,
      ...otherProps
    }: NavDropdownItemProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/0373d5b9 flex w-full cursor-pointer items-center gap-4 hover:bg-success-50",
          {
            "hover:bg-warning-50": variant === "blue",
            "hover:bg-error-50": variant === "red",
          },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex flex-col items-start gap-4">
          <div
            className={SubframeCore.twClassNames(
              "flex h-10 w-10 flex-none items-center justify-center gap-2 rounded-md bg-success-100 group-hover/0373d5b9:bg-success-50",
              {
                "bg-warning-100 group-hover/0373d5b9:bg-warning-50":
                  variant === "blue",
                "bg-error-100 group-hover/0373d5b9:bg-error-50":
                  variant === "red",
              }
            )}
          >
            <SubframeCore.Icon
              className={SubframeCore.twClassNames(
                "text-[20px] font-[400] leading-[24px] text-success-600 group-hover/0373d5b9:text-[24px] group-hover/0373d5b9:font-[400] group-hover/0373d5b9:leading-[28px]",
                {
                  "text-warning-600": variant === "blue",
                  "text-error-600": variant === "red",
                }
              )}
              name={icon}
            />
          </div>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1 pr-6">
          {title ? (
            <span className="w-full text-body font-body text-default-font">
              {title}
            </span>
          ) : null}
          {subtitle ? (
            <span className="text-caption font-caption text-subtext-color">
              {subtitle}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

interface PhNavRootProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const PhNavRoot = React.forwardRef<HTMLElement, PhNavRootProps>(
  function PhNavRoot({ className, ...otherProps }: PhNavRootProps, ref) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex h-16 w-full items-center gap-6 border-b border-solid border-neutral-border bg-default-background pr-6 pl-6",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full grow shrink-0 basis-0 items-center gap-8">
          <img
            className="h-8 flex-none"
            src="https://res.cloudinary.com/subframe/image/upload/v1714064148/uploads/279/ziwiqsjnvkslfluibfow.svg"
          />
          <TextField variant="filled" label="" helpText="" icon="FeatherSearch">
            <TextField.Input placeholder="Search (⌘ + K)" />
          </TextField>
        </div>
        <div className="flex h-full w-full grow shrink-0 basis-0 items-center justify-center gap-8">
          <NavItem label="Launches">
            <div className="flex w-full flex-col items-start gap-3">
              <NavDropdownItem
                icon="FeatherBell"
                title="Coming soon"
                subtitle="Upcoming launches to watch"
              />
              <NavDropdownItem
                variant="red"
                icon="FeatherRocket"
                title="Launch archive"
                subtitle="Most-loved launches by the community"
              />
              <NavDropdownItem
                variant="blue"
                icon="FeatherCompass"
                title="Launch guide"
                subtitle="Checklists and pro tips for launching"
              />
            </div>
          </NavItem>
          <NavItem label="Products" />
          <NavItem label="News">
            <div className="flex w-full flex-col items-start gap-3">
              <NavDropdownItem
                variant="blue"
                icon="FeatherMail"
                title="Newsletter"
                subtitle="The best of Product Hunt, every day"
              />
              <NavDropdownItem
                icon="FeatherBookOpen"
                title="Stories"
                subtitle="Tech news, interviews, and tips from makers"
              />
              <NavDropdownItem
                variant="red"
                icon="FeatherBook"
                title="Changelog"
                subtitle="New Product Hunt features and releases"
              />
            </div>
          </NavItem>
          <NavItem label="Community">
            <div className="flex w-full flex-col items-start gap-3">
              <NavDropdownItem
                variant="red"
                icon="FeatherMessagesSquare"
                title="Discussions"
                subtitle="Ask questions, find support, and connect"
              />
              <NavDropdownItem
                icon="FeatherFlame"
                title="Streaks"
                subtitle="The most active community members"
              />
              <NavDropdownItem
                variant="blue"
                icon="FeatherCalendarCheck"
                title="Events"
                subtitle="Meet others online and in-person"
              />
            </div>
          </NavItem>
        </div>
        <div className="flex h-full w-full grow shrink-0 basis-0 items-center justify-end gap-2">
          <Button variant="brand-secondary">Submit</Button>
          <IconButton icon="FeatherBell" />
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif">
                AB
              </Avatar>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="end"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon={null}>
                    Profile
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    My products
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Settings
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    API dashboard
                  </DropdownMenu.DropdownItem>
                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                  <DropdownMenu.DropdownItem icon={null}>
                    Log out
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
      </div>
    );
  }
);

export const PhNav = Object.assign(PhNavRoot, {
  NavItem,
  NavDropdownItem,
});
