import React from "react";
import "./css/loginForms.css";

class Register extends React.Component {
    state = { 
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    confirmPassword = (evt) =>{
        evt.preventDefault()
        if (this.state.password === this.state.confirmPassword){
            fetch(`http://localhost:3000/users/register`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                bio: "Write something on your bio",
                profile_img: "https://lh3.googleusercontent.com/UAy4M7-LUnjQhc6DTS1WGliYTYWUrqQ78TlbGHaIAn07zsleV0X-UWEoVywvzTwky4omrA=s128"
            })
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
        else{
            alert("Passwords must match")
        }
        
    }
    
    render() { 
        return ( 
            <div className="container_forms">
                    <div className="logo_forms">
                        <h3>welcome</h3>
                    </div>
                    <div className="row">
                        <div className="register_form">
                            <h2>Sign Up</h2>
                            <form autoComplete="off" onSubmit={this.confirmPassword}>
                                <input type="text" name="username" value={this.state.username} required placeholder="Username" onChange={this.handleChange}></input>
                                <input type="email" name="email" value={this.state.email} required placeholder="Email" onChange={this.handleChange}></input>
                                <input type="password" name="password" value={this.state.password} required placeholder="password" onChange={this.handleChange}></input>
                                <input type="password" name="confirmPassword" value={this.state.confirmPassword} required placeholder="Confirm Password" onChange={this.handleChange}></input>
                                <button className="login_register" type="submit"> Register</button>
                                <p>You have an account? <a href="#"  onClick={this.props.toggleForm} className="switch">Login Now</a></p> 
                            </form>
                        </div>
                    </div>
            </div>            
        );
    }
}
 
export default Register;