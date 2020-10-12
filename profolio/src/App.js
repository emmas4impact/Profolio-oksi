import React from 'react';
import Home from './components/Home'
import service from './components/service'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import work from './components/work';
import Index from './components/Index';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
       <Router>
        <Home path="/home"  exact component={Home}/>
        <Route path="/index"  exact component={Index}/>
        <Route path="/service"  exact component={service}/>
        <Route path="/work"  exact component={work}/>
        <Route path="/contact"  exact component={Contact}/>
      
      </Router>
    </div>
  );
}

export default App;
