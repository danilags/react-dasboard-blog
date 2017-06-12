import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/userAction';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {

  }

  handleChange(e) {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render () {
    let currentpos = localStorage.getItem('lastPosition')
    if (localStorage.getItem('token')) {

      return (
        <Redirect to={currentpos} />
      )
    } else {
      return (
        <div>
          <h2>Login Page</h2>
          <form onSubmit={(e) => {
            // e.preventDefault()
            this.props.loginUser({
              username: this.state.username,
              password: this.state.password
            })
          }}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={this.handleChange.bind(this)}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange.bind(this)}
            />
            <input type="submit" />
          </form>
        </div>
      )
    }
  }

}

const mapStateToProps = state => ({
  logindata: state.logindata
})

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)