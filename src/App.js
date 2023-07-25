import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import ProductCategory from './components/ProductCategory';
import ProductDetailsContainer from './components/ProductDetailsContainer';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="md:flex">
        <div className="md:w-3/10">
          <ProductCategory />
        </div>
        <div className="md:w-7/10 ml-4">
          <ProductDetailsContainer />
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
