import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = ({ cart }) => {
  return (
    <div className="navbar container">
      <img className="image" src="images/logo2.png" alt="logo" />
      <div className="logo">Bite & Savory</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-parent">
            Cart
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};
