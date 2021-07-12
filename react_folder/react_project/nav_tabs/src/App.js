import React from 'react';
import './App.css';
import Tabs from './Components/Tabs';

function App() {

  const tabs = [
    {
    title: "tab1",
    content: "tab 1 content"
  },
    {
    title: "tab2",
    content: "tab 2 content"
  },
    {
    title: "tab3",
    content: "tab 3 content"
  }
]

  return (
    <div className="App">
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
