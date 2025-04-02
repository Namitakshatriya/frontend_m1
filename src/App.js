import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
    <div className='App'>
       <Navbar /> 
       <Header />
       <Main /> 
      <Footer /> 

    </div>
  </>
);
}

export default App;
