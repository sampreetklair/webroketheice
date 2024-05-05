import { signIn, signOut } from 'next-auth/react'
import { Navbar } from '@/subframe/components/Navbar'
import { OAuthSocialButton } from '@/subframe/components/OAuthSocialButton'
import { Button } from '@/subframe/components/Button'
import { Avatar } from '@/subframe/components/Avatar'
import Link from 'next/link'
import UserProfile from './UserProfile'
import { LinkButton } from '../subframe'

const Nav = () => {
  return (
    <Navbar className="bg-transparent">
      <Link href={'/'}>
        <Navbar.Item selected={true}>Home</Navbar.Item>
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
      <UserProfile />
    </Navbar>
  )
}

export default Nav
