import React from "react";

function ToDoHero({length}) {
  return (
    <div className="hero">
      <h2>
        Task Done
        <br />
        <span>Keep it Up!</span>
      </h2>
      <p>1/{length}</p>
    </div>
  );
}

export default ToDoHero;
