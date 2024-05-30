import React from 'react';
import { useParams } from 'react-router-dom';
import { Ecomdata } from '../data/Ecomdata';
//import './Category.css';

function Category() {
  const { categoryName } = useParams();
  const category = Ecomdata.find(cat => cat.category === categoryName);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="category">
      <h1>{categoryName}</h1>
      <div className="category-items">
        {category.items.map((item) => (
          <div key={item.id} className="category-item">
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
