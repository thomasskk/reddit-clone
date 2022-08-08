import React, { ReactNode } from 'react'
import { Loader } from '@mantine/core'

export type Props = {
  isLoading?: boolean
  children?: ReactNode
  center?: boolean
  full?: boolean
  className?: string
  disabled?: boolean
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button(props: Props) {
  const { isLoading, children, center, full, className, disabled, ...rest } =
    props

  return (
    <button
      className={`button gap-2 ${center ? 'mx-auto' : ''} ${
        full ? 'w-full' : ''
      }  ${className ?? ''}`}
      type='button'
      disabled={props.disabled}
      {...rest}
    >
      {children}
      {isLoading && <Loader />}
    </button>
  )
}
