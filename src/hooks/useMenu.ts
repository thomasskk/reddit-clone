import { useCallback, useEffect, useRef, useState } from 'react'

import React from 'react'

export const useMenu = (
  args: {
    onHover?: (id: string, value?: { el: HTMLElement; cb?: () => void }) => void
    onOutBoundUp?: (
      id: string,
      value?: { el: HTMLElement; cb?: () => void }
    ) => void
    onOutBoundDown?: (
      id: string,
      value?: { el: HTMLElement; cb?: () => void }
    ) => void
    onEscape?: () => void
    onEnter?: () => void
  } = {}
) => {
  const [hoveredId, setHoveredId] = useState('')
  const menuItems = useRef(
    new Map<string, { el: HTMLElement; cb: () => void }>()
  )

  useEffect(() => {
    if (hoveredId) {
      args.onHover?.(hoveredId, menuItems.current.get(hoveredId))
    }
  }, [args, hoveredId])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      switch (true) {
        case e.key === 'Escape':
          e.preventDefault()
          e.target.blur()
          args.onEscape?.()
          break
        case e.key === 'ArrowDown' || e.key === 'ArrowUp':
          e.preventDefault()
          const isKey = Array.from(menuItems.current.keys()).some(
            (key, index, arr) => {
              if (key === hoveredId) {
                if (e.key === 'ArrowUp') {
                  const prev = arr[index - 1]
                  if (!prev) {
                    args.onOutBoundUp?.(
                      hoveredId,
                      menuItems.current.get(hoveredId)
                    )
                  } else {
                    setHoveredId(prev)
                    menuItems.current.get(prev)?.cb?.()
                  }
                }
                if (e.key === 'ArrowDown') {
                  const next = arr[index + 1]
                  if (!next) {
                    args.onOutBoundDown?.(
                      hoveredId,
                      menuItems.current.get(hoveredId)
                    )
                  } else {
                    setHoveredId(next)
                    menuItems.current.get(next)?.cb?.()
                  }
                }
                return true
              }
            }
          )
          if (!isKey) {
            const key = menuItems.current.keys().next().value
            setHoveredId(key)
            menuItems.current.get(key)?.cb?.()
          }
          break
        case e.key === 'Enter' || e.key === 'Space':
          e.preventDefault()
          args.onEnter?.() || menuItems.current.get(hoveredId)?.el?.click()
          break
      }
    },
    [args, hoveredId]
  )

  return {
    hoveredId,
    setHoveredId,
    menuItems: menuItems.current,
    handleKeyDown,
  }
}
