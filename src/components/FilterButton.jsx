import React from "react";

function FilterButton({ name, isPressed, onClick }) {


  return (
    <button onClick={onClick} type="button" aria-pressed={isPressed}>
      <span className="visually-hidden">Show </span>
      <span>{name} </span>
      <span className="visually-hidden">tasks</span>
    </button>
  );
}

export default FilterButton;
