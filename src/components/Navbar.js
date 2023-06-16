import React from 'react'
import logo from '../Assets/Logo.svg'

const Navbar = () => {
  return (
    <div>
        <nav className='flex space-x-6'>
            <img src={logo} alt='logo' />
            <a href='#' className='hover:underline'>Features</a>
            <a href='#' className='hover:underline'>Pricing</a>
        </nav>
    </div>
  )
}

export default Navbar