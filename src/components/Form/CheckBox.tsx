import React, { ReactNode, useId } from 'react'
import { useFormContext, UseFormRegisterOptions } from 'react-proxy-form'
import { Error } from './Errors'

type Props = {
  checkboxes: { value: string; label: string | ReactNode; checked?: boolean }[]
  required?: boolean
  label?: ReactNode
  name: string
  onChange?: (event: any) => void
  transform?: UseFormRegisterOptions<any, any>['transform']
  validation?: UseFormRegisterOptions<any, any>['validation']
  message?: UseFormRegisterOptions<any, any>['message']
}

export const CheckBox = ({
  checkboxes,
  required,
  label,
  name,
  onChange,
  transform,
  validation,
  message,
}: Props) => {
  const id = useId()

  const { register, error } = useFormContext<any>()
  const err = error(name)

  return (
    <fieldset className='flex flex-col'>
      {label && (
        <legend className='p-1 font-semibold text-primary1'>{label}</legend>
      )}
      <ul className='flex flex-col pl-2'>
        {checkboxes.map(({ label, value, checked = false }, index) => (
          <li key={index} className='flex items-center'>
            <input
              id={id + index}
              {...register(name, {
                type: 'checkbox',
                transform,
                onChange,
                defaultChecked: checked,
                validation,
                message,
                value,
              })}
              className='checkbox peer'
              required={required}
            />
            <label
              htmlFor={id + index}
              className='px-4 py-1 text-sm text-black cursor-pointer peer-checked:text-primary1 peer-checked:font-semibold'
            >
              <div>{label}</div>
            </label>
          </li>
        ))}
      </ul>
      <Error error={err} />
    </fieldset>
  )
}
