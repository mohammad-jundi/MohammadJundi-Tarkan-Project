import React from "react";
import "./style.css"
// import { div } from "antd";

const editPageStyle = {
    width: "100%",
    height: "5vh",
    margin: "0",
    display: "flex",
};


const Footer = () => {
    return (
        <div style={editPageStyle}>
            <div className="madByMT">© 2020 Copyright:
                <p><a href="https://github.com/mohammad-jundi"> Mohammad </a> and <a href="https://github.com/tmansuroglu"> Tarkan </a></p>
            </div>
            <div className="socialMediaIcons"></div>
        </div>
    );
};

export default Footer
