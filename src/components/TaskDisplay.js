import React, {useState, useEffect} from 'react';
import TaskInput from './TaskInput';
import TaskTable from './TaskTable';
import '../App.css';

const retrieveTaskData = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const TaskDisplay = () => {
  const [taskTitle, setTaskTitle] = useState(null);
  const [taskDate, setTaskDate] = useState(null);
  const [taskDescription, setTaskDescription] = useState(null);
  const [id, setId] = useState(Date.now())
  const [allTasks, setAllTasks] = useState(retrieveTaskData);

  const inputTaskTitle = (e) => {setTaskTitle(e.target.value)};
  const inputTaskDate = (e) => {setTaskDate(e.target.value)};
  const inputTaskDescription = (e) => {setTaskDescription(e.target.value)};

  const taskSubmit = (e) => {
    e.preventDefault();
    const taskData = {id,taskTitle, taskDate, taskDescription};
    setAllTasks([...allTasks, taskData]);
    setId(Date.now());

    setTaskTitle('');
    setTaskDate('');
    setTaskDescription('');
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allTasks))
  }, [allTasks])

  const inputRemove = (e) => {
    let numId = parseInt(e.target.id);
    let newTasks = [...allTasks].filter(task => {return task.id !== numId});
    setAllTasks(newTasks);
  }

  return (
    <div className='container'>
        <TaskInput 
            taskTitle={taskTitle}
            taskDate={taskDate}
            taskDescription={taskDescription}
            inputTaskTitle={inputTaskTitle}
            inputTaskDate={inputTaskDate}
            inputTaskDescription={inputTaskDescription}
            taskSubmit={taskSubmit}
            />
        <TaskTable allTasks={allTasks} inputRemove={inputRemove}/>
    </div>
  )
}

export default TaskDisplay