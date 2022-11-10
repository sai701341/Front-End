import React from 'react'
import {Link } from 'react-router-dom'

const Navbar = () => {
  return <>
  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to="/" className='navbar-brand'>Crud App</Link> 
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li className='nav-list'><Link to="product" className='nav-link'>CreateProduct</Link></li>
            <li className='nav-list'><Link to="productlist" className='nav-link'>Product List</Link></li>
        </ul>
    </div>
  </nav>
  </>
}
export default Navbar
