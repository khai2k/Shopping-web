import {PRODUCT_LIST_SUCESS,PRODUCT_LIST_REQUEST,PRODUCT_LIST_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCESS, PRODUCT_DETAIL_FAIL} from "../constants/productConstants"
function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_SUCESS:
            return { loading: false,products: action.payload};
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function productDetailsReducer(state = { product: {} }, action) {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true };
        case PRODUCT_DETAIL_SUCESS:
            return { loading: false,product: action.payload};
        case PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export {productListReducer,productDetailsReducer}