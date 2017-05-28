import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'

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
  render() {
    return (
      <div className="App">
        <div className="wrapper" style={styles.wrapper}>
          <LeftSide />
          <RightSide />
        </div>
      </div>
    );
  }
}

export default App;
