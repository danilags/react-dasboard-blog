import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/articleAction';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


const styles = {
  contentArticle: {
    float: 'left',
    textAlign: 'left',
    padding: '5px 20px'
  },
  contentArticle2: {
    float: 'right',
    textAlign: 'left',
    padding: '5px 20px'
  },
  description: {
    width: '50%',
    padding: '10px',
  }
}


class Article extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    localStorage.setItem('lastPosition', '/article')
    console.log("testttt");

    this.props.fetchArticle()
  }

  render () {
    return (
      <div className="articlepage">
        <h1>Article Page</h1>
        {
          this.props.article.length == 0 ? <h2>Loading ... </h2> :

          this.props.article.map((data, index) => (
              <div key={index} className="content-article-left" style={styles.contentArticle}>
                <h3>{data.title}</h3>
                <p>{data.author} | {data.publishedAt}</p>
                <a href={data.url}><img src={data.urlToImage} style={{ width: '50%', height: '200px' }} /></a>
                <p style={styles.description}>{data.description}</p>
              </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article
})

const mapDispatchToProps = dispatch => ({
  fetchArticle: () => dispatch(fetchArticle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Article);