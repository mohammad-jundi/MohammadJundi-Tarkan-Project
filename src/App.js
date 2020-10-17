import React from "react";
import "./App.css";

import "antd/dist/antd.css";
import Navbar from "./components/navbar";

import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./container/LoginPage/loginPage";
import RegisterPage from "./container/RegisterPage/registerPage";
import DietPage from "./container/DietPage/DietPage";
import HomePage from "./container/HomePage/homePage";
import AboutPage from "./container/AboutPage/aboutPage";
import Footer from "./components/Footer"

function App() {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/diet" component={DietPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Footer />
        </Router>
    );
}

export default App;

//<a href='https://www.freepik.com/photos/food'>Food photo created by wayhomestudio - www.freepik.com</a>
