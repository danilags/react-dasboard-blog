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

class LeftSide extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div className="leftSide" style={styles.leftSide}>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    )
  }
}

export default LeftSide