import { Community, Logout, Views } from '~/components/Icons'
import Profile from '~/components/Icons/Profile'
import {
  advertise,
  explore,
  helpCenter,
  line,
  more,
  recentCommunities,
  talk,
  termsAndPolicies,
} from './menuContent'
import { MenuItemContent } from './MenuItem'
import { signOut } from 'next-auth/react'

export const menuContentLogIn: MenuItemContent[] = [
  {
    label: 'My stuff',
    icon: <Profile />,
    type: 'presentation',
  },
  {
    label: 'Online Status',
    type: 'switch',
  },
  {
    label: 'Profile',
  },
  {
    label: 'Create Avatar',
  },
  {
    label: 'User settings',
  },
  line,
  {
    label: 'View',
    icon: <Views />,
    type: 'presentation',
  },
  {
    label: 'Dark Mode',
    type: 'switch',
    switchOpts: {},
  },
  line,
  {
    label: 'Create a Community',
    icon: <Community />,
  },
  advertise,
  talk,
  recentCommunities,
  explore,
  helpCenter,
  more,
  termsAndPolicies,
  line,
  {
    label: 'Log Out',
    icon: <Logout />,
    onClick: () => signOut({ redirect: false }),
  },
]
