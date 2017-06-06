import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import Home from './components/Home'
import Profile from './components/Profile'

const styles = {
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  leftSide: {
    width: '20%',
    display: 'table',
    float: 'left'
  },
  rightSide: {
    width: '80%',
    display: 'table',
    float: 'right'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
      <Router>
        <div className="wrapper" style={styles.wrapper}>
            <div className="leftSide" style={styles.leftSide}>
              <div className="nav">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/article">Article</Link></li>
                </ul>
              </div>
            </div>
            <div className="rightSide" style={styles.rightSide}>
              <div className="nav">
                <Switch>
                  <Route exact path="/" component={Home}
                  />
                  <Route path="/profile" component={Profile}/>
                </Switch>
              </div>
            </div>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
