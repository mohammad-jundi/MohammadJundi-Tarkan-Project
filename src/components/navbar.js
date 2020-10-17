import React from "react";
import { Menu, Avatar, Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { SignOut } from "../redux/actions/AuthActions";

const Navbar = props => {
    const isLoggedNavbar = (
        <Menu>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item onClick={props.SignOut}>Log Out</Menu.Item>
        </Menu>
    );
    return (
        <Menu mode="horizontal">
            <Menu.Item>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>

            <Menu.Item>
                <NavLink to="/about">About</NavLink>
            </Menu.Item>

            {props.userData.uid ? (
                <>
                    <Menu.Item>
                        <NavLink to="/diet">Diet</NavLink>
                    </Menu.Item>
                    {console.log(props.profile)}
                    <Menu.Item style={{ float: "right", marginRight: "5vw" }}>
                        {props.profile.firstName ? (
                            <Dropdown
                                placement="bottomCenter"
                                overlay={isLoggedNavbar}
                            >
                                <a
                                    className="ant-dropdown-link"
                                    onClick={e => e.preventDefault()}
                                >
                                    <Avatar
                                        size={{
                                            xs: 24,
                                            sm: 32,
                                            md: 40,
                                            lg: 64,
                                            xl: 80,
                                            xxl: 100,
                                        }}
                                    >
                                        {props.profile.firstName.charAt(0)}
                                        {props.profile.surname.charAt(0)}
                                    </Avatar>
                                </a>
                            </Dropdown>
                        ) : (
                            <></>
                        )}
                    </Menu.Item>
                </>
            ) : (
                <>
                    <Menu.Item>
                        <NavLink to="/login">Login</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/register">Register</NavLink>
                    </Menu.Item>
                </>
            )}
        </Menu>
    );
};

const mapStateToProps = state => {
    return {
        userData: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        SignOut: () => dispatch(SignOut()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
