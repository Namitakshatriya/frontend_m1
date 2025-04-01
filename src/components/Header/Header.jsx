import React from 'react';
import './Header.css';
import restauranfood from '../../icons_assets/restauranfood.jpg';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>Lorem Ipsum Lorem Ipsum Lorem <br/>Ipsum Lorem Ipsum Lorem Ipsum <br/>Lorem Ipsum Lorem Ipsum Lorem  </p>
            <button>Reserve a Table</button>
     </div>
     <div className='header-right'>
     <img src={restauranfood} alt="restauranfood" />
     </div>
    </div>
  );
}

export default Header;
