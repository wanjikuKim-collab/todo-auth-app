import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// An item on the todo list
function ToDoItem({ task, bool }) {
  return (
    <li className="todo_item">
      <div>
        <input type="checkbox" name="todo" id="todo" defaultChecked={bool} />
        <label className="todo-label" htmlFor="todo">
          {task}
        </label>
      </div>
      <div className="btn-group">
        <button className="btn">
          <span className="visually-hidden">Edit</span>
          <FontAwesomeIcon icon={faPenToSquare} />{" "}
        </button>
        <button className="btn">
          <span className="visually-hidden">Delete</span>
          <FontAwesomeIcon icon={faTrashCan} />{" "}
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
