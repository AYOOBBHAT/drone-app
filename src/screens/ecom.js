import React from 'react';
import { Link } from 'react-router-dom';
import { Ecomdata } from '../data/Ecomdata';
// import './Ecom.css'; // Uncomment if you have a CSS file

function Ecommerce() {
  return (
    <div className="ecommerce">
      <h1>E-commerce Items</h1>
      <div className="items-grid">
        {Ecomdata.map((item) => (
          <div key={item.id} className="item-card">
            <Link to={`/item/${item.id}`}>
              <img src={item.path} alt={item.name} className="item-image" />
              <h2>{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ecommerce;
