import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div className="">
        <h1 className="">
          Welcome to DB Campout Planner
        </h1>
        <h2>
          <NavLink to="/tasklist">Start with the Tasklist</NavLink>
        </h2>
      </div>
    );
  }
}
