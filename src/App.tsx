import { useState, useEffect } from 'react'
import type { Product } from './types/index.ts'
import './App.css'
import Header from './components/Header/Header.tsx'
import ProductCard from './components/ProductCard/ProductCard.tsx'
import Hero from './components/Hero/Hero.tsx'
import Features from './components/Features/Features.tsx'
import Footer from './components/Footer/Footer.tsx'


function App() {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem("cart");
    if (savedProducts) {
      try {
        const initialValue = JSON.parse(savedProducts);
        return Array.isArray(initialValue) ? initialValue : [
          { id: 1, title: "3XL", price: 1090, src: "3xl.png", quantity: 0, shadow: { bottom: "-5px", left: "-2%", width: "103%", height: "13px" } },
          { id: 2, title: "TRACK", price: 925, src: "track.png", quantity: 0, shadow: { bottom: "-2px", left: "9%", width: "83%", height: "12px" } },
          { id: 3, title: "RUNNER", price: 975, src: "runner.png", quantity: 0, shadow: { bottom: "-4px", left: "1%", width: "97%", height: "14px" } }
        ];
      } catch {
        return [{ id: 1, title: "3XL", price: 1090, src: "3xl.png", quantity: 0, shadow: { bottom: "-5px", left: "-2%", width: "103%", height: "13px" } },
        { id: 2, title: "TRACK", price: 925, src: "track.png", quantity: 0, shadow: { bottom: "-2px", left: "9%", width: "83%", height: "12px" } },
        { id: 3, title: "RUNNER", price: 975, src: "runner.png", quantity: 0, shadow: { bottom: "-4px", left: "1%", width: "97%", height: "14px" } }];
      }
    }
    return [{ id: 1, title: "3XL", price: 1090, src: "3xl.png", quantity: 0, shadow: { bottom: "-5px", left: "-2%", width: "103%", height: "13px" } },
    { id: 2, title: "TRACK", price: 925, src: "track.png", quantity: 0, shadow: { bottom: "-2px", left: "9%", width: "83%", height: "12px" } },
    { id: 3, title: "RUNNER", price: 975, src: "runner.png", quantity: 0, shadow: { bottom: "-4px", left: "1%", width: "97%", height: "14px" } }]
  });

  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);


  function handleAddToBasket(id: number) {
    const newProducts = products.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 }
      } else {
        return product
      }
    });
    setProducts(newProducts);
  }

  function handleClearBasket(id: number) {
    const newClearProducts = products.map(product => {
      if (product.id === id) {
        return { ...product, quantity: 0 }
      } else {
        return product
      }
    })
    setProducts(newClearProducts)
  }

  const filteredProducts = search ? products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())) : products;

  const totalItems = products.reduce((accumulator, product) => accumulator + product.quantity, 0)
  const totalPrice = products.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

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
          filteredProducts.map(({ id, price, title, src, quantity, shadow }) => {
            return <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              src={src}
              quantity={quantity}
              onAdd={handleAddToBasket}
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
