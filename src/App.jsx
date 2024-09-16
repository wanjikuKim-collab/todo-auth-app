import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo.jsx";
import TodoItem from "./components/ToDoItem.jsx";
import ToDoHero from "./components/ToDoHero.jsx";
import Show from "./components/Show.jsx";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState([]);
  let defaultTask = [
    {
      id: 0,
      name: "Finish ToDo App",
      completed: true,
    },
    {
      id: 1,
      name: "Develop the Museum mockup",
      completed: false,
    },
    {
      id: 2,
      name: "Research on rust frameworks",
      completed: false,
    },
  ];

  // callback prop function to add task from the form
  function addTask(name) {
    const newTask = { id: nanoid(), name, completed: false };
    setTasks([...tasks, newTask]);
  }

  // function for conditional rendering of the default task list or the new task list
  function renderTaskList(taskList) {
    return taskList.map((task) => (
      <TodoItem
        key={task.id}
        id={task.id}
        task={task.name}
        completed={task.completed}
        toggleTaskCompleted ={toggleTaskCompleted}
      />
    ));
  }

  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map((task)=>{
     if(id === task.id )({ ...task, completed: !task.completed })
      return task;
    });
    return setTasks(updatedTasks);
  }

  let taskLength = tasks.length === 0 ? defaultTask.length : tasks.length;
  console.log("Task length :",taskLength)
  return (
    <>
      <div className="app">
        <h1 className="title">KIMMY TODO</h1>
        <ToDoHero length = {taskLength}/>
        <AddToDo addTask={addTask} />
        {/* filters the list */}
        <div className="filters">
          <Show filter="all" bool="true" />
          <Show filter="active" bool="false" />
          <Show filter="completed" bool="false" />
        </div>
        <ul role="list" className="todo_list" aria-labelledby="list-heading">
          {tasks.length === 0
            ? (renderTaskList(defaultTask))
            : (renderTaskList(tasks))}
        </ul>
      </div>
    </>
  );
}

export default App;
