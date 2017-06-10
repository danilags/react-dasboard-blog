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
import TopNav from './components/TopNav'
import Login from './components/Login'
import Register from './components/Register'
import Article from './components/Article'

const styles = {
  wrapper: {
    margin: '0 auto',
    display: 'block',
    width: '80%',
    padding: '0 20px',
    flex: 1,
    justifyContent: 'flex-start'
  },
  leftSide: {
    width: '15%',
    display: 'table',
    float: 'left'
  },
  rightSide: {
    width: '85%',
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
              <TopNav />
              <div className="leftSide" style={styles.leftSide}>
                <div className="nav">
                  <ul style={{ listStyle: 'none' }}>
                    <li style={{ padding: 10 }}><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li style={{ padding: 10 }}><Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link></li>
                    <li style={{ padding: 10 }}><Link to="/article" style={{ textDecoration: 'none' }}>Article</Link></li>
                  </ul>
                </div>
              </div>
              <div className="rightSide" style={styles.rightSide}>
                <div className="nav">
                  <Switch>
                    <Route exact path="/" component={Home}
                    />
                    <Route path="/profile" component={Profile}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/article" component={Article}/>
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
