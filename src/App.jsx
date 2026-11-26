
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Manage dark mode
  const [darkMode, setDarkMode] = useState(false)

  // Manage shopping cart
  const [cart, setCart] = useState([])

  // Manage selected category
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Add products to cart
  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product])
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>

      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Category Filter */}
      <label>Filter by Category: </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      {/* Product List */}
      <ProductList
        category={selectedCategory}
        onAddToCart={addToCart}
      />

      {/* Shopping Cart */}
      <Cart cart={cart} setCart={setCart} />

    </div>
  )
}

export default App
