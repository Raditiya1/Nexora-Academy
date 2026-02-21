import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nexora Academy - Master modern skills with industry-focused online courses. Learn from expert mentors and build real-world projects." />
        <link rel="icon" href="/favicon.ico" />
        <title>Nexora Academy - Modern Online Learning Platform</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
