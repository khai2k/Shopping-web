import React,{useEffect,useState} from "react"
export default function Item (props){
    const {item,index}=props;
    const HandleOnChange=(e)=>{
        props.OnChange(e.target.value,item,index)        
    }
    const DeleteCart=(item)=>{
        props.OnDelete(item,index)
    }
    return(
        <div>
           <h3>{ item.name}</h3>
           <h3>{ item.price}</h3>
           <select id="ddlViewBy" onChange={HandleOnChange}>
               {[...Array(item.price).keys()].map((x)=>
               {
                   if (x == item.count) return <option value={x} selected>{x} </option>
                   else return <option value={x+1}>{x+1}</option>
               }
                )}
          </select>
          <button onClick={DeleteCart}> xxxxxxxxx </button>

        </div>
    )
}