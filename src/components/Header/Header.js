import React from 'react';
import { Component } from 'react';
import './header.scss'
import { Link } from "react-router-dom";


class Header extends Component {
  // Remove trapezoids from mobile menu; from https://stackoverflow.com/questions/48669646/how-to-add-or-remove-a-classname-when-screen-size-change-in-react

  constructor(props) {
    super(props);
    this.state = {isMobile: window.innerWidth < 1000}
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 1000
      });
    }, false);
  }

  render() {
    const trapezoidness = this.state.isMobile ? '' : 'trapezoid';
    return (
      <header className="header">
        <div className="mobilegroup">
          <label className="logo"><Link to="/"><h1>BEAR BEGINNINGS</h1></Link></label>
          <label htmlFor="hamburger--check" className="hamburger">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        <nav>
          <input type="checkbox" id="hamburger--check"></input>
          <ul className="navmenu">
            <li className={trapezoidness}><Link to="/discover">virtual sproul</Link></li>
            <li className={trapezoidness}><Link to="/story">our story</Link></li>
            <li className={trapezoidness}><Link to="#">about us</Link></li>
            <li className={trapezoidness}><Link to="#">sign up</Link></li>
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