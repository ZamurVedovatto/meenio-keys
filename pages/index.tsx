import Head from 'next/head'
import Image from 'next/image'
import { HomeWrapper } from 'styles/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meenio | Home</title>
        <meta name="keywords" content="Meenio"></meta>
      </Head>
      <HomeWrapper>
        home
      </HomeWrapper>
    </>
  )
}
