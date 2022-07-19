import { Button } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-proxy-form'
import { resolver } from '~/common/resolver'
import { loginSchema } from '~/common/validation/auth'
import Input from '~/components/Form/Input'
import { useSess } from '~/hooks/session'
import { EmptyLayout } from '~/layouts/EmptyLayout'
import { t } from '~/utils/trpc'

export default function Index() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const { register, error, handleSubmit } = useForm({
    validation: resolver(loginSchema),
  })

  const mutation = t.auth.login.useMutation({
    onSuccess: () => router.push('/'),
  })

  const { isReady } = useSess({ redirectOn: 'authenticated' })

  if (!isReady) {
    return null
  }

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true)
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })
    setIsLoading(false)
    if (res?.error) {
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
    <EmptyLayout title='register'>
      <main className='flex gap-10 h-screen w-screen'>
        <div className='w-56 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500' />
        <div className='self-center'>
          <form onSubmit={onSubmit} className='flex flex-col gap-10'>
            <h2 className='font-bold text-xl'>Log in</h2>
            <div className='flex flex-col gap-3'>
              <Input register={register('email')} error={error} label='email' />
              <Input
                register={register('password')}
                error={error}
                label='password'
              />
            </div>
            <Button type='submit' color='blue' loading={isLoading}>
              Submit
            </Button>
            <p className='text-xs flex gap-1'>
              No account ?
              <Link href='/auth/register' passHref>
                <a className='text-blue-500'> Register</a>
              </Link>
            </p>
          </form>
        </div>
      </main>
    </EmptyLayout>
  )
}
