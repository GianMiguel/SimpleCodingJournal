import React from 'react';
import '../App.css';

const ThoughtTable = ({allThoughts, inputRemove}) => {
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
            {allThoughts.map((thought) => 
            (<tr>
              <td>{thought.id}</td>
              <td>{thought.thoughtTitle}</td> 
              <td>{thought.thoughtDate}</td> 
              <td>{thought.thoughtDescription}</td> 
              <td><button onClick={inputRemove} id={thought.id}>Delete</button></td> 
            </tr>)
        )}


        </table>
    </div>
  )
}

export default ThoughtTable