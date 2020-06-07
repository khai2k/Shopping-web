import React from "react";
export default function Item(props) {
  const { image, name, price}= props.item;
  return (
    <div>
      <img className="product-image" src={image} alt="product" />
      {/* <img src={image}/>
      <h4>{name}</h4>
      <h4>Price{price}</h4> */}
    </div>
  );
}
