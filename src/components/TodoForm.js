import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: { description: "", isCompleted: false }
    };
  }

  handleChange(event) {
    this.setState({
      newTodo: { description: event.target.value, isCompleted: false }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitTodo(this.state.newTodo);
    this.setState({
      newTodo: { description: "", isCompleted: false }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Add todo:
          <input
            id="inputText"
            type="text"
            value={this.state.newTodo.description}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <input id="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm;