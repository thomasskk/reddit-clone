import React, { useId } from 'react'
import { UseFormRegisterReturn } from 'react-proxy-form'
import { Error } from './Errors'

type Props = {
  error: any
  apiError?: any
  register: UseFormRegisterReturn<any, any>
  label: string
  required?: boolean
  placeholder?: string
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete']
  disabled?: boolean
  hidden?: boolean
  children?: React.ReactNode
  errors?: string[]
  animated?: boolean
}

export const Input = ({
  error,
  label,
  apiError,
  register,
  required,
  autoComplete,
  disabled,
  children,
  hidden,
  errors = [],
  animated,
  ...attr
}: Props) => {
  const err = error(register.name)
  const id = useId()

  const isError = typeof err?.[0] === 'string'

  return (
    <div
      className={`${
        hidden ? 'hidden' : 'flex flex-col gap-1 w-72 justify-center'
      } `}
    >
      <div className='flex flex-col gap-1 relative justify-center'>
        <input
          autoComplete={autoComplete}
          className={`input-form peer ${
            animated
              ? 'pb-2 pt-4 hover:bg-transparent focus:bg-transparent bg-gray-50 focus:border-gray-400 hover:border-gray-400'
              : ''
          } ${isError ? '!border-red-600' : ''}`}
          placeholder=' '
          aria-invalid={isError ? 'true' : 'false'}
          id={id}
          {...register}
          {...attr}
          disabled={disabled}
          required={required}
        />
        {animated && (
          <label
            htmlFor={id}
            className='absolute top-4 left-3 transition-all peer-placeholder-shown:translate-y-0 peer-hover:-translate-y-3.5 peer-hover:text-xxxs peer-focus:-translate-y-3.5 peer-focus:text-xxxs -translate-y-3.5 text-xxxs uppercase peer-placeholder-shown:text-xxs text-gray-400 font-bold'
          >
            {label} {required && <span className='text-red-600'> * </span>}
          </label>
        )}
      </div>
      <div className='flex flex-col'>
        {!animated && (
          <label
            htmlFor={id}
            className='peer text-sm text-black first-letter:uppercase'
          >
            {label} {required && <span className='text-red-600'> * </span>}
          </label>
        )}
        <Error error={err} />
        {errors.map((err, index) => (
          <p role='alert' className='text-sm text-red-600' key={index}>
            {err}
          </p>
        ))}
      </div>

      {children}
    </div>
  )
}
