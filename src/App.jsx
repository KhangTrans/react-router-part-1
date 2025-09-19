import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProduct from './components/ListProduct';
import ProductDetail from './components/ProductDetail';
function App() {

  return (
     <Router>
      <Routes>
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
