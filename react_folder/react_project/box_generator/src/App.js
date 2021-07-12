import './App.css';
import React, { useState } from 'react';
import AddColor from './Components/addColor';
import ShowBox from './Components/addBox';

function App() {
  const [boxes, setBoxes] = useState([])

  return (
    <div className="App">
      <AddColor setBoxes={setBoxes} boxes={boxes} />
      {
        boxes.map((info, i) => <ShowBox key={i} info={info}/>)
      }
    </div>
  );
}

export default App;
