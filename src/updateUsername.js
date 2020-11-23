import React from "react";

class UpdateUsename extends React.Component {
    state = { 
        username: this.props.username
    }
    handleChange = (ev) => {
        this.setState({
            username: ev.target.value
        })
        // console.log(this.state.task)
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        fetch('http://localhost:3000/users/update/username', {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify({
                username: this.state.username
            })
        })
        .then(res => res.json())
        .then(updatedTask => {
            this.props.update(updatedTask.user.username)
        })
        
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={this.handleChange}></input>
                <button type="submit">Update</button>
            </form>
        );
    }
}

export default UpdateUsename;