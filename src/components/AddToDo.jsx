import React, { useState } from "react";

function AddToDo({addTask}) {
  const[input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();  
    addTask(input);
    setInput("")
  }

  function handleChange(e) {
    setInput(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        name="task"
        id="new-todo"
        value={input}
        placeholder="Write your next task"
        onChange={handleChange}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default AddToDo;
