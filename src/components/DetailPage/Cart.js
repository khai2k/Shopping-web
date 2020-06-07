import React from "react";
export default function Cart(props) {
  const { price,status } = props.item;
  return (
    <div>
      <ul>
        <li>Price: {price}</li>
        <li>Status: {status}</li>
        <li>
          number
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </li>
        <li>
          <button>add to cart</button>
        </li>
      </ul>
    </div>
  );
}
