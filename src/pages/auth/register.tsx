import { Button } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import * as z from 'myzod'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-proxy-form'
import { resolver } from '~/common/resolver'
import { registerSchema } from '~/common/validation/auth'
import Input from '~/components/Form/Input'
import { PasswordStrength } from '~/components/Form/PasswordStrength'
import { EmptyLayout } from '~/layouts/EmptyLayout'
import { t } from '~/utils/trpc'

export default function Index() {
  const router = useRouter()

  const registerMut = t.auth.register.useMutation({
    onSuccess: () => {
      showNotification({
        message:
          'Successfully registered, please check your email to verify your account',
      })
      router.push('/auth/login')
    },
    onError: (error) => {
      showNotification({
        message: error.message,
        color: 'red',
        styles: () => ({
          root: {
            borderColor: 'red',
          },
        }),
      })
    },
  })

  const checkUserFieldMut = t.auth.checkUserField.useMutation()

  const { register, error, handleSubmit } = useForm({
    validation: resolver(
      z.object({ user: registerSchema, confirmPass: z.string() })
    ),
  })

  const onSubmit = handleSubmit((data) => registerMut.mutate(data.user))

  return (
    <EmptyLayout title='register'>
      <main className='flex gap-10 h-screen w-screen'>
        <div className='w-56 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500' />
        <div className='self-center'>
          <form onSubmit={onSubmit} className='flex flex-col gap-10'>
            <h2 className='font-bold text-xl'>Register</h2>
            <div className='flex flex-col gap-3'>
              <Input
                register={register('user.email', {
                  validation: async (v) => {
                    try {
                      const res = await checkUserFieldMut.mutateAsync({
                        key: 'email',
                        value: v,
                      })
                      return !res.exist
                    } catch (e) {
                      return false
                    }
                  },
                  message: 'Email already exists',
                  validateOn: 'blur',
                  revalidateOn: 'blur',
                })}
                error={error}
                label='email'
              />
              <PasswordStrength
                register={register}
                name='user.password'
                error={error}
              />
              <Input
                register={register('confirmPass', {
                  validation: (v, { user }) => v === user.password,
                  message: 'Passwords do not match',
                })}
                error={error}
                label='confirm password'
              />
              <Input
                register={register('user.username', {
                  validation: async (v) => {
                    try {
                      const res = await checkUserFieldMut.mutateAsync({
                        key: 'username',
                        value: v,
                      })
                      return !res.exist
                    } catch (e) {
                      return false
                    }
                  },
                  message: 'Username already exists',
                  validateOn: 'blur',
                  revalidateOn: 'blur',
                })}
                error={error}
                label='username'
              />
            </div>
            <Button type='submit'>Register</Button>
            <p className='text-xs flex gap-1'>
              Already an account ?
              <Link href='/auth/login' passHref>
                <a className='text-blue-500'> Login</a>
              </Link>
            </p>
          </form>
        </div>
      </main>
    </EmptyLayout>
  )
}
