import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to NextJS App 09</h1>
      <p className={styles.description}>Running on Next.js with App Router</p>
      <div className={styles.grid}>
        <Link href="/about" className={styles.card}>
          <h2>About &rarr;</h2>
        </Link>
      </div>
    </main>
  )
}
