import app from "./base";
import React, { useState, useEffect, } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, [])

    return (<AuthContext.Provider
    value={{currentUser}}
    >
    {children}
    </AuthContext.Provider>);
};

export const withRouter = (Component) =>{
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }