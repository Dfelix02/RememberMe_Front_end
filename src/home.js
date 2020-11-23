import React from "react";
import List from "./list"
import "./css/homePage.css"

class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="big_image">
                    <img src="https://source.unsplash.com/random"/>
                </div>
                {localStorage.token ? <List tasks={this.props.tasks} newTask={this.props.newTask} deleteTask={this.props.deleteTask}/> : ""}
            </div>
        );
    }
}

export default Home;