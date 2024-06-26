import './App.css';
import { useState, useCallback } from 'react';
import Header from './component/Header';

function App() {
  const [number,setNumber ] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => { 
     setNumber((prevState) => prevState+1)
  }, []);


  return (
    <div className="App">
      <Header increment= {increment}></Header>
     
      <hr></hr>
      <h1>{number}</h1>
      
      <br></br>
      <input value={text} onChange={({target}) => setText(target.value)}></input>
     
    </div>
  );
}


export default App;
