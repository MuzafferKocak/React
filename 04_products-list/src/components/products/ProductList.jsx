import React from "react";

import "./ProductList.scss";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="products-list">
      {products.map((product) => (
        <div>
          <div>
            <h3>{product.price}</h3>
          </div>
          <img src={product.image} alt={product.title} />
          <div>
            <h2>{product.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
