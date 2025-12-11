import React from 'react';
import Header from './Components/Header/Header'; 
import HomePage from './Components/Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;