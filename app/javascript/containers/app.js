import React from 'react';
import Nav from '../components/nav'
import { Route } from 'react-router-dom';

import Home from '../components/Home'
import Tasklist from '../components/Tasklist';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <main className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/tasklist" component={Tasklist}/>

        </main>
      </div>
    )
  }
}

export default App;
