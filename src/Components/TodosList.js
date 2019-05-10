import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Todo = props => (
  <tr>
    <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoDescription}</td>
    <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoResponsibility}</td>
    <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoPriority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}> Edit</Link>
    </td>
  </tr>
)

export default class TodosList extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }


  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/todos/`)
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  todoList() {
    return this.state.todos.map(function (cuurentTodo, i) {
      return <Todo todo={cuurentTodo} key={i} />
    })
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsibility</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </table>
      </div>
    );
  }
}
