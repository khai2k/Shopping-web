import axios from "axios"
import Cookie from "js-cookie"
import { postFetch } from './../utils/fetch'
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from "../constants/userContants"
const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
    try {
        console.log('alalala')
        const url = 'http://127.0.0.1:4000/signin'
        const { data } = await postFetch(url, { email, password },{"Access-Control-Allow-Origin": "*"})
        // const {data}= await axios.post("http://localhost:4000/signin",{email,password});
        console.log("hhhhhhhhhhhhhh");

        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
}

export { signin }