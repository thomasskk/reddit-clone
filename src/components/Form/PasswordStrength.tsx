import { Box, Progress, Text } from '@mantine/core'
import { TbCircleX } from 'react-icons/tb'
import { useRef, useState } from 'react'
import { UseFormRegister } from 'react-proxy-form'
import { Input } from './Input'

const PasswordRequirement = ({ label }: { label: string }) => (
  <Text
    color='red'
    sx={{ display: 'flex', alignItems: 'center' }}
    mt={7}
    size='sm'
  >
    <TbCircleX />
    <Box ml={10}>{label}</Box>
  </Text>
)

const requirements = [
  { re: /^(?=.{8,}$).*/, label: 'Passord must be at least 8 characters' },
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
]

const getStrength = (password: string) => {
  let multiplier = password.length > 5 ? 0 : 1

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1
    }
  })

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10)
}

export const PasswordStrength = ({
  register,
  name,
  error,
}: {
  register: UseFormRegister<any>
  name: string
  error: any
}) => {
  const [value, setValue] = useState('')
  const init = useRef(false)

  const requirement = requirements.find(
    (requirement) => !requirement.re.test(value)
  )

  const strength = getStrength(value)
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red'

  return (
    <Input
      label='password'
      register={register(name, {
        type: 'password',
        onChange: (_, v) => {
          init.current = true
          setValue(v)
        },
        required: true,
      })}
      error={error}
      animated
    >
      {init.current && (
        <>
          <Progress color={color} value={strength} size={5} />
          {requirement && <PasswordRequirement label={requirement.label} />}
        </>
      )}
    </Input>
  )
}
