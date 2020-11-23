import React from "react";
import "./css/loginForms.css";

class Login extends React.Component {
    state = { 
        username: "",
        password: ""
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = (evt) =>{
        evt.preventDefault()
        fetch(`http://localhost:3000/users/login`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(userObj => {
            if(userObj.error){
                alert(userObj.error)
            }
            else{
                this.props.handleLogin(userObj)
            }
            
        })
        
        
    }
    render() { 
        return ( 
            <div className="container_forms">
                <div className="logo_forms">
                    <h3>welcome</h3>
                </div>
                <div className="row">
                    <div className="login_form">
                        <h2>Sign Up</h2>
                        <form autoComplete="off" onSubmit={this.handleSubmit}>
                            <input type="text" name="username" value={this.state.username} required placeholder="Username" onChange={this.handleChange}></input>
                            <input type="password" name="password" value={this.state.password} required placeholder="password" onChange={this.handleChange}></input>
                            <button className="login_register" type="submit" > Login</button>
                            <p>Don't have an account? <a href="#" onClick={this.props.toggleForm} className="switch">Register Now</a></p>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Login;