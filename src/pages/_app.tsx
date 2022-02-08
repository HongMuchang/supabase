import { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import '../../styles/globals.scss'
import { SWRConfig } from 'swr'
import 'tailwindcss/tailwind.css'

const fetcher = async (...args: any[]) => {
  const res = await fetch(...args)
  const json = await res.json()
  return json
}

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>タイトル</title>
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  )
}

export default MyApp
