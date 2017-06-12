import React from 'react';
import { connect } from 'react-redux';

class UserArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disableUserArticle: true,
      articles: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({disableUserArticle: nextProps.list})
  }

  componentWillMount() {
    // this.setState({articles: this.props.localArticleState})
    // console.log("ksidasdas,,,, ", this.state.articles);
  }

  componentDidMount() {

    // console.log("state siap pakai", this.props.localArticleState);
  }

  render () {
    // console.log("ini state dari redux ", this.state.articles);
    return (
      <div style={{ textAlign: 'left' }}>
        <ul style={{ listStyle: 'none', fontFamily: 'Arial' }}>
          {
          this.props.articles.length == 0 ? <h2>Press any button ...</h2> :
            this.props.articles.map((art, idx) => (
              <li>
                <h2>{ art.title }</h2>
                <p>{ art.content }</p>
              </li>
            ))
          }

        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.localArticleState
  }
}

export default connect(mapStateToProps, null)(UserArticle);