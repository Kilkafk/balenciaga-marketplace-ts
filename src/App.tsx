import { Analytics } from '@vercel/analytics/react'
import { useState, useEffect } from 'react'
import type { Product, CartItem } from './types/index.ts'
import './App.css'
import Header from './components/Header/Header.tsx'
import ProductCard from './components/ProductCard/ProductCard.tsx'
import Hero from './components/Hero/Hero.tsx'
import Features from './components/Features/Features.tsx'
import Footer from './components/Footer/Footer.tsx'
import SkeletonGrid from './components/SkeletonGrid/SkeletonGrid.tsx'

const API_URL = 'https://balenciaga-api.onrender.com';

function App() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      setProducts(data)
      setLoading(false);
    }
    fetchData();
  }, []);

  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/cart`);
      const data = await response.json();
      setCart(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);



  async function handleAddOne(id: number) {
    const response = await fetch(`${API_URL}/cart/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: id })
    })
    const data = await response.json();
    setCart(data);
  }

  async function handleRemoveOne(id: number) {
    const response = await fetch(`${API_URL}/cart/remove`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: id })
    })
    const data = await response.json();
    setCart(data);
  }

  async function handleClearBasket(id: number) {
    const response = await fetch(`${API_URL}/cart/clear`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: id })
    })
    const data = await response.json();
    setCart(data);
  }

  const filteredProducts = search ? products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())) : products;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + ((products.find((product) => product.id === item.product_id)?.price ?? 0) * item.quantity), 0)

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
      {loading ? <SkeletonGrid /> : (
      <div className='productGrid'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, price, title, src, shadow_bottom, shadow_left, shadow_width, shadow_height }) => {
            const cartItem = cart.find(item => item.product_id === id);
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
              shadow_bottom={shadow_bottom}
              shadow_left={shadow_left}
              shadow_width={shadow_width}
              shadow_height={shadow_height}
            />
          })
        ) : (
          <p className='noProductsFound'>No products found...</p>
        )}
      </div>
      )}
      <Features />
      <img className="tapeDivider" src="/tape.png" alt="" aria-hidden='true' />
      <Footer />
      <Analytics />
    </div>
  )
}


export default App
