import * as z from 'myzod'
import { isEmail } from './helper'

export const loginSchema = z.object({
  email: isEmail(),
  password: z.string().min(8, 'pass').max(128, 'Password is too long'),
})

export const registerSchema = loginSchema.and(
  z.object({
    username: z.string(),
  })
)

export type ILogin = z.Infer<typeof loginSchema>
export type ISignUp = z.Infer<typeof registerSchema>
