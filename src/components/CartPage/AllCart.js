import React ,{useState,useEffect} from "react"
export default function AllCart (props){
    console.log(props.item)
    let x=0;
    let sum = props.item.reduce((x,y) => x + parseInt(y.count*y.price),0 );
    return (
        <div>
           Total : {sum}
        </div>
    )
}