import React from 'react';
import { Link } from 'react-router-dom';

import { Productdata } from '../data/Productdata'; 


function Products() {
  return (
    <div className="products">
      <h1>products</h1>
      <div className="items-grid">
        {Productdata.map((item) => (
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

export default Products;
