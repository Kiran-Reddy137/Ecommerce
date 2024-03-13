// ProductList.js
import React from "react";

const ProductList = ({ products, onSelectProduct, addToCart }) => {

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("Product added to cart:", product);
  };

  const handleSelectProduct = (product) => {
    onSelectProduct(product);
  }

  return (
    <div className="product-list-container">
      {products.map((product, index) => (
        <div key={product.id || index} className="product-item">
          <img src={product.imageUrl} alt={product.name} />

          <div className="product-details" style={{ flex: 1 }}>
            <p className="product-name">
              {product.name.length > 60
                ? product.name.substr(0, 60)
                : product.name}
            </p>
            <p className="product-price">£{product.price}</p>
          </div>

          <button
            className="add-to-cart-button"
            onClick={() => {
              handleAddToCart(product);
              handleSelectProduct(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
