import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import SellerProductListingPage from './SellerProductListingPage';
import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <SellerProductListingPage />
    </>
  )
}

export default App
