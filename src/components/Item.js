import React from "react";
// import "./styles.css";

export default function Item(props) {
  return (
    <li>
      <div className="product">
        <img className="product-image" src="images/d1.jpg" alt="product" />
        <div className="product-name">
          <a href="product.html">Slim Shirt</a>
        </div>
        <div className="product-brand">Nike</div>
        <div className="product-price">$60</div>
        <div className="product-rating">4.5 Stars (10 Reviews)</div>
      </div>
    </li>
  );
}
