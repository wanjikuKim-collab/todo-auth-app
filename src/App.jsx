import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo.jsx";
import TodoItem from "./components/ToDoItem.jsx";
import ToDoHero from "./components/ToDoHero.jsx";
import FilterButton from "./components/FilterButton.jsx";
import { nanoid } from "nanoid";

/* DEFINING OUR FILTERS*/
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

// Creates an array of the keys
const FILTER_NAMES = Object.keys(FILTER_MAP);
console.log(FILTER_NAMES); // Output: ["All", "Active", "Completed"]

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All"); //Adds a filter hook

  // Renders filters
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      onClick={()=>setFilter(name)}
    />
  ));
  

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
    return taskList
      .filter(FILTER_MAP[filter])
      .map((task) => (
        <TodoItem
          key={task.id}
          id={task.id}
          task={task.name}
          completed={task.completed}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ));
  }

  let selectList = tasks.length === 0 ? defaultTask : tasks;
  console.log("Tasks isChecked b4 function call", selectList);
  // Changing task state to complete
  function toggleTaskCompleted(id) {
    setTasks(
      selectList.map((task) => {
        if (id === task.id) {
          return { ...task, completed: !task.completed }; // Return updated task
        }
        return task; // Return task unchanged if ID doesn't match
      })
    );
  }
  console.log("Tasks isChecked after function call", selectList);

  // Filter task you want to delete out. Use Id to identify task, then update state using setTask
  function deleteTask(id) {
    // console.log(id)
    const filteredTasks = selectList.filter((task) => task.id !== id);
    return setTasks(filteredTasks);
  }

  // function to edit task
  function editTask(id, newName) {
    const updatedTask = selectList.map((task) => {
      return id === task.id ? { ...task, name: newName } : task;
    });
    return setTasks(updatedTask);
  }

  let taskLength = tasks.length === 0 ? defaultTask.length : tasks.length;
  console.log("Task length :", taskLength);
  return (
    <>
      <div className="app">
        <h1 className="title">KIMMY TODO</h1>
        <ToDoHero length={taskLength} />
        <AddToDo addTask={addTask} />
        {/* filters the list */}
        <div className="filters">{filterList}</div>
        <ul role="list" className="todo_list" aria-labelledby="list-heading">
          {renderTaskList(selectList)}
        </ul>
      </div>
    </>
  );
}

export default App;
