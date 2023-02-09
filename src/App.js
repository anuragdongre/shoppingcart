
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from 'react'
import './App.css';

import Header from "./Components/EssentialsLayout/Header";

import Products from './Components/Products/Products';
import CartProvider from './Components/Store/CartProvider';


function App() {
  
  return (
    <CartProvider>
      <Header/>
      <Products/>
    </CartProvider>
  );
}

export default App;
