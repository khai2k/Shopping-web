import React from "react";
// import "./styles.css";
import {Link} from "react-router-dom"
export default function Item(props) {
  const { item } = props
  return (
    <li>
      <div className="product">
        <Link to = {{pathname:"/product/"+item._id,
                      state:{product:item}
        }}>
          <img className="product-image" src={item.image} alt="product" />
        </Link>
        <div className="product-name">
          <a href="product.html">{item.name}</a>
        </div>
        <div className="product-brand">{}</div>
        <div className="product-price">${item.price}</div>
      </div>
    </li>
  );
}
