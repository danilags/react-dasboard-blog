import React from 'react'

const styles = {
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  leftSide: {
    width: '20%',
    display: 'table',
    float: 'left'
  },
  rightSide: {
    width: '80%',
    display: 'table',
    float: 'right'
  },
  banner: {
    width: '100%',
    padding: 10,
  }
}

class RightSide extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return  (
      <div className="rightSide" style={styles.rightSide}>
        <div className="banner">
          <img style={styles.banner} src="http://demo.bestdnnskins.com/portals/6/innerpage/banner3_04.jpg" />
        </div>
        <div className="content-post">
          <h3>Lorem Ipsum</h3>
          <p>lsdo loiasds sisdsh didfh dfhidh dkdih dk doijdofi dkjjdijjdf
          sjdsjj skkjsd pjjkjd jslkdjkj djkjiqed  qj kjdlksjdfkdjfij ilkjdo</p>
        </div>
      </div>
    )
  }

}

export default RightSide