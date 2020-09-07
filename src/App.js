import React, {useState} from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import './Assets/scss/default.scss';
import './Assets/scss/shared.scss';
import { HashRouter as Router, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import VirtualSproul from './components/VirtualSproul/VirtualSproul';
import Story from './components/OurStory/Index';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <Router basename='/'>
      <div className="App">        
        <Route exact path="/" component={Landing} />
        <Route exact path="/discover" component={VirtualSproul} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  ); 
}

export default App;
