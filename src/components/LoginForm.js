import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { connect } from "react-redux";
import { SignIn } from "../redux/actions/AuthActions";
import { Redirect } from "react-router-dom";
//import { Redirect } from "react-router-dom";

// should we move state management to parent and keep this one as presentational?

//before reading the explanation below, read all the comments within the code.
//combined reducers are inside the store.
//when user fills the form and clicks on log in line 44 gets invoked.
//line 49 triggers line 18 .
//at line 18 redux dispatches logIn("LOG_IN" action from actions folder) as action to store.
//store finds LOG_IN from combinedReducers and calls isLoggedIn reducer(inside reducer folder).
//that reducer creates new state and sends it back to store.
//State gets updated.
//Thus components get re-rendered.

// test

function LoginForm(props) {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    //this is like onSubmit for some reason ant Design uses onFinish
    const onFinish = values => {
        console.log("Success:", values);
        props.auth(values); // changes state . this was defined in line 18
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };
    if (props.authStatus) {
        return <Redirect to="/diet" />;
    } else {
        return (
            <Row style={{ marginTop: "10vh" }}>
                <Col span={10} offset={7}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: "email",
                                    message: "The input is not valid E-mail!",
                                },
                                {
                                    required: true,
                                    message: "Please input your E-mail!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            {...tailLayout}
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                            <div>{props.authError ? props.authError : ""}</div>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    //makes the state accessible as props(isLogged will be a props for the functional component above)
    // console.log("state is", state)
    // console.log("auth uid is", state.firebase.auth.uid)
    return {
        authError: state.AuthReducer.authError,
        authStatus: state.firebase.auth.uid,
    };
};

const mapDispatchToProps = dispatch => {
    //allows you to change state
    return {
        auth: user => dispatch(SignIn(user)), // logIn refers to a type of action(check actions folder).   must be a function. dispatches action type, redux executes it accordingly
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm); //connects redux store to component. parameters allows you to see and change the state.
