import './App.css';
import { useState } from 'react';
import Header from './component/Header';

function App() {
  const [number,setNumber ] = useState(0);



  return (
    <div className="App">
      <Header></Header>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
     
    </div>
  );
}

export default App;
