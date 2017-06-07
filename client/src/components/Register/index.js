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
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    console.log(newState);
    this.setState(newState)
  }

  render () {
    const { username, email, password } = this.state
    return (
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
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
              onChange={(text) => this.setState({username: text})}
            /><br />
          <label>Email</label><br />
            <input
              placeholder="Email"
              type="text"
              onChange={(text) => this.setState({email: text})}
            /><br />
          <label>Password</label><br />
            <input
              placeholder="Password"
              type="password"
              onChange={(text) => this.setState({password: text})}
          /><br />
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