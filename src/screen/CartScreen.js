import React, { useEffect, useState } from "react"
import Item from "../components/CartPage/Item"
import AllCart from "../components/CartPage/AllCart";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import { Link } from "react-router-dom";

export default function CartScreen(props) {
  
  const cart = useSelector(state=>state.cart);
  const {cartItems}= cart
  const productId= props.match.params.id
  const qty= props.location.search?Number(props.location.search.split("=")[1]):1;
  const dispatch = useDispatch();
  const removeFromCartHandler=(productId)=>{
    dispatch(removeFromCart(productId));
  }
  useEffect(()=>{
    if(productId){
      dispatch(addToCart(productId,qty))
    } 
  },[]) 
  const checkoutHandler =()=>{
    props.history.push ("/sigin?redirect=shipping")
  }
  return (
    <div>
      CartScreen
      {
        cartItems.length === 0 ?
         <div> cart is emty </div>    
        : 
        cartItems.map(item=>
          <div>
            <Link to={"/product/"+item.product}>
            {item.name}

            </Link>
          
              qty: 
              <select value={item.qty} onChange={(e)=> dispatch(addToCart(item.product,e.target.value))}> 
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
              </select>
              <button type="button" onClick={()=>removeFromCartHandler(item.product)} >X</button>
          </div>
          )      
      }
      <div> 
        subtotol ( {cartItems.reduce((a,c)=>a+c.qty,0)} items )
        <h3>
          $ {cartItems.reduce((a,c)=>a+c.price*c.qty,0)}
        </h3>
        <button onClick={checkoutHandler} disabled={cartItems.length===0}>
          Proceed to Checkout
        </button>
      </div>
    </div>)
}

