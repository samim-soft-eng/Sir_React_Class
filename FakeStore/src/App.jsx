import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Product from './component/Product'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductInfo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App