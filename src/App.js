import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './screens/Navbar'; 
import Ecommerce from './screens/ecom';
import Products from './screens/product';
import Services from './screens/services';
import Blog from './screens/Blogs';
import Contact from './screens/contact';

function App() {
  return (
    <Router>
      <div>
        {/* Include the Navbar component */}
        <Navbar className="flex flex-col items-center px-4" />
        <Routes >
          <Route path="/ecom" element={<Ecommerce />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs/*" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
