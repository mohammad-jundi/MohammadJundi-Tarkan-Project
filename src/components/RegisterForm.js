import React from "react";
import {
    Form,
    Input,
    Button,
    InputNumber,
    Select,
    DatePicker,
    Checkbox,
    Row,
    Col,
} from "antd";

import { connect } from "react-redux";
import { signUp } from "../redux/actions/AuthActions";
import { Redirect } from "react-router-dom";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegisterForm = props => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log("Received values of form: ", values);
        props.signUp(values);
    };
    if (props.userData.uid) {
        return <Redirect to="/" />;
    } else {
        return (
            <Row style={{ marginTop: "5vh" }}>
                <Col span={10} offset={7}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{}}
                        scrollToFirstError
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
                            hasFeedback
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                                {
                                    min: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (
                                            !value ||
                                            getFieldValue("password") === value
                                        ) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            "The two passwords that you entered do not match!"
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="name"
                            label="First Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your first name!",
                                    whitespace: true,
                                },
                            ]}
                            hasFeedback
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="surname"
                            label="Last Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your last name!",
                                    whitespace: true,
                                },
                            ]}
                            hasFeedback
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Birthdate"
                            name="birthdate"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your birthdate!",
                                },
                            ]}
                            hasFeedback
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[
                                {
                                    required: true,
                                    message: "Please choose your gender!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Select>
                                <Select.Option value="Female">
                                    Female
                                </Select.Option>
                                <Select.Option value="Male">Male</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="weight"
                            label="Weight (kg)"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your weight!",
                                },
                            ]}
                            hasFeedback
                        >
                            <InputNumber type="number" min={1} max={600} />
                        </Form.Item>
                        <Form.Item
                            name="height"
                            label="Height (cm)"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your height!",
                                },
                            ]}
                            hasFeedback
                        >
                            <InputNumber type="number" min={1} max={300} />
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value
                                            ? Promise.resolve()
                                            : Promise.reject(
                                                  "Should accept agreement"
                                              ),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
};

const mapStateToProps = state => {
    //makes the state accessible as props(isLogged will be a props for the functional component above)
    return {
        userData: state.firebase.auth,
        authError: state.AuthReducer.authError,
    };
};

const mapDispatchToProps = dispatch => {
    //allows you to change state
    return {
        signUp: newUser => dispatch(signUp(newUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
