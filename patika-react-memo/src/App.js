import './App.css';
import { useState, useMemo } from 'react';
import Header from './component/Header';

function App() {
  const [number,setNumber ] = useState(0);
  const [text, setText] = useState("");

  const data = useMemo(() => {
    return calculateObject(number);

  }, [number]);
  // const data = calculateObject();

  return (
    <div className="App">
      <Header data= {data}></Header>
     
      <hr></hr>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <br></br>
      <input value={text} onChange={({target}) => setText(target.value)}></input>
     
    </div>
  );
}

function calculateObject (number) {
  console.log('calculating...');
  for (let i= 0; i < 10000; i++) 
  console.log('calculating completed!');
  return { name: 'Hatice', number};
}

export default App;
