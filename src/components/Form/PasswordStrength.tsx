import { Box, Progress, Text } from '@mantine/core'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useRef, useState } from 'react'
import { UseFormRegister } from 'react-proxy-form'
import { Input } from './Input'

const PasswordRequirement = (props: { label: string }) => (
  <Text
    color='red'
    sx={{ display: 'flex', alignItems: 'center' }}
    mt={7}
    size='sm'
  >
    <Cross1Icon />
    <Box ml={10}>{props.label}</Box>
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

export const PasswordStrength = (props: {
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
      required
      label='password'
      register={props.register(props.name, {
        type: 'password',
        onChange: (_, v) => {
          init.current = true
          setValue(v)
        },
      })}
      error={props.error}
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
