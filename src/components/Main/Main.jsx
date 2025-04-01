import React from 'react';
import './Main.css';
import greeksalad from '../../icons_assets/greeksalad.jpg';
import delivery from '../../icons_assets/delivery.png';

const Main = () => {
  return (
   <> 
   <div className='main-upper-part'>
     <div> <h1>This weeks specials</h1></div>
     <div><button>Online Menu</button></div>
    </div>

<div className='option-section'>
    <div className='main-lower-part'>
      <div className='dish'>
      <img src={greeksalad} alt="greeksalad" />
      <div className='Dish-name'>
      <h2>Greek Salad</h2>
      <div className='dish-price'>$12.90</div>
      <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  
      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  </div>
      <div className='order'><h5>Order a delivery</h5>
      <div>
      <img src={delivery} alt="delivery" />
      </div>
      </div>
      </div>
      </div>
    </div>



    <div className='main-lower-part'>
      <div className='dish'>
      <img src={greeksalad} alt="greeksalad" />
      <div className='Dish-name'>
      <h2>Greek Salad</h2>
      <div className='dish-price'>$12.90</div>
      <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  
      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  </div>
      <div className='order'><h5>Order a delivery</h5>
      <div>
      <img src={delivery} alt="delivery" />
      </div>
      </div>
      </div>
      </div>
    </div>


    <div className='main-lower-part'>
      <div className='dish'>
      <img src={greeksalad} alt="greeksalad" />
      <div className='Dish-name'>
      <h2>Greek Salad</h2>
      <div className='dish-price'>$12.90</div>
      <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  
      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  </div>
      <div className='order'><h5>Order a delivery</h5>
      <div>
      <img src={delivery} alt="delivery" />
      </div>
      </div>
      </div>
      </div>
    </div>

    </div>
    </>
  );
}

export default Main;
