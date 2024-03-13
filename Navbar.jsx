import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

const Navbar = ({ onCartClick, cartItems }) => {
  const cartQuantity = cartItems.length;

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/images/Zugi logo.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="navbar-icons">
        <div className="icon-container" onClick={onCartClick}>
        <IconButton  aria-label="cart">
        {/* Replace the cart icon with ShoppingCartIcon */}
        <Badge badgeContent={cartQuantity} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
          {/* {cartQuantity > 0 && <div className="cart-badge">{cartQuantity}</div>} */}
        </div>
        <img className="menu-icon" src="/images/image.jpg" alt="menu-icon" />
        <img
          className="profile-icon"
          src="/images/360_F_483909569_OI4LKNeFgHwvvVju.jpg"
          alt="profile-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
