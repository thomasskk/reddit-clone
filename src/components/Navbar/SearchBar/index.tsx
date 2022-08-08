import { useClickOutside, useLocalStorage } from '@mantine/hooks'
import { useRef, useState } from 'react'
import { Search } from '~/components/Icons'
import { useChildBlur } from '~/hooks/useChildBlur'
import { useMenu } from '~/hooks/useMenu'
import { t } from '~/utils/trpc'
import { SearchMenu } from './SearchMenu'
import { TrendMenu } from './TrendMenu'

const MENU_ID = 'nav-search-menu'
const MENU_CONTROL_ID = 'button-nav-search-menu'

export const SearchBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isSearchMenu, setIsSearchMenu] = useState(false)
  const [searchHistory, setSearchHistory] = useLocalStorage<string[]>({
    key: 'recent_search',
    defaultValue: [],
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const ref = useClickOutside(() => setIsMenuOpen(false))

  const mutation = t.search.global.useMutation({
    onSuccess: () => {
      menuItems.clear()
      setHoveredId('')
      setIsSearchMenu(true)
    },
  })

  const {
    hoveredId,
    setHoveredId,
    menuItems,
    handleKeyDown,
    handleMenuItemsRef,
  } = useMenu({
    onOutBoundUp: () => {
      setHoveredId('')
      setInputValue('')
    },
    onEscape: () => setIsMenuOpen(false),
    onEnter: () => {
      if (inputValue) {
        setSearchHistory((arr) => {
          const newArr = Array.from(new Set([...arr, inputValue]))
          newArr.length > 5 && newArr.shift()
          return newArr
        })
        menuItems.clear()
      }
    },
  })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (!e.target.value) {
      setIsSearchMenu(false)
      menuItems.clear()
    } else {
      mutation.mutate({ term: e.target.value, take: 5 })
    }
  }

  const { handleBlur } = useChildBlur()

  return (
    <form
      aria-label='Search Social'
      id='search'
      role='search'
      autoComplete='off'
      className='relative w-full max-w-xl'
      onFocus={() => setIsMenuOpen(true)}
      onBlur={handleBlur(() => setIsMenuOpen(false))}
      ref={ref}
    >
      <div
        className='relative group flex gap-2 h-9 items-center px-2 py-2 rounded border hover:border-blue-500 focus-within:border-blue-500 bg-primary2 hover:bg-primary1 focus-within:bg-primary1'
        onMouseDown={(e) => {
          e.preventDefault()
          setIsMenuOpen(true)
          inputRef.current?.focus()
        }}
        onKeyDown={handleKeyDown}
      >
        <div
          aria-haspopup={isMenuOpen}
          aria-expanded={isMenuOpen}
          aria-controls={isMenuOpen ? MENU_CONTROL_ID : undefined}
          id={MENU_CONTROL_ID}
          className='cursor-default'
        >
          <Search className='text-text2 w-5 h-5' onClick={() => {}} />
        </div>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={onInputChange}
          type='search'
          id='search-input'
          name='search'
          spellCheck={false}
          className='outline-none text-sm bg-primary2 focus:bg-primary1 group-hover:bg-primary1 w-full'
          placeholder='Search Social'
          autoFocus
          onReset={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setInputValue('')
          }}
        />
      </div>
      {isMenuOpen && (
        <ul
          id={MENU_ID}
          aria-labelledby={MENU_CONTROL_ID}
          role='menu'
          className='flex flex-col border border-gray-200 rounded-b overflow-visible bg-primary1 absolute max-h-[480px] overflow-y-auto w-full top-10'
          tabIndex={-1}
        >
          {isSearchMenu ? (
            <SearchMenu
              hoveredId={hoveredId}
              setInputValue={setInputValue}
              searchData={mutation.data}
              handleRef={handleMenuItemsRef}
            />
          ) : (
            <TrendMenu
              handleRef={handleMenuItemsRef}
              searchHistory={searchHistory}
              hoveredId={hoveredId}
              menuItems={menuItems}
              setInputValue={setInputValue}
              setSearchHistory={setSearchHistory}
            />
          )}
        </ul>
      )}
    </form>
  )
}
