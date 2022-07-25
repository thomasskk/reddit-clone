import { useClickOutside, useLocalStorage } from '@mantine/hooks'
import { useEffect, useRef, useState } from 'react'
import { Search } from '~/components/Icons'
import { useChildBlur } from '~/hooks/useChildBlur'
import { useMenu } from '~/hooks/useMenu'
import { t } from '~/utils/trpc'
import { SearchMenu } from './SearchMenu'
import { TrendMenu } from './TrendMenu'

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

  const { hoveredId, setHoveredId, menuItems, handleKeyDown } = useMenu({
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

  useEffect(() => {
    if (isMenuOpen) {
      inputRef.current?.focus()
    }
  }, [isMenuOpen, isSearchMenu])

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
      ref={ref}
      autoComplete='off'
      className='relative w-full'
      onKeyDown={handleKeyDown}
      onFocus={() => setIsMenuOpen(true)}
      onBlur={handleBlur(() => setIsMenuOpen(false))}
    >
      <div
        className='relative group flex gap-2 h-9 items-center px-2 py-2 rounded border hover:border-blue-500 focus-within:border-blue-500 bg-primary2 hover:bg-primary1 focus-within:bg-primary1'
        onClick={() => setIsMenuOpen(true)}
      >
        <div
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-haspopup={isMenuOpen}
          aria-expanded={isMenuOpen}
          aria-controls={isMenuOpen ? 'navsearchmenu' : undefined}
          id='searchmenubutton'
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
        <>
          {isSearchMenu ? (
            <SearchMenu
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              menuItems={menuItems}
              setInputValue={setInputValue}
              searchData={mutation.data}
            />
          ) : (
            <TrendMenu
              searchHistory={searchHistory}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              menuItems={menuItems}
              setInputValue={setInputValue}
              setSearchHistory={setSearchHistory}
            />
          )}
        </>
      )}
    </form>
  )
}
