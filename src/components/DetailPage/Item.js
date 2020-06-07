import React from "react";
export default function Item(props) {
  return (
    <div>
      <h4>{props.item.name}</h4>
      <h4>Price{props.item.price}</h4>
    </div>
  );
}
