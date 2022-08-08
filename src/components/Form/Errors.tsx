import React, { useEffect, useRef } from 'react'

type Props = {
  error?: string[]
}

export const Error = ({ error }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    error && ref.current?.scrollIntoView()
  })

  return (
    <>
      {error && (
        <p
          role='alert'
          ref={ref}
          className='scroll-mt-40 text-xs text-red-600 font-semibold'
        >
          {error[0]}
        </p>
      )}
    </>
  )
}
