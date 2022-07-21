import Head from 'next/head'
import { ReactNode } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'

type Props = { children: ReactNode; title?: string }

export const AuthLayout = (props: Props) => (
  <>
    <Head>
      <title>{props.title ?? 'social'}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width'
      />
    </Head>

    <main className='flex gap-10 h-screen w-screen'>
      <div className='w-56 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500' />
      <div className='self-center'>{props.children}</div>
    </main>
    {process.env.NODE_ENV !== 'production' && (
      <ReactQueryDevtools initialIsOpen={false} />
    )}
  </>
)
