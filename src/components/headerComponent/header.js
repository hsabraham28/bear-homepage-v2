import React from 'react';
import { Component } from 'react';
import dot from './dotts.png';
import NavBar from './NavBar';
import { Nav } from 'reactstrap';
import logo from './logo.jpg';


class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <div className="topHeader">
          {/* Logo */}
          <div className="logo">
              <a href="/">
                <img src={logo} style={imgStyle} />
              </a>
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
            <div class="line1"></div>
            <div class="line2"></div>
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

const h1Style = { // fixme delete when placeholder is gone
  marginBottom: '0px',
}

const imgStyle = {
  maxWidth: '80%'
}

const navBarStyle = {
  flex: '2',

}

export default Header;
