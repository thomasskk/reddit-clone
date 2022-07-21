import React, { useId } from 'react'
import { useFormContext, UseFormRegisterOptions } from 'react-proxy-form'
import { Error } from './Errors'
import { Skeleton } from '@mantine/core'

type Props = {
  radios: {
    value: any
    label: string
    disabled?: boolean
  }[]
  label: string
  defaultCheckedIndex?: number
  name: string
  defaultChecked?: boolean
  onChange?: UseFormRegisterOptions<any, any>['onChange']
  transform?: UseFormRegisterOptions<any, any>['transform']
  isLoading?: boolean
}

export const Radio = (props: Props) => {
  const {
    radios,
    label,
    defaultCheckedIndex,
    defaultChecked,
    onChange,
    name,
    transform,
    isLoading = false,
  } = props

  const id = useId()

  const { register, error } = useFormContext<any>()
  const err = error(register.name)

  return (
    <Skeleton visible={isLoading}>
      <div className='flex flex-col' role='radiogroup' aria-labelledby={id}>
        <p className='p-1 font-semibold text-primary1' id={id}>
          {label}
        </p>
        <ul className='flex flex-col pl-2'>
          {radios.map((radio, index) => (
            <li key={index} className='flex items-center'>
              <input
                id={id + index}
                disabled={radio.disabled}
                {...register(name, {
                  type: 'radio',
                  transform,
                  onChange,
                  defaultChecked:
                    defaultChecked == false
                      ? undefined
                      : index === (defaultCheckedIndex ?? 0),
                  value: radio.value,
                })}
                className='radio peer'
              />
              <label
                htmlFor={id + index}
                className='px-4 py-1 text-sm text-black cursor-pointer peer-checked:text-primary1 peer-checked:font-semibold'
              >
                <p>{radio.label}</p>
              </label>
            </li>
          ))}
        </ul>
        <Error error={err} />
      </div>
    </Skeleton>
  )
}
