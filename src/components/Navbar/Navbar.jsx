import React from 'react';
import './Navbar.css';
import logo from '../../icons_assets/Logo.svg';
import basket from '../../icons_assets/basket .svg';

const Navbar = () => {
  return (
    <div className='navbar'>
  <img src={logo} alt="Logo" />
    <ul className='navbar-menu'>
     <li>Home</li>      
     <li>About</li> 
     <li>Menu</li> 
     <li>Reservations</li> 
     <li>Order Online</li> 
    </ul>
    <div className='navbar-right'>
      <img className='basket' src={basket} alt="Basket" />
      <div className='dot'></div>
      <button>Login</button>

    </div>
     </div>
  )
}

export default Navbar;
