import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          {/* nav for development only... may add in later as different menu style */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home/Feeling p1</Link>
              </li>
              <li>
                <Link to="/understanding">Understanding p2</Link>
              </li>
              <li>
                <Link></Link>
              </li>
              <li>
                <Link></Link>
              </li>
              <li>
                <Link></Link>
              </li>
            </ul>
          </nav>
          <br />
          {/* Order of form is Feeling, Understanding, Supported, Comments. Then a Review. */}
          <Route path={'/'} exact component={Feeling} />
          <Route path={'/understanding'} component={Understanding} />
        </div>
      </Router>
    );
  }
}

export default App;
