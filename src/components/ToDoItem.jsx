import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// An item on the todo list
function ToDoItem({ task, completed, id }) {
  return (
    <li className="todo_item">
      <div>
        <input
          type="checkbox"
          name={id}
          id={id}
          defaultChecked={completed}
        />
        <label className="todo-label" htmlFor={id}>
          {task}
        </label>
      </div>
      <div className="btn-group">
        <button className="btn">
          <span className="visually-hidden">{task}</span>
          <FontAwesomeIcon icon={faPenToSquare} />{" "}
        </button>
        <button className="btn">
          <span className="visually-hidden">{task}</span>
          <FontAwesomeIcon icon={faTrashCan} />{" "}
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
