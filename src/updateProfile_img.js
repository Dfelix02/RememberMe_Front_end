import React from "react";

class UpdateProfile_img extends React.Component {
    state = { 
        profile_img: this.props.profile_img
    }
    handleChange = (ev) => {
        this.setState({
            profile_img: ev.target.value
        })
        // console.log(this.state.task)
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        fetch('http://localhost:3000/users/update/profile_img', {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify({
                profile_img: this.state.profile_img
            })
        })
        .then(res => res.json())
        .then(updatedTask => {
            this.props.update(updatedTask.user.profile_img)
        })
        
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.profile_img} onChange={this.handleChange}></input>
                <button type="submit">Update</button>
            </form>
        );
    }
}

export default UpdateProfile_img;