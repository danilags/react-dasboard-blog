import React from 'react'

import Profile from '../Profile'
import RightSide from '../RightSide'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


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

class LeftSide extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div className="leftSide" style={styles.leftSide}>
        <Router>
          <div className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/article">Article</Link></li>
            </ul>
          </div>
        </Router>

      </div>
    )
  }
}

export default LeftSide