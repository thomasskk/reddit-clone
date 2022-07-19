import Head from 'next/head'
import { ReactNode } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'

type DefaultLayoutProps = { children: ReactNode; title?: string }

export function EmptyLayout(props: DefaultLayoutProps) {
  return (
    <>
      <Head>
        <title>{props.title ?? 'social'}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      {props.children}
      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </>
  )
}
