import {createStore,combineReducers, compose, applyMiddleware} from "redux"
import { productListReducer,productDetailsReducer } from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers"
import thunk from "redux-thunk"
import Cookie from 'js-cookie'
import { userSigninReducer } from "./reducers/userReducers";

const cartItems=Cookie.getJSON("cartItems") || []; // getJSON = JSON.parse
const initialState={cart:{cartItems}};
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer
})

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhacer(applyMiddleware(thunk)))

export default store; 