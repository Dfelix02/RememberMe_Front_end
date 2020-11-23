import React from "react";
import UpdateTask from "./updateTask";

class Tasks extends React.Component {
    state = { 
        task: this.props.task,
        toggleUpdate: false,
        taskDescription: this.props.task.description
     }
    handleClick =() => {
        fetch('http://localhost:3000/tasks/delete', {
            method: "DELETE",
            headers: {
                "Content-type": "Application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify({
                task: this.props.task
            })
        })
        .then(res => res.json())
        .then(deletedTask => {
            // console.log(deletedTask)
            this.props.deleteTask(deletedTask)
        })
    }
    handleToggle = () =>{
        this.setState({
            toggleUpdate: !this.state.toggleUpdate,
        })
    }
    handleUpdate = (task,taskDescription) =>{
        fetch('http://localhost:3000/tasks/update', {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify({
                task: task,
                taskDescription: taskDescription
            })
        })
        .then(res => res.json())
        .then(updatedTask => {
            // console.log(updatedTask)
            this.setState({
                toggleUpdate: !this.state.toggleUpdate,
                taskDescription: taskDescription
            })
        })
    }
    render() { 
        return ( 
            <div>
                <h3>{this.state.taskDescription}   <button onClick={this.handleToggle}>Update</button>   <button onClick={this.handleClick}>X</button></h3>
                {this.state.toggleUpdate ? <UpdateTask task={this.state.task} update={this.handleUpdate}/> : ""}
            </div>
        );
    }
}

export default Tasks;