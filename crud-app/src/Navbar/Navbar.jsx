import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
       
          <Link to="" className='navbar-brand'>CRUD APP</Link>
          <div className='ml-auto'>
            <ul className='navbar-nav'>
              <li className='nav-list'><Link to='createproduct' className='nav-link'>CreateProduct</Link></li>
              <li className='nav-list'><Link to='productlist' className='nav-link'>Productlist</Link></li>
            </ul>
          </div>
         
        
      </nav>
    </div>
  )
}

export default Navbar

