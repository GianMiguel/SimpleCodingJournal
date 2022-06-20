import React from 'react';

const TaskInput = ({
            taskTitle,
            taskDate,
            taskDescription,
            inputTaskTitle,
            inputTaskDate,
            inputTaskDescription,
            taskSubmit}) => {

  return (
    <div>
        <h1>New Task</h1>
        <form action='' onSubmit={taskSubmit}>
            <input type="text" name='Title' id='Title' placeholder='Title' value={taskTitle} onChange={inputTaskTitle} required />
            <input type="datetime-local" name='date' id='date' placeholder='Date' value={taskDate} onChange={inputTaskDate} required/>
            <textarea name='description' id='description' placeholder='Description' value={taskDescription} onChange={inputTaskDescription} required maxLength={100}/>

            <button type='submit'>Save</button>
        </form>
    </div>
  )
}

export default TaskInput