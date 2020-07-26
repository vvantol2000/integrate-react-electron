import './App.css';

import { Alignment, Button, Navbar } from '@blueprintjs/core';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

import React from 'react';
import logo from './logo.svg';

function Index() {
  return <h2>Home</h2>  
}

function Files() {
  return <h2>Files</h2>
}
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprintjs</Navbar.Heading>
          <Navbar.Divider/>

   
            <Link className="bp3-button bp3-minimal bp3-icon-home" to="/">Home</Link>
  
         
            <Link className="bp3-button bp3-minimal bp3-icon-document" to="/files">Files</Link>
        
        </Navbar.Group>
      </Navbar>
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route path="/" exact component={Index}/>
        <Route path="/files" component={Files}/>
      </header>
    </div>
    </Router>
    
  );
}

export default App;
