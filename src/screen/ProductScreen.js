import React from "react";
import data from "../data";
import Item from "../components/DetailPage/Item";
import Cart from "../components/DetailPage/Cart";
import "../styles.css";
import { Link } from "react-router-dom";
export default function ProductScreen(props) {
  const product = data.products.find(x => x._id === props.match.params.id);
  return (
    <div className="detail-page">
       <Item item={product} />
       <Cart item={product} />;
    </div>
   
  );
}
