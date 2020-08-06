import React from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Bar from './components/navbarComponent/navigationBar';
import Highlight from './components/highlightComponent/highlight';
import Action from './components/actionComponent/action';
import Logos from './components/logosComponent/logos';

function App() {
  return (
    <div className="App">
      <Header />
      <Bar />
      <Highlight />
      <div className="togeth">
      <Action />
      <Logos />
      </div>
    </div>
  );
}

export default App;
