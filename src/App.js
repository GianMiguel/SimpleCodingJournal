import React from 'react';
import NavBar from './components/NavBar';
import ThoughtDisplay from './components/ThoughtDisplay';
import TaskDisplay from './components/TaskDisplay';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className='display'>
        <div><ThoughtDisplay /></div>
        <div><TaskDisplay /></div>
      </div>
    </div>
  )
}

export default App