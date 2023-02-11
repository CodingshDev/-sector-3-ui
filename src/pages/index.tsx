import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('Home')
  return (
    <>
      <Head>
        <title>Sector#3</title>
        <meta name="description" content="Do DAOs Dream of Electric Sheep? ⚡️🐑" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Do DAOs Dream of&nbsp;
            <code className={styles.code}>Electric Sheep? ⚡️🐑</code>
          </p>
          <div>
            <a
              href="https://www.tally.xyz/gov/sector-3-goerli-63"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className="text-gray-400">🗳️ Tally</code>
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <span className="text-5xl font-bold">Sector</span>
          <div className={styles.thirteen}>
            <span className="text-5xl font-bold">#3</span>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="/daos"
            className={styles.card}
          >
            <h2 className="text-2xl">
              Explore DAOs ⚡️
            </h2>
            <p className={inter.className}>
              Contribute to a DAO and get rewarded, with <i>complete transparency</i>.
            </p>
          </a>

          <a
            href="/new-dao"
            className={styles.card}
          >
            <h2 className="text-2xl">
              Deploy a DAO 🚀
            </h2>
            <p className={inter.className}>
              Reward DAO contributors <i>autonomously</i> with Sector#3.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
