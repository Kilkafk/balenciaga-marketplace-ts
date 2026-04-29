import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import styles from '../Hero/Hero.module.css'

interface HeroProps {
  theme: string;
  onThemeChange(value: string): void;
}

export default function Hero({ theme, onThemeChange }: HeroProps) {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTitles}>
        <h2 className={styles.heroBrand}>BALENCIAGA</h2>
        <h1 className={styles.heroTitle}>
          FUTURE
          <br />
          SNEAKERS
        </h1>
        <div className={styles.heroActions}>
          <button className={styles.heroButton}>SHOP NOW</button>
          <span className={styles.heroIcon} onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <MoonIcon size={32} /> : <SunIcon size={32} />}
          </span>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.heroBgText} aria-hidden="true">BALENCIAGA</div>
        <div className={styles.heroImgWrapper}>
          <img className={styles.heroImg} src="/3xl-oth.png" alt="" />
        </div>
      </div>
    </div>
  )
}