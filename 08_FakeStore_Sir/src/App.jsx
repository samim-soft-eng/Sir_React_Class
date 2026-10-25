import React from 'react'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import ProductDetails from './components/ProductDetails'
import Product from './components/Product'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product/>} />
          <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App