import React from 'react';
import { Component } from 'react';
import './header.scss'
import { Link, withRouter } from "react-router-dom";


class Header extends Component {
  // Remove trapezoids from mobile menu; from https://stackoverflow.com/questions/48669646/how-to-add-or-remove-a-classname-when-screen-size-change-in-react
  constructor(props) {
    super(props);
    this.state = {isMobile: window.innerWidth < 1000}
    // hides mobile menu when nav item is clicked
    this.mobileRef = React.createRef();
    this.hideMobile = this.hideMobile.bind(this);
        

    this.headerStyle = this.props.isLanding ? {
      background: 'rgba(0, 0, 0, 0)',
    } : {
      background: '#244067',
    }
    
  }

  hideMobile(e) {
    this.mobileRef.current.checked = !this.mobileRef.current.checked;
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 1100 
      });
    }, false);
  }

  render() {
    const trapezoidness = this.state.isMobile ? '' : 'trapezoid';
    return (
      <header className="header" style={this.headerStyle}>
        <div className="mobilegroup">
          <label className="logo"><Link to="/"><h1>BEAR BEGINNINGS</h1></Link></label>
          <label htmlFor="hamburger--check" className="hamburger">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        <nav>
          <input type="checkbox" id="hamburger--check" ref={this.mobileRef}></input>
          <ul className="navmenu">
            <li className={trapezoidness}><Link onClick={this.hideMobile} to="/discover">virtual sproul</Link></li>
            <li className={trapezoidness}><Link onClick={this.hideMobile} to="/story">our story</Link></li>
            <li className={trapezoidness}><Link onClick={this.hideMobile} to="/about">about us</Link></li>
            <li className={trapezoidness}><a onClick={this.hideMobile} href="mailto:bearbeginningsberkeley@gmail.com">contact us</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}



const imgStyle = {
  maxWidth: '80%'
}

export default Header;