import * as z from 'myzod'

export const isEmail = () =>
  z
    .string()
    .max(320, 'Email is too long')
    .pattern(/^[^@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/, 'Invalid email format')
