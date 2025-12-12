
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Pages/HomePage/HomePage';
import CreateProductForm from './Components/Pages/CreateProductPage/CreateProductPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateProductForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;