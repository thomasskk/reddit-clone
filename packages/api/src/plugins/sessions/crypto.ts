import { CryptographyKey, SodiumPlus } from 'sodium-plus'
import { TRPCError } from '@trpc/server'

const ENCODING = 'base64'
const CRYPTO_SPLIT_CHAR = '.'

export const verify = async (cookie: string, secret: string) => {
  const sodium = await SodiumPlus.auto()

  const split = cookie.lastIndexOf(CRYPTO_SPLIT_CHAR)

  if (split === -1) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  const output = Buffer.from(cookie.slice(split + 1), ENCODING)

  if (output.length !== sodium.CRYPTO_AUTH_BYTES) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  const input = Buffer.from(cookie.slice(0, split), ENCODING)
  const key = Buffer.from(secret, 'base64')

  const verified = await sodium.crypto_auth_verify(
    input,
    new CryptographyKey(key),
    output
  )

  if (!verified) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return input.toString()
}

export const sign = async (id: string, secret: string) => {
  const sodium = await SodiumPlus.auto()

  const input = Buffer.from(id)
  const key = Buffer.from(secret, 'base64')
  const output = await sodium.crypto_auth(input, new CryptographyKey(key))

  return (
    input.toString(ENCODING) + CRYPTO_SPLIT_CHAR + output.toString(ENCODING)
  )
}
