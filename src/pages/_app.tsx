import '@/styles/globals.css'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { Oswald } from 'next/font/google'

const oswald = Oswald({
  weight: ['200', '400', '500'],
  subsets: ['latin'],
  variable: '--font-oswald',
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div className={`${oswald.variable} font-sans`}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  )
}
