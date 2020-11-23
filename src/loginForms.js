import React from 'react';
import Login from "./login"
import Register from "./register"



class LoginForms extends React.Component {
    state = { 
        toggle: true

    }

    handleToggle =() =>{
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() { 
        return ( 
                <div className="row">
                    {this.state.toggle ? <Login toggleForm={this.handleToggle} handleLogin={this.props.handleLogin}/> : <Register toggleForm={this.handleToggle} handleLogin={this.props.handleLogin}/>}
                </div>
        );
    }
}

export default LoginForms;