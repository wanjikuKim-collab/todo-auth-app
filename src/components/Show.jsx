import React from "react";

function Show({ filter, bool }) {
  return (
    <button type="button" aria-pressed={bool}>
      <span className="visually-hidden">Show </span>
      {filter} <span className="visually-hidden">tasks</span>
    </button>
  );
}

export default Show;
