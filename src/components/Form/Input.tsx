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
}

export default function Input(props: Props) {
  const {
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
    ...attr
  } = props

  const err = error(register.name)
  const id = useId()

  return (
    <div className={`${hidden ? 'hidden' : 'flex flex-col gap-1 w-72'}`}>
      <div className='flex flex-col'>
        <label
          htmlFor={id}
          className='peer text-sm text-black first-letter:uppercase'
        >
          {label} {required && <span className='text-red-600'> * </span>}
        </label>
        <Error error={err} />
        {errors.map((err, index) => (
          <p role='alert' className='text-sm text-red-600' key={index}>
            {err}
          </p>
        ))}
      </div>
      <input
        autoComplete={autoComplete}
        className='peer-focus:text-blue-600 rounded flex p-2 text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600'
        placeholder=' '
        aria-invalid={err?.[0] ? 'true' : 'false'}
        id={id}
        {...register}
        {...attr}
        disabled={disabled}
        required={required}
      />
      {children}
    </div>
  )
}
