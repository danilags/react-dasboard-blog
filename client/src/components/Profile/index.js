import React from 'react';
import { connect } from 'react-redux';

import CreateArticle from '../Article/createArticle';

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      formDisable: true,
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
      return this.state
    }
  }

  componentDidMount() {
    localStorage.setItem('lastPosition', '/profile')
    // this.setState({username: 'daniel'})
  }

  handlecreateArticle() {
    // this.state.formDisable = false
    this.setState({formDisable: false})
  }


  render () {
    return (
      <div>
        <h2>Profile Side!</h2>
        <button onClick={() => this.handlecreateArticle()}>Create Article </button>
        <CreateArticle form={this.state.formDisable} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  userlogin: state.logindata
}

export default connect(mapStateToProps, null)(Profile);