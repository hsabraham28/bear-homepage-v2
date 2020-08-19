import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './Assets/scss/fonts/League-Gothic/LeagueGothic-Regular.otf';
import './Assets/scss/fonts/glacial-indifference/GlacialIndifference-Bold.otf';
import './Assets/scss/fonts/glacial-indifference/GlacialIndifference-Italic.otf';
import './Assets/scss/fonts/glacial-indifference/GlacialIndifference-Regular.otf';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'mdbreact/dist/css/mdb.css';


ReactDOM.render(
  // fixme might cause trouble for Virtual Sproul
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
