import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateToDo from "./Components/CreatetoDoList";
import EditTodo from "./Components/EditToDoList";
import TodoList from "./Components/TodosList";

import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />


        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateToDo} />
      </div>
    </Router >
  );
}

export default App;
