import styles from '../ProductCard/ProductCard.module.css'
import type { ShadowProps } from '../../types';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  src: string;
  quantity: number;
  onAdd(id: number): void;
  onClear(id: number): void;
  shadow: ShadowProps;
}

export default function ProductCard({ id, title, price, src, quantity, onAdd, onClear, shadow }: ProductCardProps) {
  return (
    <article className={styles.productCard}>
      <div
        className={styles.productCardImgWrapper}
        style={{
          '--shadow-bottom': shadow.bottom,
          '--shadow-left': shadow.left,
          '--shadow-width': shadow.width,
          '--shadow-height': shadow.height
        }}
      >
        <img className={styles.productCardImg} src={`/${src}`} alt={title} />
      </div>
      <div className={styles.productCardCounter}>
        <div className={styles.productCardInfo}>
          <h3 className={styles.productCardTitle}>{title}</h3>
          <p className={styles.productCardPrice}>{price} €</p>
        </div>
        <div className={styles.productCardBtns}>
          <button className={styles.productCardBtn} onClick={() => onAdd(id)}>ADD TO CART ({quantity})</button>
          <button className={styles.productCardBtnClear} onClick={() => onClear(id)}>REMOVE</button>
        </div>
      </div>
    </article>
  )
}