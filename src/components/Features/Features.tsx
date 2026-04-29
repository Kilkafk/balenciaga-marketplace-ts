import styles from '../Features/Features.module.css'
import { GlobeIcon, MedalIcon, LockSimpleIcon } from '@phosphor-icons/react';

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <span className={styles.featureIconWrapper}>
          <GlobeIcon />
        </span>
        <div className={styles.featureInfo}>
          <h4 className={styles.featureTitle}>WORLDWIDE DELIVERY</h4>
          <p className={styles.featureDesc}>Fast and secure delivery <br /> to any place in the world.</p>
        </div>
      </div>
      <div className={styles.feature}>
        <span className={styles.featureIconWrapper}>
          <MedalIcon />
        </span>
        <div className={styles.featureInfo}>
          <h4 className={styles.featureTitle}>AUTHENTIC PRODUCTS</h4>
          <p className={styles.featureDesc}>All products are 100% <br /> authentic and verified.</p>
        </div>
      </div>
      <div className={styles.feature}>
        <span className={styles.featureIconWrapper}>
          <LockSimpleIcon />
        </span>
        <div className={styles.featureInfo}>
          <h4 className={styles.featureTitle}>SECURE PAYMENT</h4>
          <p className={styles.featureDesc}>Your payment information <br /> is always protected.</p>
        </div>
      </div>
    </section>
  )
}