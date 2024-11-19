import React, { useState } from "react";
import "./Home.css";
import data from "../assets/Products.json";
import { Product } from "./Product";
import { Open } from "./Open";
export const Home = ({ cart, setCart }) => {
  const [products] = useState(data);
  return (
    <>
      <Open />
      <div className="product-container ">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  );
};
