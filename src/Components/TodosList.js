import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Pen from "../images/edit_pen.png";
import Trash from "../images/delete_trash.png";
import Circle from "../images/circle.png";
import CheckCircle from "../images/ok_circle_128_A0_Rectangle_14_pattern.png"

const Todo = props => (
  <tr >
    <td><button type="button" className="btn" onClick={() => props.toggleTodo(props.todo._id)} ><img src={props.todo.todoCompleted ? CheckCircle : Circle} className="images" alt="Circle" /></button></td>
    <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoDescription}</td>
    <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoResponsibility}</td>
    <td className={props.todo.todoCompleted ? "completed" : ""}>{props.todo.todoPriority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}> <img src={Pen} className="images" alt="pen" /></Link>
    </td>
    <td><button type="button" onClick={() => props.deletetodo(props.todo._id)} className="btn "><img src={Trash} className="images" alt="trash" /></button></td>
  </tr>
)

export default class TodosList extends Component {
  constructor() {
    super();
    this.state = {
      todosObjects: {},
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

  toggleTodo(todoid) {

    const newTodos = this.state.todos.map(todo => {

      if (todo._id !== todoid) {

        return todo


      }

      return {
        ...todo,
        todoCompleted: !todo.todoCompleted,



      }


    })

    this.setState({
      todos: newTodos,
      // todosObjects: todo
    })
    // console.log(newTodos)
    // axios.put(`${process.env.REACT_APP_API_URL}todos/update/` + todoid,this.state.todosObjects)
    //   .then(res => console.log(res.data))
    //   .catch(function (error) {
    //     console.log(error);
    //   })


  }

  deletetodo(todoid) {
    const newTodos = this.state.todos.filter(todo => todo._id !== todoid)

    this.setState({
      todos: newTodos
    })
    console.log(todoid)
    axios.delete(`${process.env.REACT_APP_API_URL}todos/delete/` + todoid)
      .then(res => console.log(res.data))
      .catch(function (error) {
        console.log(error);
      })

  }

  todoList() {
    return this.state.todos.map((cuurentTodo, i) => {
      return <Todo todo={cuurentTodo} deletetodo={this.deletetodo.bind(this)} toggleTodo={this.toggleTodo.bind(this)} key={i} />
    })
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <div className="table-responsive">
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
      </div>
    );
  }
}
