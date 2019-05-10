import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateToDo from "./Components/CreatetoDoList";
import EditTodo from "./Components/EditToDIList";
import TodoList from "./Components/TodosList";
import Logo from "./logo.svg";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a className="navbar-brand"> */}
          <img src={Logo} width="50" height="50" alt="logo" />
          {/* </a> */}
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
        </nav>

        <h2>Mern Stack to do app</h2>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateToDo} />
      </div>
    </Router >
  );
}

export default App;
