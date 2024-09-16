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
        deleteTask = {deleteTask}
        editTask = {editTask}
      />
    ));
  }
  
  let selectList = tasks.length=== 0? defaultTask : tasks
  console.log("Tasks isChecked b4 function call", selectList)
  // Changing task state to complete
  function toggleTaskCompleted(id){
      setTasks( selectList.map((task)=>{
       if(id === task.id ){
        return { ...task, completed: !task.completed }// Return updated task
       }
        return task; // Return task unchanged if ID doesn't match
      }));
  }
  console.log("Tasks isChecked after function call", selectList)


  // Filter task you want to delete out. Use Id to identify task, then update state using setTask
  function deleteTask(id){
    // console.log(id)
    const filteredTasks = selectList.filter(task=> task.id !== id);
    return setTasks(filteredTasks)
  }


  // function to edit task
  function editTask(id){
    console.log(id)
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
          {renderTaskList(selectList)}
        </ul>
      </div>
    </>
  );
}

export default App;
