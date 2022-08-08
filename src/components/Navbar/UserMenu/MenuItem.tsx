import { Switch } from '@mantine/core'
import Link from 'next/link'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { Caret } from '../Caret'

export interface MenuItemContent {
  label?: string
  icon?: ReactNode
  children?: ReactNode
  childrenContent?: MenuItemContent[]
  content?: ReactNode
  keyProps?: string
  className?: string
  type?: 'default' | 'presentation' | 'switch' | 'link'
  linkOpts?: {
    href?: string
  }
  switchOpts?: {
    onChange?: (value: boolean) => void
    defaultValue?: boolean
  }
  onClick?: () => void
}

export const MenuItem = ({
  children,
  icon,
  label,
  childrenContent,
  type = 'default',
  className = '',
  switchOpts = {},
  linkOpts,
  onClick,
}: MenuItemContent) => {
  const [displayChild, setDisplayChild] = useState(false)
  const isChild = children || childrenContent
  const isChildDisplayed = displayChild && isChild
  const [isSwitchChecked, setIsSwitchChecked] = useState(false)
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      switchOpts?.onChange?.(isSwitchChecked)
    } else {
      isMounted.current = true
    }
  }, [isSwitchChecked, switchOpts])

  const handleMouseDown = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    if (isChild) {
      setDisplayChild((v) => !v)
    }

    if (type === 'switch') {
      setIsSwitchChecked((v) => !v)
    }

    onClick?.()
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      setDisplayChild((v) => !v)
    }
  }

  return (
    <li>
      {type === 'presentation' ? (
        <div
          role='presentation'
          className={`flex items-center justify-between gap-5 px-5 py-2 ${className}`}
        >
          <div className='flex items-center gap-3 pr-2 text-text2'>
            <div className='h-5 w-5'>{icon}</div>
            <div className='text-sm font-medium'>{label}</div>
          </div>
        </div>
      ) : (
        <div
          role='menuitem'
          className={`focus:bg-gray-100 hover:bg-gray-50 flex items-center justify-between gap-5 px-5 py-3 cursor-pointer shrink-0 ${className}`}
          onMouseDown={handleMouseDown}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {type === 'link' ? (
            <Link href={linkOpts!.href!} passHref>
              <a className='flex items-center gap-3 pr-2'>
                <div className='h-5 w-5'>{icon}</div>
                <div className='text-sm font-medium'>{label}</div>
              </a>
            </Link>
          ) : (
            <div className='flex items-center gap-3 pr-2'>
              <div className='h-5 w-5'>{icon}</div>
              <div className='text-sm font-medium'>{label}</div>
            </div>
          )}
          {type === 'switch' && <Switch checked={isSwitchChecked} readOnly />}
          {isChild && <Caret isUp={!!isChildDisplayed} className='w-5 h-5' />}
        </div>
      )}
      {isChildDisplayed && childrenContent ? (
        <ul>
          {childrenContent?.map((content, index) => (
            <MenuItem key={content.keyProps || index} {...content} />
          ))}
        </ul>
      ) : (
        children
      )}
    </li>
  )
}
