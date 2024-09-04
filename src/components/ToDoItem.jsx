import React from "react";

// An item on the todo list
function ToDoItem({ task, bool }) {
  return (
    <li className="todo">
      <input type="checkbox" name="todo" id="todo" defaultChecked={bool}/>
      <label className="todo-label" htmlFor="todo">
        {task}
      </label>
      <div className="btn-group">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </li>
  );
}

export default ToDoItem;
