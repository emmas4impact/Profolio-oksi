import React from 'react';
import Home from './components/Home'
import service from './components/service'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import work from './components/work';
import Index from './components/Index';
import Contact from './components/contact';
import About from './components/About';
import Blog from './components/blog';
import Blog2 from './components/blog2';
import Blog1 from './components/blog1';

function App() {
  return (
    <div className="App">
       <Router>
        <Home path="/home"  exact component={Home}/>
        <Route path="/index"  exact component={Index}/>
        <Route path="/service"  exact component={service}/>
        <Route path="/work"  exact component={work}/>
        <Route path="/contact"  exact component={Contact}/>
        <Route path="/about"  exact component={About}/>
        <Route path="/blog"  exact component={Blog}/>
        <Route path="/blog2"  exact component={Blog2}/>
        <Route path="/blog1"  exact component={Blog1}/>
      </Router>
    </div>
  );
}

export default App;
