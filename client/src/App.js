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
    width: '90%',
    padding: '0 20px',
    flex: 1,
    justifyContent: 'flex-start'
  },
  leftSide: {
    width: '15%',
    display: 'table',
    float: 'left',
    position: 'absolute',
    background: '#ccc',
    overflow: 'hidden',
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
    this.state = {
      userlogin: false
    }
  }

  componentWillMount() {
    if (localStorage.getItem('token')) {
      this.setState({userlogin: true})
    }
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
                    { !this.state.userlogin ? '' : <li style={{ padding: 10 }}><Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link></li> }
                    <li style={{ padding: 10 }}><Link to="/article" style={{ textDecoration: 'none' }}>Article</Link></li>
                    <li style={{ padding: 10 }}>Pengaturan</li>
                  </ul>
                </div>
              </div>
              <div className="rightSide" style={styles.rightSide}>
                <div className="nav">
                  <Switch>
                    <Route exact path="/" component={Home}
                    />
                    { !this.state.userlogin ? <Route path="/login" component={Login}/> :  <Route path="/profile" component={Profile} /> }
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
