import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { signin } from "../actions/userActions";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}
const container={
    marginTop:"5px"
}
function SigninScreen(props) {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const userSignin= useSelector(state=>state.userSignin)
    const {loading,userInfo, error} = userSignin;
    const dispatch = useDispatch();
    useEffect(() => {
        if (userInfo){
            props.history.push("/")
        }
        return () => {
            //
        }
    }, [userInfo])
    const submitHandler = (e) => {
        e.preventDefault();
        
        dispatch(signin(email,password))
    }
    return (
        <div>
        <div> 
            {/* {loading && <div> Loading... </div>}
            {error && <div> {error} </div>} */}
        </div>
       <div className={container}>
       <Form onSubmit={submitHandler }
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item
                label="Email"
                name="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input onChange={(e)=>{ setEmail(e.target.value)}} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password onChange={(e)=>{ setPassword(e.target.value)}} />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={submitHandler} >
                   Submit
        </Button>
            </Form.Item>
        </Form>
      
       </div>
        <div>
            New to Eco
        </div>
        <div>
            <Link to="/register"> Create your acoount </Link>
        </div>
        </div>

    );
}

export default SigninScreen;