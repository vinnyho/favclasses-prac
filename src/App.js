import './App.css';
import React, { useState } from 'react';
import Api from './Api';

function App() {
  const [text, setText] = useState(''); 
  const [classes, setClasses] = useState([]);
  const [classID, setClassid] = useState('');

  const handleText = (event) => {
    setText(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!classes.includes(text)) {
      setClasses(classes.concat(text));
      setClassid(text); 
      setText('');
    }
    console.log(classes);
  };

  return (

      <div className="App">
        <h1>ICS API Practice</h1>
 
      <div>
        <form onSubmit={handleSubmit} >
          <input type="text" value={text} onChange={handleText} /> 
          <button type="submit">Submit</button>
        </form>
        <div>
          {classes.map((classID, index) => (
            <Api key={index} classid={classID} />
          ))}
        </div>
      </div>
      </div>
 
 
  );
}

export default App;
