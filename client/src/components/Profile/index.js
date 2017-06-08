import React from 'react'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      username: ""
    }
  }

  componentDidMount() {
    console.log("Did mount");
    this.setState({username: 'daniel'})
  }

  componentWillMount() {
    console.log("Will mount");
  }

  render () {
    console.log("render ...");
    return (
      <div>
        <h2>Profile Side!</h2>
      </div>
    )
  }
}

export default Profile;