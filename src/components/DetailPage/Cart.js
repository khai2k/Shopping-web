import React from "react";
export default function Cart(props) {
  return (
    <div>
      <ul>
        <li>Price: {props.item.price}</li>
        <li>Status: {props.item.status}</li>
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
