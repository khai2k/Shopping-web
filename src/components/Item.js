import React from "react";
export default function Item(props) {
  const { name, image, brand, price, _id } = props.item;
  return (
    <li>
      <div className="product">
        <img className="product-image" src={image} alt="product" />
        <div className="product-brand">{brand}</div>
        <div className="product-price">${price}</div>
      </div>
    </li>
  );
}
