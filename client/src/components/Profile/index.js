import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      username: ""
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

  componentDidMount() {
    localStorage.setItem('lastPosition', '/profile')
    // this.setState({username: 'daniel'})
  }


  render () {
    console.log("render ...");
    alert(`Welcome ${this.sat}`)
    return (
      <div>
        <h2>Profile Side!</h2>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  // console.log("state user : ---- ", state.logindata);
  userlogin: state.logindata
})

export default connect(mapStateToProps, null)(Profile);