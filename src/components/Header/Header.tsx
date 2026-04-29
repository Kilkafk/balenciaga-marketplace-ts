import { MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import styles from '../Header/Header.module.css'

interface HeaderProps {
  totalItems: number;
  totalPrice: number;
  search: string;
  onSearchChange(value: string): void;
}

export default function Header({ totalItems, totalPrice, search, onSearchChange }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BALENCIAGA</div>
      <nav className={styles.nav}>
        <li className={styles.dropdownWrapper}>CATEGORIES
          <ul className={styles.dropdownList}>
            <li>MEN</li>
            <li>WOMEN</li>
          </ul>
        </li>
      </nav>
      <div className={styles.logoCartInfo}>
          {isSearchOpen && (
            <input className={styles.logoInputSearch} type="text" placeholder='SEARCH' value={search} onChange={(e) => onSearchChange(e.target.value)}/>
          )} 
          <span className={styles.logoIcon}>
            {isSearchOpen ? (
              <XIcon onClick={() => {
                setIsSearchOpen(false);
                onSearchChange('');
              }} />
            ): (
            <MagnifyingGlassIcon onClick={() => setIsSearchOpen(true)} />
          )}
          </span>
        <div className={styles.logoItems}>
          <div className={styles.logoItemsTotal}>CART ({totalItems})</div>
          <div className={styles.logoItemsPrice}>{totalPrice} €</div>
        </div>
      </div>
    </header >
  )
}