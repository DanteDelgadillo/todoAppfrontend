import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Pen from "../images/edit_pen.png";
import Trash from "../images/delete_trash.png";
import Circle from "../images/circle.png";
import CheckCircle from "../images/ok_circle_128_A0_Rectangle_14_pattern.png"

const Todo = props => (
  <tr >
    <td><img src={props.todo.todoCompleted ? CheckCircle : Circle} className="images" alt="Circle" /></td>
    <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoDescription}</td>
    <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoResponsibility}</td>
    <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoPriority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}> <img src={Pen} className="images" alt="pen" /></Link>
    </td>
    <td><button type="button" className="btn "><img src={Trash} className="images" alt="trash" /></button></td>
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
    axios.get(`${process.env.REACT_APP_API_URL}todos/`)
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
        <table className="table table-primary table-striped shadow " style={{ marginTop: 20 }}>
          <thead >
            <tr >
              <th></th>
              <th>Description</th>
              <th>Responsibility</th>
              <th>Priority</th>
              <th>Edit</th>
              <th>Delete</th>
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
