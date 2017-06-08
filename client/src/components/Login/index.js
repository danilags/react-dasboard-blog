import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div>
        <h2>Login Page</h2>
        <label>Username</label>
        <input />
        <label>Password</label>
        <input />
        <input type="submit" />
      </div>
    )
  }

}

export default Login