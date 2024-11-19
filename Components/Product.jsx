import React from "react";
import "./Product.css";

export const Product = ({ product, cart, setCart }) => {
  const name = product.name.length > 17? product.name.substring(0, 17) + "...": product.name;

  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className="product ">
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price Rs:{product.amt}</p>
        {cart.includes(product) ? (
          <button className="btnRemove" onClick={removeCart}>
            <i className="bi bi-cart-x"></i>Remove from Cart
          </button>) : (<button onClick={addCart}><i className="bi bi-cart-plus"></i>Add to Cart</button>)}
      </div>
    </div>
  );
};
          
