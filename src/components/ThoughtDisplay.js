import React, {useState, useEffect} from 'react';
import ThoughtInput from './ThoughtInput';
import ThoughtTable from './ThoughtTable';
import '../App.css';

const retrieveThoughtData = localStorage.getItem('thoughts') ? JSON.parse(localStorage.getItem('thoughts')) : [];
const ThoughtDisplay = () => {
  const [thoughtTitle, setThoughtTitle] = useState(null);
  const [thoughtDate, setThoughtDate] = useState(null);
  const [thoughtDescription, setThoughtDescription] = useState(null);
  const [id, setId] = useState(Date.now())
  const [allThoughts, setAllThoughts] = useState(retrieveThoughtData);

  const inputThoughtTitle = (e) => {setThoughtTitle(e.target.value)};
  const inputThoughtDate = (e) => {setThoughtDate(e.target.value)};
  const inputThoughtDescription = (e) => {setThoughtDescription(e.target.value)};

  const thoughtSubmit = (e) => {
    e.preventDefault();
    const thoughtData = {id,thoughtTitle, thoughtDate, thoughtDescription};
    setAllThoughts([...allThoughts, thoughtData]);
    setId(Date.now());

    setThoughtTitle('');
    setThoughtDate('');
    setThoughtDescription('');
  }

  useEffect(() => {
    localStorage.setItem('thoughts', JSON.stringify(allThoughts))
  }, [allThoughts])

  const inputRemove = (e) => {
    let numId = parseInt(e.target.id);
    let newThoughts = [...allThoughts].filter(thought => {return thought.id !== numId});
    setAllThoughts(newThoughts);
  }

  return (
    <div className='container'>
        <ThoughtInput 
            thoughtTitle={thoughtTitle}
            thoughtDate={thoughtDate}
            thoughtDescription={thoughtDescription}
            inputThoughtTitle={inputThoughtTitle}
            inputThoughtDate={inputThoughtDate}
            inputThoughtDescription={inputThoughtDescription}
            thoughtSubmit={thoughtSubmit}
            />
        <ThoughtTable allThoughts={allThoughts} inputRemove={inputRemove}/>
    </div>
  )
}

export default ThoughtDisplay