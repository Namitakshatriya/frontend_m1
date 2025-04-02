import React,{ useState }  from 'react';
import './Navbar.css';
import logo from '../../icons_assets/Logo.svg';
import basket from '../../icons_assets/basket .svg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='navbar'>
    

   {/* Menu Button (Visible in small screens) */}
   <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle icons */}
      </div>
      
{/* Logo */}
<img src={logo} alt="Logo" className="logo" />
      {/* Navigation Menu */}
       <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
     <li>Home</li>      
     <li>About</li> 
     <li>Menu</li> 
     <li>Reservations</li> 
     <li>Order Online</li> 
    </ul>

    <img src={basket} alt="basket" className="basket" />
    <button className='login'>Login</button>
</nav>
  )
}

export default Navbar;
