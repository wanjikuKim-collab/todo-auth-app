import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo.jsx";
import TodoItem from "./components/ToDoItem.jsx";
import ToDoHero from "./components/ToDoHero.jsx";
import Show from "./components/Show.jsx";
import {nanoid} from "nanoid";

function App() {
  const[tasks, setTasks] = useState([])
  // let task = [
  //   {
  //     id: 0,
  //     name: "Finish ToDo App",
  //     completed: true,
  //   },
  //   {
  //     id: 1,
  //     name: "Develop the Museum mockup",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Research on rust frameworks",
  //     completed: false,
  //   },
  // ];

  function addTask(name){
    const newTask = { id:nanoid(), name, completed: false};
    setTasks([...tasks, newTask])
    }

  return (
    <>
      <div className="app">
        <h1 className="title">KIMMY TODO</h1>
        <ToDoHero />
        <AddToDo addTask={addTask}/>
        {/* filters the list */}
        <div className="filters">
          <Show filter="all" bool="true" />
          <Show filter="active" bool="false" />
          <Show filter="completed" bool="false" />
        </div>
        <ul role="list" className="todo_list" aria-labelledby="list-heading">
          {tasks?.map((task) => (
            <TodoItem
              key={task.id}
              id={task.id}
              task={task.name}
              completed={task.completed}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
