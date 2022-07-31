import { useClickOutside } from '@mantine/hooks'
import { useState } from 'react'
import { useChildBlur } from '~/hooks/useChildBlur'
import { useSess } from '~/hooks/useSess'
import { menuContentLogIn, menuContentLogOut } from './contentData'
import { MenuItem, MenuItemContent } from './MenuItem'

const MENU_ID = 'nav-user-menu'
const MENU_CONTROL_ID = 'button-nav-user-menu'

export const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [data, setData] = useState<MenuItemContent[]>()

  const ref = useClickOutside(() => setIsMenuOpen(false))

  const { handleBlur } = useChildBlur()

  const { isAuthReady } = useSess({
    onUnauth: () => setData(menuContentLogOut),
    onAuth: () => setData(menuContentLogIn),
  })

  return (
    <div
      className='relative w-32'
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
        className='h-9 w-full border rounded flex items-center justify-between gap-20 py-1 px-2'
        aria-haspopup={true}
        aria-expanded={isMenuOpen}
        aria-controls={MENU_ID}
        id={MENU_CONTROL_ID}
        onMouseDown={(e) => {
          e.preventDefault()
          setIsMenuOpen((v) => !v)
        }}
      ></button>
      {isMenuOpen && isAuthReady && data && (
        <ul
          role='menu'
          aria-labelledby={MENU_CONTROL_ID}
          id={MENU_ID}
          className='border border-gray-200 rounde overflow-visible bg-primary1 absolute max-h-[480px] overflow-y-auto w-64 top-10 right-0 shrink-0 py-3'
        >
          {data.map((item, index) => {
            if (item.content) {
              return item.content
            }

            return <MenuItem {...item} key={item?.label || '' + index} />
          })}
        </ul>
      )}
    </div>
  )
}
