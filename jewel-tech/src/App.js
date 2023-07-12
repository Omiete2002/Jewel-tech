import React from 'react';

import { Navbar, Header, Footer, AboutUs, Don, Woko, Etibo } from './Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='background__img'>
        <Navbar />
        <Header />
      </div>
      <AboutUs />
      <Don />
      <Woko />
      <Etibo />
      <Footer />    
    </div>
  );
}

export default App;
