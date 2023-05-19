import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainProvider from "./contexts/MainContext";


// Styles
import "./styles/index.scss"
import "./styles/header.scss"
import "./styles/home-page.scss"
import "./styles/footer.scss"
import "./styles/about-us.scss"
import "./styles/signup.scss"
import "./styles/Prediction.scss"

// React 17 style loading of application
ReactDOM.render(
    <BrowserRouter>
        <MainProvider>
            <App />
        </MainProvider>
    </BrowserRouter>,
    document.getElementById("root"));