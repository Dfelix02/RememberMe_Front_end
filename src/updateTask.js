import React from "react";

class UpdateTask extends React.Component {
    state = { 
        task: this.props.task,
        taskDescription: this.props.task.description
    }
    handleChange = (ev) => {
        this.setState({
            taskDescription: ev.target.value
        })
        // console.log(this.state.task)
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.update(this.state.task,this.state.taskDescription)
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.taskDescription} onChange={this.handleChange}></input>
                <button type="submit">Update</button>
            </form>
        );
    }
}

export default UpdateTask;