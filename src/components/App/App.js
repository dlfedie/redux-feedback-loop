import React, { Component } from 'react';
// import axios from 'axios'; //may not need this here
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
import Admin from '../Admin/Admin';

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
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home/Feeling p1</Link>
              </li>
              <li>
                <Link to="/understanding">Understanding p2</Link>
              </li>
              <li>
                <Link to="/supported">Supported p3</Link>
              </li>
              <li>
                <Link to="/comments">Comments p4</Link>
              </li>
              <li>
                <Link to="/review">Review p5</Link>
              </li>
              <li>
                <Link to="/submitted">Submitted p6</Link>
              </li>
              <li>
                <Link to="/admin">Admin p7</Link>
              </li>
            </ul>
          </nav> */}
          <br />
          {/* Order of form is Feeling, Understanding, Supported, Comments. Then a Review. */}
          <Route path={'/'} exact component={Feeling} />
          <Route path={'/understanding'} component={Understanding} />
          <Route path={'/supported'} component={Supported} />
          <Route path={'/comments'} component={Comments} />
          <Route path={'/review'} component={Review} />
          <Route path={'/submitted'} component={Submitted} />
          <Route path={'/admin'} component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
