import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head'
import Brands from '../Components/Brands';
import Header from '../Components/Header'
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';

export default function Home() {
  const [session] = useSession();
  return (
    <>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {!session ? (
        <Hero />
      ) : (
        <main>
          <Slider />
          <Brands />
        </main>
      )
      }

    </>
  )
}


export async function getServerSideProps(context) {

  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}
