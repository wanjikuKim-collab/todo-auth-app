import React, { useState } from 'react'

function AddToDo() {
  const[text, setText] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='task' value={text} placeholder='Write your next task' className='input'/>
      <button type='submit'>+</button>
    </form>
  )
}

export default AddToDo