import React, {useState} from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import './Assets/scss/default.scss';
import './Assets/scss/shared.scss';
import { HashRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import VirtualSproul from './components/VirtualSproul/VirtualSproul';
import Story from './components/OurStory/Index';


function App() {

  return (
    <Router basename='/'>
      <div className="App">        
        <Route exact path="/" component={Landing} />
        <Route exact path="/discover" component={VirtualSproul} />
        <Route exact path="/story" component={Story} />
        {/* <Route exact path="/story" component={Story} /> */}
      </div>
    </Router>
  ); 
}

export default App;
