import React from 'react';
import { Component } from 'react';
import './header.scss'
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="mobilegroup">
          <label className="logo"><Link to="/"><h1>BEAR WITH US</h1></Link></label>
          <label for="hamburger--check" className="hamburger">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        <nav>
          <input type="checkbox" id="hamburger--check"></input>
          <ul className="navmenu">
            <li><Link to="/discover">virtual sproul</Link></li>
            <li><Link to="/story">our story</Link></li>
            <li><Link to="#">about us</Link></li>
            <li><Link to="#">sign up</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

const headerStyle = {
  //background: 'grey',
  height: '100%',
  width: '100%',
  padding: '0px',
}

const imgStyle = {
  maxWidth: '80%'
}

export default Header;
