import { Skeleton } from '@mantine/core'
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
import { t } from '~/utils/trpc'

const MENU_ID = 'nav-user-menu'
const MENU_CONTROL_ID = 'button-nav-user-menu'

const GetRecentsCommunities = () => {
  const query = t.user.getRecentCommunities.useQuery()

  return (
    <Skeleton>
      <ul>
        {query.data?.recentCommunities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Skeleton>
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
    label: 'History',
    icon: <History />,
    child: <GetRecentsCommunities />,
  },
  {
    label: 'Discover',
    icon: <Discover />,
  },
  {
    label: 'Settings',
    icon: <Settings />,
  },
  {
    label: 'Campaign',
    icon: <Campaign />,
  },
  {
    label: 'Help',
    icon: <Help />,
  },
  {
    label: 'Info',
    icon: <Info />,
  },
  {
    label: 'Terms & Policies',
    icon: <Rules />,
  },
]

export const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [node, setNode] = useState<any>(null)
  const ref = useClickOutside(() => setIsMenuOpen(false), null, [node])

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
      ref={setNode}
      onKeyDown={handleKeyDown}
    >
      <button
        className='h-9 w-full border rounded flex items-center justify-between gap-20 py-1 px-2'
        aria-haspopup={true}
        aria-expanded={isMenuOpen}
        aria-controls={MENU_ID}
        id={MENU_CONTROL_ID}
        onMouseDown={() => setIsMenuOpen((v) => !v)}
      ></button>
      {isMenuOpen && (
        <ul
          id={MENU_ID}
          aria-labelledby={MENU_CONTROL_ID}
          role='menu'
          className='border border-gray-200 rounded-b overflow-visible bg-primary1 absolute max-h-[480px] overflow-y-auto w-full top-10'
          ref={ref}
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
