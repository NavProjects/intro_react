import React from 'react';
import { Router } from '@reach/router';
import LoginComponent from './Components/loginComponent';
import DashboardComponent from './Components/dashboardComponent';
import Home from './Components/homeComponent';

function App() {
  return (
    <div className="App">
        <Router >
            <Home path='/home'/>
            <DashboardComponent path="/:id"/>
            <LoginComponent path="/:word/:color1/:color2"/>
        </Router>
    </div>
  );
}



export default App;

