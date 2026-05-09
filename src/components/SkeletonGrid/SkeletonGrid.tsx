import styles from '../SkeletonGrid/SkeletonGrid.module.css';

export default function SkeletonGrid() {
  return (
    <div className={styles.skeletonGrid}>
      <article className={styles.skeletonCard}></article>
      <article className={styles.skeletonCard}></article>
      <article className={styles.skeletonCard}></article>
    </div>
  )
}