import React from "react";

class UpdateBio extends React.Component {
    state = { 
        bio: this.props.bio
    }
    handleChange = (ev) => {
        this.setState({
            bio: ev.target.value
        })
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        fetch('http://localhost:3000/users/update/bio', {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify({
                bio: this.state.bio
            })
        })
        .then(res => res.json())
        .then(updatedTask => {
            this.props.update(updatedTask.user.bio)
        })
        
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.bio} onChange={this.handleChange}></input>
                <button type="submit">Update</button>
            </form>
        );
    }
}

export default UpdateBio;