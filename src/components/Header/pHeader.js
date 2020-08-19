import React from 'react';
import { Component } from 'react';
import dot from './dotts.png';
import NavBar from './pNavBar';
import logo from './logo.jpg';
import { Link } from "react-router-dom";


class pHeader extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <div className="topHeader">
          {/* Logo */}
          <div className="logo">
              <Link to="/">
                <img src={logo} style={imgStyle} alt="Bear with us" />
              </Link>
            </div>

          {/* Dots */}
          <div className="dots">
            <img src={dot} alt="pattern" />
          </div>

          {/* Uni name */}
          <div className="ucb">
                University of California, Berkeley
          </div>
        </div>

        {/* Navigation bar */}
        <div className="navMain">
          <div className="lines">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
          <NavBar />
        </div>
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

export default pHeader;
