import React, { useEffect } from "react";
import data from "../data";
import Item from "../components/DetailPage/Item";
import Cart from "../components/DetailPage/Cart";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productAcions";
// import { Link } from "react-router-dom";

export default function ProductScreen(props) {
  const productDetails=useSelector(state=>state.productDetails);
  const {product,loading,error} = productDetails
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(detailsProduct(props.match.params.id))
    return ()=>{
    };
  },[]) 
  // const product = data.products.find(x => x._id === props.match.params.id);
  // const {product} = props.location.state;
  return   loading ? <div>Loading...</div>:error?  <div>{error} </div>:
    <div>
      <Item item={product} />
      <Cart item={product} />
    </div>
}
