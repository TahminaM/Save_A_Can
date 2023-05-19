import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MainContext } from '../contexts/MainContext';
import logo from '../images/logoImg.png';


const Header = () => {
    const {setOpen } = useContext(MainContext)
    const userId = localStorage.getItem("userId")

    useEffect(() => {
        console.log(userId);
    },[userId])

    const handleOnClick = () => {
        localStorage.clear("userId")
        window.location.href = "/sign-up"
    }

    return (
        <div className="Header container">
            <nav className="navbar navbar-expand-lg" style={{ paddingRight: 20 }}>
                <div className="container-fluid">
                    <Link className="navbar-brand whiteTextBold" to="/">
                        <div className='logo-container'>
                            <img src={logo} alt="Save A Can logo" className="logo"></img>
                        </div>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={"/"}>
                                <li className="nav-item color-hover" style={{ color: "#2B7A0B" }} >
                                    <h5 style={{ paddingTop: 10, }}>Save A Can</h5>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 pl-3">
                    {userId && 
                        <li className="nav-item">
                            <Link className="navbar-brand color-hover whiteTextBold">
                                <span onClick={() => setOpen(true)}>
                                    Get Program
                                </span>
                            </Link>
                        </li>
                        }
                        <li className="nav-item">
                            <Link className="navbar-brand color-hover whiteTextBold" to="/events">
                                Airticles
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand color-hover whiteTextBold" to="/about-us">
                                About us
                            </Link>
                        </li>
                        {!userId && <li className="nav-item">
                            <Link className="navbar-brand color-hover whiteTextBold" to="/sign-up">
                                Sign up
                            </Link>
                        </li>}
                           {userId && <span onClick={handleOnClick} style={{color: "#a53030"}} className="color-hover">
                                Log Out
                            </span>}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;