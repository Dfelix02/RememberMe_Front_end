import React from 'react';
import {NavLink} from "react-router-dom";
import "./css/HeaderLI.css"


class HeaderLI extends React.Component {
    state = {  }
    handleClick = () => {
        localStorage.clear()
    }
    render() { 
        return ( 
            <nav className="navBar">
                <h4 className="logo"> 
                    <NavLink to="/">RememberMe</NavLink>
                </h4>
                <ul>
                    <li>
                        <NavLink to="/" onClick={this.handleClick}> Log Out</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile"> Profile</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default HeaderLI;