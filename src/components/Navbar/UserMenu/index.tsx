import { useClickOutside } from '@mantine/hooks'
import { useRef, useState } from 'react'
import { useChildBlur } from '~/hooks/useChildBlur'
import { useMenu } from '~/hooks/useMenu'

export const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const ref = useClickOutside(() => setIsMenuOpen(false))

  const { hoveredId, setHoveredId, menuItems, handleKeyDown } = useMenu({
    onOutBoundUp: () => {
      setHoveredId('')
    },
    onEscape: () => setIsMenuOpen(false),
  })

  const { handleBlur } = useChildBlur()

  return (
    <div
      className='relative w-32'
      ref={ref}
      onBlur={handleBlur(() => setIsMenuOpen(false))}
      onFocus={() => setIsMenuOpen(true)}
    >
      <button
        className={`h-9 w-full border rounded flex items-center justify-between gap-20 py-1 px-2`}
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-haspopup={true}
        aria-expanded={isMenuOpen}
        aria-controls={'navusermenu'}
        id=''
      ></button>
      {isMenuOpen && (
        <ul
          id=''
          aria-labelledby='navsearchmenu'
          role='menu'
          className={`border border-gray-200 rounded-b overflow-visible bg-primary1 absolute max-h-[480px] overflow-y-auto w-full top-10`}
        ></ul>
      )}
    </div>
  )
}
