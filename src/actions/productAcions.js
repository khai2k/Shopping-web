import axios from "axios"

import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS,PRODUCT_DETAIL_REQUEST,PRODUCT_DETAIL_SUCESS,PRODUCT_DETAIL_FAIL } from "../constants/productConstants";
const listProducts=()=>async(dispatch)=>{

    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("http://localhost:4000/product")
        dispatch({type:PRODUCT_LIST_SUCESS,payload:data})    
    } catch (error) {
        dispatch({type:PRODUCT_LIST_FAIL,payload:error.message})
    }
    
}
const detailsProduct=(productID)=>async(dispatch) =>{
    try {
        dispatch({type:PRODUCT_DETAIL_REQUEST,payload:productID})
        const {data} = await axios.get("http://localhost:4000/product/"+productID)
        dispatch({type:PRODUCT_DETAIL_SUCESS,payload:data})
    } catch (error) {
        dispatch({type:PRODUCT_DETAIL_FAIL,payload:"loi"})
    }
}
export {listProducts,detailsProduct}
