import React from 'react'

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

  }

  render () {
    return (
      <div style={styles.ulNAv} className="navvvv">
        <ul style={styles.ulNAv}>
          <li style={styles.liNav}>Interest</li>
          <li style={styles.liNav}>Jobs</li>
          <li style={styles.liNav}>Login</li>
          <li style={{ float: 'right' }}>Logout</li>
        </ul>
      </div>
    )
  }
}

export default TopNAv