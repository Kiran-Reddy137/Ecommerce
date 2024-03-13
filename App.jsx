import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import products from "./components/products";
import Cart from "./components/cart";
import CheckoutPage from "./components/CheckoutPage";
import CustomSlider from "./components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import CheckoutDetails from "./components/CheckoutDetails";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [ cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const productSectionRef = useRef();
  
  
  
  const increaseQuantity = (productId) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (productId) => {
    setCartItems(cartItems.map(item => item.id === productId && item.quantity > 1 ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
  };

  const removeItemFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
      const existingItem = cartItems.find((item) => item.id === product.id);
      if (existingItem) {
      // If the product is already in the cart, update the quantity
      setCartItems((prevItems) =>
          prevItems.map((item) =>
              item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
          )
      );
    } else {
        // If the product is not in the cart, add it with quantity set to 1
        setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
   }
  };

  

  const onSelectProduct = (product) => {
    console.log("Selected Product:", product);
  };

  const handleCartClick = () => {
     setShowCart(true);
  };
  useEffect(() => {
    console.log("showCart:", showCart);
  }, [showCart])

 

  return (
    <Router>
      <div className="app-container" >
        <Navbar onCartClick={handleCartClick} cartItems={cartItems}/>
        {showCart && (
          <Cart
            cartItems={cartItems}
            onClose={()=>setShowCart(false)}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeItemFromCart}
          />
          
        )}
        <Routes>
        
        <Route exact path="/" element={() => <ProductList products={products} addToCart={addToCart} />} />
        <Route path="/product/:id" element={() => <ProductDetails products={products} />} />
        <Route path="/checkout" element={CheckoutPage} />
        </Routes>
        
        <CustomSlider />
        <ProductList products={products} addToCart={addToCart} onSelectProduct={onSelectProduct}/>
        <Footer />
        
        
        
        
        
      </div>
    </Router>
  );
};

export default App;
