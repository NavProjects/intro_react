import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Subcontent from './Components/Subcontent';
import Advertisement from './Components/Advertisement';


function App() {
  return (
      <div className="App-container main">
        <Header />
        <div className="flex">
          <Navigation />
          <Main>
            <Subcontent />
            <Subcontent />
            <Subcontent />
            <Advertisement />
          </Main>
        </div>
      </div>
  );
}

export default App;

