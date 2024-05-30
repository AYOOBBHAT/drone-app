// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Ecommerce from './screens/ecom';
import Products from './screens/product';
import Services from './screens/services';
import Blog from './screens/Blogs';
import Contact from './screens/contact';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ecom">E-commerce</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          
          <Route path="/ecom" element={<Ecommerce />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs/*" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
