import React from "react";

class UpdateEmail extends React.Component {
    state = { 
        email: this.props.email
    }
    handleChange = (ev) => {
        this.setState({
            email: ev.target.value
        })
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        fetch('http://localhost:3000/users/update/email', {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify({
                email: this.state.email
            })
        })
        .then(res => res.json())
        .then(updatedTask => {
            this.props.update(updatedTask.user.email)
        })
        
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.email} onChange={this.handleChange}></input>
                <button type="submit">Update</button>
            </form>
        );
    }
}

export default UpdateEmail;