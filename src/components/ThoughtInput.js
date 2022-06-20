import React from 'react';

const ThoughtInput = ({
            thoughtTitle,
            thoughtDate,
            thoughtDescription,
            inputThoughtTitle,
            inputThoughtDate,
            inputThoughtDescription,
            thoughtSubmit}) => {

  return (
    <div>
        <h1>New Thoughts</h1>
        <form action='' onSubmit={thoughtSubmit}>
            <input type="text" name='Title' id='Title' placeholder='Title' value={thoughtTitle} onChange={inputThoughtTitle} required />
            <input type="datetime-local" name='date' id='date' placeholder='Date' value={thoughtDate} onChange={inputThoughtDate} required/>
            <textarea name='description' id='description' placeholder='Description' value={thoughtDescription} onChange={inputThoughtDescription} required maxLength={100}/>

            <button type='submit'>Save</button>
        </form>
    </div>
  )
}

export default ThoughtInput