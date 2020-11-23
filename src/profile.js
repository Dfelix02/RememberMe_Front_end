import React from 'react';
import UpdateUsername from "./updateUsername"
import UpdateEmail from "./updateEmail"
import UpdateBio from "./updateBio"
import UpdateProfile_img from "./updateProfile_img"
import "./css/profile.css"



class Profile extends React.Component {
    state = {  
        toggleUpdateUsername: false,
        username: this.props.username,
        toggleUpdateEmail: false,
        email: this.props.email,
        toggleUpdateBio: false,
        bio: this.props.bio,
        profile_img: this.props.profile_img,
        toggleUpdateProfile_img: false
        // toggleUpdateImage: false,
    }
    toggleUpdateUsername =()=>{
        this.setState({
            toggleUpdateUsername: !this.state.toggleUpdateUsername
        })
    }
    updateUsername = (newUsername) =>{
        console.log("updating username")
        this.setState({
            toggleUpdateUsername: !this.state.toggleUpdateUsername,
            username: newUsername
        })
    }
    toggleUpdateEmail =() => {
        this.setState({
            toggleUpdateEmail: !this.state.toggleUpdateEmail
        })
    }
    updateEmail = (newEmail) =>{
        console.log("updating email")
        this.setState({
            toggleUpdateEmail: !this.state.toggleUpdateEmail,
            email: newEmail
        })
    }
    toggleUpdateBio =()=>{
        this.setState({
            toggleUpdateBio: !this.state.toggleUpdateBio
        })
    }
    updateBio = (newBio) =>{
        console.log("updating bio")
        this.setState({
            toggleUpdateBio: !this.state.toggleUpdateBio,
            bio: newBio
        })
    }
    toggleUpdateProfile_img =()=>{
        this.setState({
            toggleUpdateProfile_img: !this.state.toggleUpdateProfile_img
        })
    }
    updateProfile_img = (newProfile_img) =>{
        console.log("updating Profile image")
        this.setState({
            toggleUpdateProfile_img: !this.state.toggleUpdateProfile_img,
            profile_img: newProfile_img
        })
    }
    render() { 
        let {username, email, profile_img, bio} = this.state
        return ( 
        <div className="profile_container"> 
            <div className="profile_image">
                <img src={profile_img} />
                <br/>
                <button className="image_update_button"onClick={this.toggleUpdateProfile_img}>update</button>
                {this.state.toggleUpdateProfile_img ? <UpdateProfile_img profile_img={this.state.profile_img} update={this.updateProfile_img}/> : ""}
            </div>
            <div className="user_info">
                <h3>{username}                 <button onClick={this.toggleUpdateUsername}>update</button></h3>
                {this.state.toggleUpdateUsername ? <UpdateUsername username={this.state.username} update={this.updateUsername}/> : ""}
                <h3>{email}              <button onClick={this.toggleUpdateEmail}>update</button></h3>
                {this.state.toggleUpdateEmail ? <UpdateEmail email={this.state.email} update={this.updateEmail}/> : ""}
                <h3>{bio}               <button onClick={this.toggleUpdateBio}>update</button></h3>
                {this.state.toggleUpdateBio ? <UpdateBio bio={this.state.bio} update={this.updateBio}/> : ""}
            </div>
        </div> );
    }
}
 
export default Profile;