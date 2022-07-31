import { CaretDown, CaretUp } from '~/components/Icons'
import { ReactNode } from 'react'
import { useState } from 'react'
import { Switch } from '@mantine/core'

export interface MenuItemContent {
  label?: string
  icon?: ReactNode
  children?: ReactNode
  childrenContent?: MenuItemContent[]
  content?: ReactNode
  propsKey?: string
  className?: string
  type?: 'default' | 'presentation' | 'switch'
  switchOpts?: {
    onChange?: (value: boolean) => void
    defaultValue?: boolean
  }
}

const Caret = ({
  isUp = true,
  className = '',
}: {
  isUp?: boolean
  className?: string
}) => {
  return isUp ? (
    <CaretUp className={`ease-in ${className}`} />
  ) : (
    <CaretDown className={`ease-in ${className}`} />
  )
}

export const MenuItem = ({
  children,
  icon,
  label,
  childrenContent,
  propsKey,
  type = 'default',
  className = '',
  switchOpts = {},
}: MenuItemContent) => {
  const [displayChild, setDisplayChild] = useState(false)
  const isChild = children || childrenContent
  const isChildDisplayed = displayChild && isChild

  return (
    <>
      <li key={propsKey}>
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
            onClick={() => isChild && setDisplayChild((v) => !v)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setDisplayChild((v) => !v)
              }
            }}
          >
            <div className='flex items-center gap-3 pr-2'>
              <div className='h-5 w-5'>{icon}</div>
              <div className='text-sm font-medium'>{label}</div>
            </div>
            {type === 'switch' && (
              <Switch
                defaultChecked={switchOpts.defaultValue || false}
                onChange={(e) => switchOpts.onChange?.(e.currentTarget.checked)}
              />
            )}
            {isChild && <Caret isUp={!!isChildDisplayed} className='w-5 h-5' />}
          </div>
        )}
        {isChildDisplayed && childrenContent ? (
          <ul>
            {childrenContent?.map((content, index) => (
              <MenuItem key={index} {...content} />
            ))}
          </ul>
        ) : (
          children
        )}
      </li>
    </>
  )
}
