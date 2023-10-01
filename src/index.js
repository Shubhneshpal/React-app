import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import About from './pages/About';
import { store } from './Redux/Store';
import Help from './pages/Help';
import Faq from './pages/Faq';
import Shop_Detals from './pages/Shop_Detals';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/detail" element={<Shop_Detals/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>
);



