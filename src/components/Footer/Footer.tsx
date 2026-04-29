import styles from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerColumn}>
          <h4>CUSTOMER CARE</h4>
          <ul>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Shipping & Delivery</a></li>
            <li><a href="">Returns & Exchanges</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>ABOUT US</h4>
          <ul>
            <li><a href="">Our Story</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Sustainability</a></li>
            <li><a href="">Press</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>LEGAL</h4>
          <ul>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Cookie Policy</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>FOLLOW US</h4>
          <ul>
            <li><a href="">Instagram</a></li>
            <li><a href="">TikTok</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">YouTube</a></li>
          </ul>
        </div>
      </div>
      <p>© 2024 Balenciaga. All rights reserved.</p>
    </footer>
  )
}