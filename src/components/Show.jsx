import React from 'react'

function Show({filter, bool}) {
  return (
    <button type='button' aria-pressed={bool}>Show {filter} tasks</button>
  )
}

export default Show