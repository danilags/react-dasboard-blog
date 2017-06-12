import React from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../actions'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      return (
        <Redirect to="/profile" />
      )
    }
  }


  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState)
    // console.log(this.state);
  }

  render () {
    let currentpos = localStorage.getItem('lastPosition')

    if (localStorage.getItem('token')) {
      return (
        <Redirect to={currentpos} />
      )
    } else {
      const { username, email, password } = this.state
      return (
        <div className="register">
          <h2>Register</h2>
          <form onSubmit={(e) => {
            // e.preventDefault()
            this.props.signUp({
              username: this.state.username,
              email: this.state.email,
              password: this.state.password
            })
            console.log(this.state +"ini state");
            this.setState({username: '', email: '', password: ''})

          }}>
            <label>Username</label><br />
              <input
                placeholder="Username"
                type="text"
                name="username"
                onChange={this.handleChange.bind(this)}
              /><br />
            <label>Email</label><br />
              <input
                placeholder="Email"
                type="text"
                name="email"
                onChange={this.handleChange.bind(this)}
              /><br />
            <label>Password</label><br />
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange.bind(this)}
            /><br />
            <input type="submit" />
          </form>
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => ({
  logindata: state.logindata
})

const mapDispatchToProps = dispatch => ({
  signUp: (user) => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)