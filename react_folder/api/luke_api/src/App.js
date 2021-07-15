import React from "react";
import './App.css';
import SearchComponent from "./Components/searchComponent";
import DisplayComponent from "./Components/DisplayComponent";
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
      <SearchComponent/>
      <Router>
        <DisplayComponent path= "/:info/:id"/>
      </Router>
    </div>
  );
}

export default App;
