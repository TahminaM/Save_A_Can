import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import logo from './images/logoImg.png';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import TeamPage from "./pages/TeamPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./pages/Footer";

function Navigation(props) {
  return (
    //previously in first className below "navbar-dark bg-primary shadow mb-3"
    <div id="theDiv">
      <nav className="navbar navbar-expand-sm" id="theNav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <img src={logo} alt="Spin and Learn logo" id="theLogo"></img>
            </div>
            <div className="col-4">
              <Link className="navbar-brand whiteTextBold" to="/homepage">
                Spin and Learn
              </Link>
            </div>
          </div>
          <div className="row">  
            {/* previously in first className below "me-auto" */}
            <ul className="navbar-nav me-auto">
              <li className="col-1.5 nav-item">
                <NavLink className="whiteText nav-link" to="/about-us">
                  ABOUT
                </NavLink>
              </li>
              <li className="col-1.5 nav-item">
                <NavLink className="whiteText nav-link" to="/pricing">
                  PRICING
                </NavLink>
              </li>
              <li className="col-1.5 nav-item">
                <NavLink className="whiteText nav-link" to="/team">
                  TEAM
                </NavLink>
              </li>
              <li className="col-2 nav-item">
                <NavLink className="nav-link" id="theSignUp" to="/sign-up">
                  SIGN UP
                </NavLink>
              </li>
              <li className="col-1.5 nav-item">
                <NavLink className="nav-link " id="theLogin" to="/login">
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <div className="justify-content-start">
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;