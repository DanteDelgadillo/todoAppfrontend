import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateToDo from "./Components/CreatetoDoList";
import EditTodo from "./Components/EditToDIList";
import TodoList from "./Components/TodosList";
import Logo from "./logo.svg";
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <navbar className="navbarcolor navbar navbar-expand-lg navbar-light">

          <img src={Logo} width="50" height="50" alt="logo" />

          <Link to="/" className="nav-link">
            Todo List
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-iteam">
                <Link to="/create" className="nav-link">
                  Create Todos
                </Link>
              </li>

            </ul>
          </div>
        </navbar>
        <Navbar />


        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateToDo} />
      </div>
    </Router >
  );
}

export default App;
