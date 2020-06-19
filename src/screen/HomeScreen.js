import React, { useState, useEffect } from "react";
import "../styles.css";
import Item from "../components/Item";
import data from "../data";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productAcions";
export default function HomeScreen(props) {
  const productList= useSelector(state=>state.productList);
  const {products,loading,error} =  productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    return ()=>{

    }
  }, [])

  return   loading ? <div>Loading...</div>:error?  <div>{error} </div>:
    <ul className="products">
      {products.map(product => (
        <Item item={product} />
      ))}
    </ul>
   
}
