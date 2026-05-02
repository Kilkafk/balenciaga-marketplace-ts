import { useState, useEffect } from 'react'
import type { Product } from './types/index.ts'
import './App.css'
import Header from './components/Header/Header.tsx'
import ProductCard from './components/ProductCard/ProductCard.tsx'
import Hero from './components/Hero/Hero.tsx'
import Features from './components/Features/Features.tsx'
import Footer from './components/Footer/Footer.tsx'

interface CartItem {
  id: number;
  quantity: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchData();
  }, []);

  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('dark');
  const [cart, setCart] = useState<CartItem[]>([]);



  async function handleAddOne(id: number) {
    const response = await fetch('http://localhost:3001/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {productId: id} )
    })
    const data = await response.json();
    setCart(data);
  }

  async function handleRemoveOne(id: number) {
    const response = await fetch('http://localhost:3001/cart/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {productId: id} )
    })
    const data = await response.json();
    setCart(data);
  }
  
  async function handleClearBasket(id: number) {
    const response = await fetch('http://localhost:3001/cart/clear', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {productId: id} )
    })
    const data = await response.json();
    setCart(data);
  }

  const filteredProducts = search ? products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())) : products;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + ((products.find((product) => product.id === item.id)?.price ?? 0) * item.quantity), 0)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  return (
    <div className="cardContainer">
      <Header
        totalItems={totalItems}
        totalPrice={totalPrice}
        search={search}
        onSearchChange={setSearch}
      />
      <Hero
        theme={theme}
        onThemeChange={setTheme}
      />
      <div className='productGrid'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, price, title, src, shadow }) => {
            const cartItem = cart.find(item => item.id === id);
            const cartQuantity = cartItem ? cartItem.quantity : 0;
            return <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              src={src}
              quantity={cartQuantity}
              onAdd={handleAddOne}
              onRemove={handleRemoveOne}
              onClear={handleClearBasket}
              shadow={shadow}
            />
          })
        ) : (
          <p className='noProductsFound'>No products found...</p>
        )}
      </div>
      <Features />
      <img className="tapeDivider" src="/tape.png" alt="" aria-hidden='true' />
      <Footer />
    </div>
  )
}


export default App
