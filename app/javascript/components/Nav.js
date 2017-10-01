import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/tasklist">Tasklist</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}
