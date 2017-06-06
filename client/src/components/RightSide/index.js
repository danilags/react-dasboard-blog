import React from 'react'
import Profile from '../Profile'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from '../Home'

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
  },
  banner: {
    width: '100%',
    padding: 10,
  }
}



class RightSide extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return  (
      <div className="rightSide" style={styles.rightSide}>
        <Router>
          <div className="nav">
            <Switch>
              <Route exact path="/" render={() =>
                  <Home />
                }
              />
              <Route path="/profile" render={() =>
                <Profile />}/>
            </Switch>
          </div>
        </Router>

      </div>
    )
  }

}

export default RightSide