import React, { useEffect, useRef } from 'react'

type Props = {
  error?: string[]
}

export const Error = (props: Props) => {
  const { error } = props
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    error && ref.current?.scrollIntoView()
  })

  return (
    <>
      {error && (
        <p role='alert' ref={ref} className='scroll-mt-40 text-sm text-red-600'>
          {error[0]}
        </p>
      )}
    </>
  )
}
