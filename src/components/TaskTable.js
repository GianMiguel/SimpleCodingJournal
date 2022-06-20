import React from 'react';
import '../App.css';

const TaskTable = ({allTasks, inputRemove}) => {
  return (
    <div >
        <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            {allTasks.map((task) => 
            (<tr>
              <td>{task.id}</td>
              <td>{task.taskTitle}</td> 
              <td>{task.taskDate}</td> 
              <td>{task.taskDescription}</td> 
              <td><button onClick={inputRemove} id={task.id}>Delete</button></td> 
            </tr>)
        )}


        </table>
    </div>
  )
}

export default TaskTable