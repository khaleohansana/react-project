import React, { Component } from 'react';
import './App.css';
import AboutMe from "./Pages/AboutMe.js";
import Resume from "./Pages/Resume.js";
import Projects from "./Pages/Projects.js";
import Bio from "./Pages/Bio.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-c1">
          <h1 className="App-title">Klair Bear</h1>
        </header>
        <div>
      
    
      </div>
      <Router>
        <div >
          <div className="App-intro">
          <nav className="nav-bar">
          <Link to='/'>AboutMe</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/Bio'>Bio</Link>
          </nav>
          </div>
          <Route exact path="/" component={AboutMe}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/bio" component={Bio}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
