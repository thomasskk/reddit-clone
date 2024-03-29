import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import { trpc } from '~/utils/trpc'
import '../styles/globals.css'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import { MantineProvider, createEmotionCache } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { Provider as JotaiProvider } from 'jotai'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const myCache = createEmotionCache({ key: 'mantine', prepend: false })

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return (
    <SessionProvider session={session}>
      <JotaiProvider>
        <MantineProvider
          emotionCache={myCache}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider position='top-center' className='mt-24'>
            {getLayout(<Component {...pageProps} />)}
          </NotificationsProvider>
        </MantineProvider>
      </JotaiProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
