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
          <h2>Disini logo </h2>
        </div>
        <div className="content-post">
        <p>lsdo loiasds sisdsh didfh dfhidh dkdih dk doijdofi dkjjdijjdf
        sjdsjj skkjsd pjjkjd jslkdjkj djkjiqed  qj kjdlksjdfkdjfij ilkjdo</p>
        </div>
      </div>
    )
  }

}

export default RightSide