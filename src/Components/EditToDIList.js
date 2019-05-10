import React, { Component } from "react";
import axios from "axios";


export default class EditToDIList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoDescription: "",
      todoResponsibility: "",
      todoPriority: "",
      todoCompleted: false
    }
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:4000/todos/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          todoDescription: response.data.todoDescription,
          todoResponsibility: response.data.todoResponsibility,
          todoPriority: response.data.todoPriority,
          todoCompleted: response.data.todoCompleted,
        })
      })
      .catch(function (error) {
        console.log(error)
      })

  }


  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  };

  onChangeTodoPriority(e) {
    this.setState({
      todoPriority: e.target.value,

    })
  }

  onChangeCompleted(e) {
    this.setState({

      todoCompleted: !this.state.todoCompleted
    })
  }

  onClick = e => {
    e.preventDefault();
    const object = {
      todoDescription: this.state.todoDescription,
      todoResponsibility: this.state.todoResponsibility,
      todoPriority: this.state.todoPriority,
      todoCompleted: this.state.todoCompleted,
    }
    axios.put("http://localhost:4000/todos/update/" + this.props.match.params.id, object)
      .then(res => console.log(res.data))
      .catch(function (error) {
        console.log(error);
      })

  }

  render() {
    return (
      <div>
        <h3> Update todos</h3>
        <form onSubmit={this.onClick}>
          <div className="form-group">
            <label>Description</label>
            <input type="text"
              className="form-control"
              name="todoDescription"
              value={this.state.todoDescription}
              onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Responsibility</label>
            <input type="text"
              className="form-control"
              name="todoResponsibility"
              value={this.state.todoResponsibility}
              onChange={this.onChange} />
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={this.state.todoPriority === "Low"}
              onChange={this.onChangeTodoPriority}
            />
            <label className="form-control-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={this.state.todoPriority === "Medium"}
              onChange={this.onChangeTodoPriority}
            />
            <label className="form-control-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={this.state.todoPriority === "High"}
              onChange={this.onChangeTodoPriority}
            />
            <label className="form-control-label">High</label>
          </div>
          <div className="form-check">
            <input type="checkbox"
              className="form-check-input"
              id="completedCheckBox"
              name="completedCheckbox"
              onChange={this.onChangeCompleted}
              checked={this.state.todoCompleted}
              value={this.state.todoCompleted}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
          </label>
          </div>
          <br />
          <div className="form-group">
            <input type="submit" value="Update Todo" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
