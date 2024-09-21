import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faCheck,
  faX,
} from "@fortawesome/free-solid-svg-icons";


//custom hook that tracks previous edit value across renders. 
function usePrevious(value){
  const ref = useRef();
  useEffect(()=>{
    console.log("custom hook")
    ref.current = value;
  });
  return ref.current;
}

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

  const wasEditing = usePrevious(isEditing);
  console.log(wasEditing)
  console.log(isEditing)

  // Targeting DOM elements
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTask(id, newName);
    setNewName("");
    setIsEditing(false);
  }

  useEffect(()=>{
    if(!wasEditing && isEditing){
      console.log("Focusing input field")
      editFieldRef.current.focus();
    } else if(wasEditing && !isEditing){
      editButtonRef.current.focus();    
    }
  },[wasEditing,isEditing])

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
            ref= {editFieldRef}
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
              ref={editButtonRef}
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
