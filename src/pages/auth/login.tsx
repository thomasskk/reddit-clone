import { Button, LoadingOverlay } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-proxy-form'
import { resolver } from '~/common/resolver'
import { loginSchema } from '~/common/validation/auth'
import { Input } from '~/components/Form/Input'
import { useSess } from '~/hooks/useSess'
import { AuthLayout } from '~/layouts/AuthLayout'
import { t } from '~/utils/trpc'
import { NextPageWithLayout } from '../_app'

const Page: NextPageWithLayout = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const { register, error, handleSubmit } = useForm({
    validation: resolver(loginSchema),
  })

  const mutation = t.auth.login.useMutation({
    onSuccess: () => router.push('/'),
  })

  const { isAuthReady } = useSess({
    redirectOn: 'authenticated',
    redirectHref: '/',
  })

  if (!isAuthReady) {
    return null
  }

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true)
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })
    if (res?.error) {
      setIsLoading(false)
      showNotification({
        message: res.error,
        color: 'red',
        styles: () => ({
          root: {
            borderColor: 'red',
          },
        }),
      })
    } else {
      mutation.mutate()
    }
  })

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-5'>
      <div className='flex flex-col mb-5 gap-2'>
        <h2 className='font-medium text-xl'>Log in</h2>
        <p className='text-xs'>
          By continuing, you agree to our User Agreement and Privacy Policy.
        </p>
      </div>
      <div className='flex flex-col gap-3 relative'>
        <LoadingOverlay visible={isLoading} />
        <Input
          register={register('email')}
          error={error}
          label='email'
          animated
        />
        <Input
          register={register('password', { type: 'password' })}
          error={error}
          label='password'
          animated
        />
      </div>
      <Button
        type='submit'
        color='blue'
        loading={isLoading}
        className='uppercase w-72'
      >
        Log in
      </Button>
      <p className='text-xs flex gap-1'>
        New to Reddit?
        <Link href='/auth/register' passHref>
          <a className='text-blue-500 uppercase font-extrabold'> Sign Up</a>
        </Link>
      </p>
    </form>
  )
}

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default Page
