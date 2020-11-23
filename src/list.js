import React from "react";
import Tasks from "./tasks";
import './css/list.css'

class List extends React.Component {
    state = { 
        task: "",
        tasks: []
    }
    handleChange = (ev) =>{
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    handleSubmit = (ev) => {
        ev.preventDefault()

        fetch('http://localhost:3000/lists/add', {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
                "authorization": localStorage.token
            },
            body: JSON.stringify({
                task: this.state.task
            })
        })
        .then(res => res.json())
        .then(createdTask => {
            let copyOfTasks = [...this.state.tasks,createdTask]
            this.setState({
                tasks: copyOfTasks
            })
            this.setState({
                task: ""
            })
            this.props.newTask(createdTask)
        })

    }
    deleteTask = (taskDescription) => {
        let copyOfTasks = this.state.tasks.filter(task =>{
            return task.id !== taskDescription.id
        })
        this.setState({
            tasks: copyOfTasks
        })
        this.props.deleteTask(taskDescription)
    }
    componentDidMount() {
        this.setState({
            tasks: this.props.tasks
        })
    }
    render() { 
        let tasks = this.state.tasks.map(task => {
            return <Tasks key={task.id} task={task} deleteTask={this.deleteTask}/>
        })
        return ( 
            <div className="tasks_list"> 
                <h2 className="logo">To do</h2>
                <form className="list_form" autoComplete="off" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.task} name="task" onChange={this.handleChange}></input>
                    <button type="submit">Add New Task</button>
                </form>
                {localStorage.token ? tasks : ""}
                
            </div>
         );
    }
}
 
export default List;