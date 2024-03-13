import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>Product Details</h2>
      {product && (
        <div className="product-details-container">
          <div className="product-details-image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="product-details-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>£{product.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
