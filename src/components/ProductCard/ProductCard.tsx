import styles from '../ProductCard/ProductCard.module.css'

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  src: string;
  quantity: number;
  onAdd(id: number): void;
  onRemove(id: number): void;
  onClear(id: number): void;
  shadow_bottom: string;
  shadow_left: string;
  shadow_width: string;
  shadow_height: string;
}

export default function ProductCard({ id, title, price, src, quantity, onAdd, onRemove, onClear, shadow_bottom, shadow_left, shadow_width, shadow_height }: ProductCardProps) {
  return (
    <article className={styles.productCard}>
      <div
        className={styles.productCardImgWrapper}
        style={{
          '--shadow-bottom': shadow_bottom,
          '--shadow-left': shadow_left,
          '--shadow-width': shadow_width,
          '--shadow-height': shadow_height
        }}
      >
        <img className={styles.productCardImg} src={`/${src}`} alt={title} />
      </div>
      <div className={styles.productCardCounter}>
        <div className={styles.productCardInfo}>
          <h3 className={styles.productCardTitle}>{title} {quantity > 0 && <span>({quantity})</span>}</h3>
          <p className={styles.productCardPrice}>{price} €</p>
        </div>
        <div className={styles.productCardBtns}>
          <button className={styles.productCardBtn} onClick={() => onRemove(id)}>-</button>
          <button className={styles.productCardBtn} onClick={() => onClear(id)}>REMOVE</button>
          <button className={styles.productCardBtn} onClick={() => onAdd(id)}>+</button>
        </div>
      </div>
    </article>
  )
}