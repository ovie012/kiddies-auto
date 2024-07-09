import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SellerProductListingPage from './SellerProductListingPage';
import ProductDescription from './ProductDescription';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import './App.css'

function App() {
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SellerProductListingPage />} />
        <Route path="/ProductDescription" element={<ProductDescription />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path='/CheckoutPage' element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
