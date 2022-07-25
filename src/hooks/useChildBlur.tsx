import { useCallback } from 'react'

export const useChildBlur = () => {
  const handleBlur = useCallback(
    (cb: () => void) => (e: React.FocusEvent<HTMLElement, Element>) => {
      const currentTarget = e.currentTarget

      // Give browser time to focus the next element
      requestAnimationFrame(() => {
        if (!currentTarget.contains(document.activeElement)) {
          cb()
        }
      })
    },
    []
  )

  return { handleBlur }
}
