import React from 'react';
import { connect } from 'react-redux';

import CreateArticle from '../Article/createArticle';
import UserArticle from '../Article/usersArticle';
import Article from '../Article';


class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      formDisable: true,
      disableUserArticle: true,
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
    this.setState({formDisable: false, disableUserArticle: true})
  }

  handleUserArticle() {
    this.setState({formDisable: true, disableUserArticle: false})

  }


  render () {
    return (
      <div>
        <h2>Profile Side!</h2>
        <button onClick={() => this.handlecreateArticle()}>Create Article </button>
        <button onClick={() => this.handleUserArticle()}>Your Article </button>
        <CreateArticle form={this.state.formDisable} />
        <UserArticle list={this.state.disableUserArticle} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  userlogin: state.logindata
}



export default connect(mapStateToProps, null)(Profile);