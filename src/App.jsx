import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo.jsx";
import TodoItem from "./components/ToDoItem.jsx";
import ToDoHero from "./components/ToDoHero.jsx";
import Show from "./components/Show.jsx";

function App() {
  return (
    <>
      <div className="app">
        <h1 className="title">KIMMY TODO</h1>
        <ToDoHero />
        <AddToDo />
        {/* filters the list */}
        <div className="filters">
          <Show filter="all" bool="true" />
          <Show filter="active" bool='false'/>
          <Show filter="completed" bool='false' />
        </div>
        <ul role="list" className="todo_list" aria-labelledby="list-heading">
          <TodoItem task="Finish ToDo App" bool={true}/>
          <TodoItem task="Develop the Museum mockup" />
          <TodoItem task="Research on rust frameworks" />
        </ul>
      </div>
    </>
  );
}

export default App;
