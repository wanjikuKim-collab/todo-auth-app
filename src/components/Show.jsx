import React from "react";

function Show({ filter, bool }) {
  function onclick(){
    alert('hi')
  }
  return (
    <button onClick={onclick} type="button" aria-pressed={bool}>
      <span className="visually-hidden">Show </span>
      <span>{filter} </span>
      <span className="visually-hidden">tasks</span>
    </button>
  );
}

export default Show;
