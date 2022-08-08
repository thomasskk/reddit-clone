import { useClickOutside } from '@mantine/hooks'
import { useState } from 'react'
import { CaretDown, Self } from '~/components/Icons'
import { useChildBlur } from '~/hooks/useChildBlur'
import { useSess } from '~/hooks/useSess'
import { menuContentLogIn } from './menuContentLogin'
import { menuContentLogOut } from './menuContentLogout'
import { MenuItem, MenuItemContent } from './MenuItem'

const MENU_ID = 'nav-user-menu'
const MENU_CONTROL_ID = 'button-nav-user-menu'

export const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [data, setData] = useState<MenuItemContent[]>()

  const ref = useClickOutside(() => setIsMenuOpen(false))

  const { handleBlur } = useChildBlur()

  const { isAuthReady, session } = useSess({
    onUnauth: () => setData(menuContentLogOut),
    onAuth: () => setData(menuContentLogIn),
  })

  return (
    <div
      className='relative group'
      onBlur={handleBlur(() => setIsMenuOpen(false))}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setIsMenuOpen(true)
        }

        if (e.key === 'Escape') {
          setIsMenuOpen(false)
        }
      }}
      ref={ref}
    >
      <button
        className={`border border-transparent group-hover:border-gray-100 ${
          isMenuOpen ? 'border-gray-100' : ''
        } rounded flex items-center px-1 p-1.5`}
        aria-haspopup={true}
        aria-expanded={isMenuOpen}
        aria-controls={MENU_ID}
        id={MENU_CONTROL_ID}
        onMouseDown={(e) => {
          e.preventDefault()
          setIsMenuOpen((v) => !v)
        }}
      >
        <Self className='w-5 h-5 text-text2' />
        <CaretDown className='w-5 h-5 text-text2' />
      </button>
      {isMenuOpen && isAuthReady && data && (
        <ul
          role='menu'
          aria-labelledby={MENU_CONTROL_ID}
          id={MENU_ID}
          className='border border-gray-200 rounded overflow-visible bg-primary1 absolute max-h-[480px] overflow-y-auto w-64 top-10 right-0 shrink-0 py-3'
        >
          {data.map((item) => {
            if (item.content) {
              return item.content
            }

            return <MenuItem {...item} key={item?.label} />
          })}
        </ul>
      )}
    </div>
  )
}
