import React from 'react';
import LoginForms from './loginForms';
import Header from './header';
import Home from './home';
import Profile from './profile';
import {Switch, Route, withRouter, Redirect} from "react-router-dom"



class App extends React.Component {
  state = { 
    id: 0,
    username: "",
    email: "",
    bio: "",
    profile_img: "",
    tasks: [],
    token: ""
    
   }

  renderForms = () => {
    return <LoginForms handleLogin={this.handleLogin}/>
  }
  handleLogin = (userInfo) => {
    localStorage.token = userInfo.token
    this.setState({
      id: userInfo.user.id,
      username: userInfo.user.username,
      email: userInfo.user.email,
      bio: userInfo.user.bio,
      profile_img: userInfo.user.profile_img,
      tasks: userInfo.user.tasks,
      token: userInfo.token
    })
    this.props.history.push("/profile")
  }
  renderProfile = () => {
    if(this.state.token){
      return <Profile 
      id={this.state.id} 
      username={this.state.username}
      email={this.state.email}
      bio={this.state.bio}
      profile_img={this.state.profile_img}
      />
    }
    else {
      return <Redirect to="/login"/>
    }
  }
  componentDidMount() {
    if(localStorage.token){
      fetch(`http://localhost:3000/users/keepUserLoggedIn`,{
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res=>res.json())
      .then(this.handleLogin)
    }
  
  }
  renderHome = () => {
    return <Home tasks={this.state.tasks} newTask={this.handleNewTask} deleteTask={this.handleDeleteTask}/>
  }
  handleNewTask = (taskDescription) => {
    // console.log("new task!", taskDescription.description)
    let copyOfTasks = [...this.state.tasks, taskDescription]
    this.setState({
      tasks: copyOfTasks
    })
  } 
  handleDeleteTask = (taskDescription) => {
    // console.log("deleted task", taskDescription)
    let copyOfTasks = this.state.tasks.map(task =>{
      return task.id !== taskDescription.id
    })
    this.setState({
      tasks: copyOfTasks
    })
  }
  render() { 
    
    return ( 
        <div>
          <Header/>
          <Switch>
            <Route path="/login" render={this.renderForms} exact/>
            <Route path="/profile" render={this.renderProfile} exact/>
            <Route path="/" render={this.renderHome} exact/>
            <Route render={() => <p>You have found yourself in a hole</p>}/>
          </Switch>
        </div>
    );
  }
}
let theComponent = withRouter(App)
export default theComponent;