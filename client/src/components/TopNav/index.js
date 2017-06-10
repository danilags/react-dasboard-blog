import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/userAction';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


const styles = {
  navWrap : {
    width: '100%'
  },
  ulNAv : {
    height: 50,
    background: '#000'
  },
  liNav: {
    float: 'left',
    color: '#fff',
    padding: '14px 20px',
    listStyle: 'none'
  }
}
class TopNAv extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }

  }

  componentWillMount() {
    let username = localStorage.getItem('username')
    if (username !== null) {
      let decodedUsername =  new Buffer(username, 'base64').toString('ascii')
      // console.log("lalalal ", decodedUsername);
      this.setState({username: decodedUsername}, function() {
        // console.log("username lalal: ", this.state.username);
      })
    } else {
      console.log("lewat");
    }
  }

  handleLogoutUser() {
    this.props.logoutUser()
    window.location.reload()
    return (
      <Redirect to='/login' />
    )
  }

  render () {
    console.log("halooooo : ", this.state.username);
    return (
      <div style={styles.ulNAv} className="navvvv">
        <ul style={styles.ulNAv}>
          <li style={styles.liNav}>Interest</li>
          <li style={styles.liNav}>Jobs</li>
          {
            localStorage.getItem('token') ? <div><li style={{
              float: 'right',
              color: '#fff',
              listStyle: 'none',
              padding: '14px 20px'
            }}>{  this.state.username}</li>
            <li style={{
              float: 'right',
              color: '#fff',
              listStyle: 'none',
              padding: '14px 20px'
            }}><button onClick={() => this.handleLogoutUser()}>Logout</button></li></div>
            :
            <div>
              <li style={{
                float: 'right',
                color: '#fff',
                listStyle: 'none',
                padding: '14px 20px' }}><Link to="/login">Login</Link></li>
              <li style={{
                float: 'right',
                color: '#fff',
                listStyle: 'none',
                padding: '14px 20px' }}><Link to="/register">Register</Link></li>
            </div>
            }
          }

        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  logindata: state.logindata
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopNAv)