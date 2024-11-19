import React, { useEffect, useState } from "react";
import "./Cart.css";

export const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);
  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product">
            <div className="img">
              <img src={product.pic} alt="pic" />
            </div>
            <div className="cart-product-details">
              <h3>Item :{product.name}</h3>
              <p>Price Rs :{product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="cart-amount">Total Amount Rs:{total}</h2>
    </>
  );
};
