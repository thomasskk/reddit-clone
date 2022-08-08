import { Settings } from '~/components/Icons'
import Profile from '~/components/Icons/Profile'
import {
  advertise,
  explore,
  helpCenter,
  more,
  recentCommunities,
  talk,
  termsAndPolicies,
} from './menuContent'
import { MenuItemContent } from './MenuItem'

export const menuContentLogOut: MenuItemContent[] = [
  talk,
  recentCommunities,
  explore,
  {
    label: 'Settings',
    icon: <Settings />,
    childrenContent: [
      {
        label: 'Dark Mode',
        type: 'switch',
        switchOpts: {},
      },
    ],
  },
  advertise,
  helpCenter,
  more,
  termsAndPolicies,
  {
    label: 'Sign Up or Log In',
    icon: <Profile />,
  },
]
