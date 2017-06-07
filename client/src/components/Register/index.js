import React from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../actions'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
    }

  }

  handleSubmit(event) {
    console.log(this.state.username);
    console.log("jalann....");
    event.preventDefault();
  }

  handleChange(e) {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render () {
    return (
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.signUp(this.state)
        }}>
          <label>Username</label><br />
            <input placeholder="Username" type="text" onChange={this.handleChange.bind(this)} /><br />
          <label>Email</label><br />
            <input placeholder="Email" type="text" onChange={this.handleChange.bind(this)}/><br />
          <label>Password</label><br />
            <input placeholder="Password" type="password" onChange={this.handleChange.bind(this)}/><br />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  logindata: state.logindata
})

const mapDispatchToProps = dispatch => ({
  signUp: (user) => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)