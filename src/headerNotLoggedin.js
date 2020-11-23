import React from 'react';
import {NavLink} from "react-router-dom";
import "./css/HeaderNLI.css"


class HeaderNLI extends React.Component {
    state = {  }
    render() { 
        return ( 
            <ul className="navBar">
                <li className="logo"> 
                    <NavLink to="/">RememberMe</NavLink>
                </li>
                <li>
                    <NavLink to="/login"> Login/Register</NavLink>
                </li>
            </ul>
        );
    }
}

export default HeaderNLI;