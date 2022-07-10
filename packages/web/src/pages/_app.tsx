import Navbar from '@comp/common/Navbar'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import { TRPCProvider } from 'trpc/trpc'
import '../styles/app.scss'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Social</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default TRPCProvider(MyApp)
