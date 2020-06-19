import React, { useState }  from "react";
import {Link} from "react-router-dom"
// import { getCombinedNodeFlags } from "typescript";
export default function Cart(props) {
 
  const [qty,setQty]= useState(1);
  
  return (
    <div>
      <ul>  
        <li>Price: {props.item.price}</li>
        <li>
            Status: {props.item.countInStock > 0 ? "In Stock" : "Out of stock"}
        </li>
        <li>
          Qty 
          <select value={qty} onChange={(e)=>{setQty(e.target.value)}}  >
          {[...Array(props.item.countInStock).keys()].map(x=>
            <option value={x+1}>{x+1}</option>
            )}
          </select>
          
        </li>
        <li>
          {
            props.item.countInStock >0 &&
            <Link to={"/cart/"+props.item._id+"?qty="+qty} > 
                <button >add to cart</button>
            </Link>  
            
          }
            
        </li>
      </ul>
    </div>
  );
}
