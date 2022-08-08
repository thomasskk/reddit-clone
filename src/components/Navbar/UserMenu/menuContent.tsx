import Image from 'next/future/image'
import {
  Campaign,
  Discover,
  Help,
  History,
  Info,
  Live,
  Rules,
} from '~/components/Icons'
import { useRecentSub } from '~/hooks/useRecentSub'
import { MenuItem } from './MenuItem'

const RecentCommunities = () => {
  const { recentSubs } = useRecentSub()

  if (recentSubs.length === 0) {
    return null
  }

  return (
    <MenuItem
      key='recentCommunities'
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
          keyProps: sub.name,
        })),
      }}
    />
  )
}

export const recentCommunities = {
  content: <RecentCommunities />,
}

export const more = {
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

export const helpCenter = {
  label: 'Help Center',
  icon: <Help />,
}

export const talk = {
  label: 'Talk',
  icon: <Live />,
}

export const explore = {
  label: 'Explore',
  icon: <Discover />,
}

export const advertise = {
  label: 'Advertise on Reddit',
  icon: <Campaign />,
}

export const termsAndPolicies = {
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

export const line = {
  content: <div className='border-b border-gray-200 pb-2 mb-2' />,
}
