import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faCheck,
  faX,
} from "@fortawesome/free-solid-svg-icons";

// An item on the todo list
function ToDoItem({
  task,
  completed,
  id,
  toggleTaskCompleted,
  deleteTask,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);//Toggle between the edit and view state
  const [newName, setNewName] = useState(""); //Update the value of the object field from newName

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTask(id, newName);
    setNewName("");
    setIsEditing(false);
  }

  return (
    <li className="todo_item">
      {isEditing ? (
        /* EDIT STATE*/
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="edit-input"
            value={newName}
            type="text"
            onChange={handleChange}
            placeholder={task}
          />
          <div className="btn-group">
            <button
              className="btn"
              type="submit"
            >
              <span className="visually-hidden">{task}</span>
              <FontAwesomeIcon icon={faCheck} />{" "}
            </button>
            <button
              className="btn edit-cancel"
              type="button"
              onClick={() => setIsEditing(false)}
            >
              <span className="visually-hidden">{task}</span>
              <FontAwesomeIcon icon={faX} />{" "}
            </button>
          </div>
        </form>
      ) : (
        /*VIEW STATE*/
        <>
          <div>
            <input
              type="checkbox"
              name={id}
              id={id}
              defaultChecked={completed}
              onChange={() => toggleTaskCompleted(id)}
            />
            <label className="todo-label" htmlFor={id}>
              {task}
            </label>
          </div>
          <div className="btn-group">
            <button
              className="btn"
              type="button"
              onClick={() => setIsEditing(true)}
            >
              <span className="visually-hidden">{task}</span>
              <FontAwesomeIcon icon={faPenToSquare} />{" "}
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => deleteTask(id)}
            >
              <span className="visually-hidden">{task}</span>
              <FontAwesomeIcon icon={faTrashCan} />{" "}
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
