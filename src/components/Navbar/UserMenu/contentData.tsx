import {
  Campaign,
  Community,
  Discover,
  Help,
  Info,
  Live,
  Logout,
  Profile,
  Rules,
  Settings,
  Views,
} from '~/components/Icons'
import { useRecentSub } from '~/hooks/useRecentSub'
import Image from 'next/future/image'
import { History } from '~/components/Icons'
import { MenuItem, MenuItemContent } from './MenuItem'

const RecentCommunities = () => {
  const { recentSubs } = useRecentSub()

  if (recentSubs.length === 0) {
    return null
  }

  return (
    <MenuItem
      {...{
        label: 'Recent Communities',
        icon: <History />,
        childrenContent: recentSubs.map((sub) => ({
          label: sub.name,
          icon: (
            <Image
              src={sub.thumbnailUrl}
              width={20}
              height={20}
              alt={sub.name}
              className='object-contain rounded-full shrink-0'
            />
          ),
          key: sub.name,
        })),
      }}
    />
  )
}

const recentCommunities = {
  content: <RecentCommunities />,
}

const more = {
  label: 'More',
  icon: <Info />,
  childrenContent: [
    {
      label: 'Reddit IOS',
    },
    {
      label: 'Reddit Android',
    },
    {
      label: 'ReReddit',
    },
    {
      label: 'Best Communities',
    },
    {
      label: 'Communities',
    },
    {
      label: 'About Reddit',
    },
    {
      label: 'Blog',
    },
    {
      label: 'Careers',
    },
    {
      label: 'Press',
    },
  ],
}

const helpCenter = {
  label: 'Help Center',
  icon: <Help />,
}

const talk = {
  label: 'Talk',
  icon: <Live />,
}

const explore = {
  label: 'Explore',
  icon: <Discover />,
}

const advertise = {
  label: 'Advertise on Reddit',
  icon: <Campaign />,
}

const termsAndPolicies = {
  label: 'Terms & Policies',
  icon: <Rules />,
  childrenContent: [
    {
      label: 'User Agreement',
    },
    {
      label: 'Privacy Policy',
    },
    {
      label: 'Content Policy',
    },
    {
      label: 'Moderator Guidelines',
    },
  ],
}

const line = {
  content: <div className='border-b border-gray-200 pb-2 mb-2' />,
}

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
  },
]
