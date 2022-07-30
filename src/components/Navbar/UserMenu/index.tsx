import { useClickOutside } from '@mantine/hooks'
import { useState } from 'react'
import {
  Campaign,
  Coins,
  Discover,
  Help,
  History,
  Info,
  Live,
  Premium,
  Rules,
  Settings,
} from '~/components/Icons'
import { useChildBlur } from '~/hooks/useChildBlur'
import { useMenu } from '~/hooks/useMenu'
import { useRecentSub } from '~/hooks/useRecentSub'
import Image from 'next/future/image'

const MENU_ID = 'nav-user-menu'
const MENU_CONTROL_ID = 'button-nav-user-menu'

const RecentsCommunities = () => {
  const { recentSubs } = useRecentSub()

  return (
    <ul>
      {recentSubs.map((sub) => (
        <li key={sub.name} className='flex gap-2 items-center'>
          <Image
            src={sub.thumbnailUrl}
            width={20}
            height={20}
            alt={sub.name}
            className='object-contain rounded-full shrink-0'
          />
          <span className='text-text1 text-sm font-medium '>{sub.name}</span>
        </li>
      ))}
    </ul>
  )
}

const menuLabelIconItems = () => [
  {
    label: 'Coins',
    icon: <Coins />,
  },
  {
    label: 'Premium',
    icon: <Premium />,
  },
  {
    label: 'Talk',
    icon: <Live />,
  },
  {
    label: 'Recent Communities',
    icon: <History />,
    child: <RecentsCommunities />,
  },
  {
    label: 'Explore',
    icon: <Discover />,
  },
  {
    label: 'Settings',
    icon: <Settings />,
  },
  {
    label: 'Advertise on Reddit',
    icon: <Campaign />,
  },
  {
    label: 'Help Center',
    icon: <Help />,
  },
  {
    label: 'More',
    icon: <Info />,
  },
  {
    label: 'Terms & Policies',
    icon: <Rules />,
  },
]

export const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const ref = useClickOutside(() => setIsMenuOpen(false))

  const { hoveredId, setHoveredId, handleKeyDown, handleMenuItemsRef } =
    useMenu({
      onOutBoundUp: () => setHoveredId(''),
      onEscape: () => setIsMenuOpen(false),
    })

  const { handleBlur } = useChildBlur()

  return (
    <div
      className='relative w-32'
      onBlur={handleBlur(() => setIsMenuOpen(false))}
      onFocus={() => setIsMenuOpen(true)}
      ref={ref}
    >
      <button
        className='h-9 w-full border rounded flex items-center justify-between gap-20 py-1 px-2'
        aria-haspopup={true}
        aria-expanded={isMenuOpen}
        aria-controls={MENU_ID}
        id={MENU_CONTROL_ID}
        onMouseDown={(e) => {
          e.preventDefault()
          setIsMenuOpen((v) => !v)
        }}
        onKeyDown={handleKeyDown}
      ></button>
      {isMenuOpen && (
        <ul
          id={MENU_ID}
          aria-labelledby={MENU_CONTROL_ID}
          role='menu'
          className='border border-gray-200 rounded-b overflow-visible bg-primary1 absolute max-h-[480px] overflow-y-auto w-52 top-10 right-0'
          tabIndex={-1}
        >
          {menuLabelIconItems().map((item, index) => (
            <li
              key={item.label}
              className={`${
                hoveredId === item.label ? 'bg-gray-50' : ''
              } flex items-center gap-2 px-4 py-3`}
              onMouseEnter={() => setHoveredId(item.label)}
              role='menuitem'
              ref={handleMenuItemsRef(item.label)}
              aria-label={item.label}
              aria-haspopup={false}
            >
              <div className='w-5 h-5 shrink-0'>{item.icon}</div>
              <span className='text-sm'>{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
