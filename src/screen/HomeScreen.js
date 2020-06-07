import React from "react";
import "../styles.css";
import Item from "../components/Item";
import data from "../data";
import axios from "axios";
export default function HomeScreen(props) {
  // const [product, setproduct]= useState([]);
  // useEffect(()=>
  //   const fetchdata =()=>{
  //     const {data}= await axios.get("http://localhost:4000/product/")
  //     setproduct(data);
  //   }
  // )
  // const {data}= aw a

  axios.get("http://localhost:4000/product/").then(function(response) {
    // handle success
    console.log(response);
  });

  return (
    <ul className="products">
      {data.products.map(product => (
        <Item item={product} />
      ))}
    </ul>
  );
}
