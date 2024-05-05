'use client'

import { signIn, signOut } from 'next-auth/react'
import { Navbar } from '@/subframe/components/Navbar'
import { OAuthSocialButton } from '@/subframe/components/OAuthSocialButton'
import { Button } from '@/subframe/components/Button'
import Link from 'next/link'
import { getUserSession } from '../lib/session'

const Nav = () => {
  return (
    <Navbar className="bg-transparent">
      <Link href={'/'}>
        <Navbar.Item selected={true}>Home</Navbar.Item>
      </Link>
      <Link href={'/find'}>
        <Navbar.Item selected={true}>Find</Navbar.Item>
      </Link>
      <Link href={'/profile'}>
        <Navbar.Item>Dashboard</Navbar.Item>
      </Link>

      <OAuthSocialButton
        onClick={() => signIn()}
        logo="https://res.cloudinary.com/subframe/image/upload/v1711417516/shared/z0i3zyjjqkobzuaecgno.svg"
        disabled={false}
      >
        Sign in with Google
      </OAuthSocialButton>

      <Button onClick={() => signOut()} variant="neutral-secondary">
        Log Out
      </Button>
    </Navbar>
  )
}

export default Nav
