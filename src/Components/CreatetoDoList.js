import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default class CreatetoDoList extends Component {
  constructor() {
    super();

    this.state = {

      todoDescription: "",
      todoResponsibility: "",
      todoPriority: "",
      todoCompleted: false

    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
  }
  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  };

  onClick(e) {
    e.preventDefault();
    const newTodo = {
      todoDescription: this.state.todoDescription,
      todoResponsibility: this.state.todoResponsibility,
      todoPriority: this.state.todoPriority,
      todoCompleted: this.state.todoCompleted,
    }
    axios.post(`${process.env.REACT_APP_API_URL}todos/add`, newTodo)
      .then(res => console.log(res.data), Swal.fire("Created to do!", "", "success"), setTimeout(function () { window.location.href = "/" }, 1000));

    this.setState({
      todoDescription: "",
      todoResponsibility: "",
      todoPriority: "",
      todoCompleted: false
    })

  }

  onChangeTodoPriority(e) {
    this.setState({
      todoPriority: e.target.value
    })
  }

  render() {
    return (
      <div style={{ marginTop: 20 }} className="container1 shadow">
        <h3 className="fontstyle2">Create New Todo: </h3>
        <form onSubmit={this.onClick}>
          <div className="form-group">
            <label className="fontstyle2">Description:</label>
            <input type="text"
              name="todoDescription"
              className="form-control "
              value={this.state.todoDescription}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="fontstyle2">Responsibility:</label>
            <input type="text"
              name="todoResponsibility"
              className="form-control"
              value={this.state.todoResponsibility}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todoPriority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-control-label fontstyle2">Low</label>
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
              <label className="form-control-label fontstyle2">Medium</label>
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
              <label className="form-control-label fontstyle2">High</label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create ToDo" className="btn btn-primary buttonFont" />
          </div>
        </form>
      </div>
    );
  }
}
