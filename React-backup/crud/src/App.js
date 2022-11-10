import React from 'react'
import {BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import CreateProduct from './components/CreateProduct'
import ProductList from './components/ProductList'

const App = () => {
  return <>
<Router>
    <Navbar />
    <Routes>
        <Route path='/product' element={<CreateProduct/>} />
        <Route path='/productlist' element={<ProductList/>} />
    </Routes>
</Router>
  </>
}

export default App
