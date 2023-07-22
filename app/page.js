import Image from 'next/image'
import styles from './page.module.css'
import Signup from './components/signup'

export default function Home() {
  return (
    <main className={styles.grid}>
      <div className={styles.logoBox}>
        <span className={styles.logo}>SOSO <br/>house</span>
      </div>
      <div className={styles.contents}>
        <h1 className={styles.headline}>Charleston's premier antisocial club</h1>
        <p className={styles.paragraph}>SoSo House is for the creatives<span className={styles.note}>1</span>, the thinkers<span className={styles.note}>2</span>, the strivers<span className={styles.note}>3</span>, the people who think spending $2,652 a year to join a club full of other people who spent $2,652 is insane.</p>
        <p className={styles.paragraph}>Membership is very limited and highly selective. If you think you have what it takes, feel free to give us your email.</p>
        <Signup/>
        <div className={styles.footnotes}>
          <p classname={styles.footnote}>1: Creatively excusing yourself from social obligations.</p>
          <p classname={styles.footnote}>2: Thinking of ways to avoid future social obligations.</p>
          <p classname={styles.footnote}>3: Striving to spend as much time in your own home as possible.</p>
        </div>
      </div>



        {/* <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}

      
    </main>
  )
}
