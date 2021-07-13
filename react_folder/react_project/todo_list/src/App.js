import React, {useState} from 'react';
import './App.css';
import ListItems from './Components/ListComponent';
import TodoDisplay from './Components/DisplayComponent';

function App() {
  const [ lists, setLists ] = useState([])
  console.log(lists)

  const handleRemoval = id => {
    const removeById = lists.filter((lists, idx) => {return id != idx});
    setLists(removeById)
  }

  return (
    <div className="App">
      <ListItems setLists={setLists} lists={lists}/>
      {
        lists.map((item, i) => <TodoDisplay idx={i} key={i} setLists={setLists} lists={lists} {...item} checked={item.completed} remove={handleRemoval}/>)
      }
    </div>
  );
}

export default App;
