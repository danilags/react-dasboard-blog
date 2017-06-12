import React from 'react';
import { connect } from 'react-redux';

import { fetchUserArticle } from '../../actions/userAction';


class UserArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disableUserArticle: true,
      articles: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("props : ...", nextProps);
    this.setState({disableUserArticle: nextProps.list})
  }

  componentWillMount() {
    // this.setState({articles: this.props.localArticleState})
    // console.log("ksidasdas,,,, ", this.state.articles);
  }

  componentDidMount() {
    let userId = localStorage.getItem('id')
    this.props.fetchUserArticle(userId)
    console.log("state siap pakai", this.props.localArticleState);
  }

  render () {
    return (
      <div>
        <h2>Ini list punya user</h2>

      </div>
    )
  }
}

const mapStateToProps = state => {
  localArticleState: state.localArticleState
}

const mapDispatchToProps = dispatch => ({
  fetchUserArticle: (userId) => dispatch(fetchUserArticle(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserArticle);