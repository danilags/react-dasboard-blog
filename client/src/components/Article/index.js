import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle, localArticle } from '../../actions/articleAction';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


const styles = {
  articlepage: {
    width: '500px',
    height: 'auto',
    display: 'block',
    float: 'left',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
  },
  contentArticle: {
    float: 'left',
    textAlign: 'left',
    padding: '5px'
  },
  contentArticle2: {
    float: 'left',
    textAlign: 'left',
    padding: '5px'
  },
  description: {
    width: '200px',
    padding: '10px',
    display: 'table'
  }
}


class Article extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    localStorage.setItem('lastPosition', '/article')
    console.log("testttt");
    console.log("ihsidhisd ==== ", this.props.localArticleState);
    this.props.localArticle()
    this.props.fetchArticle()
  }

  render () {
    return (
      <ul className="articlepage" style={styles.articlepage} >
        <h1>Article Page</h1>
        {
          this.props.article.length == 0 ? <h2>Loading ... </h2> :

          this.props.article.map((data, index) => (
              <li key={index} className="content-article-left" style={styles.contentArticle}>
                <div style={{
                  display: 'block',
                  color: '#000',
                  textAlign: 'center',
                  padding: '14px 16px',
                }}>
                  <h3>{data.title}</h3>
                  <p>{data.author} | {data.publishedAt}</p>
                  <a href={data.url}><img src={data.urlToImage} style={{ width: '50%', height: 'auto' }} /></a>
                  <p style={styles.description}>{data.description}</p>
                </div>
              </li>
          ))
        }
        {
          this.props.localArticleState.map((data, index) => (
              <li key={index} className="content-article-right" style={styles.contentArticle2}>
                <h3>{data.title}</h3>
                <p>{data.author.username} | {data.createdAt}</p>
                <p style={styles.description}>{data.content}</p>
              </li>
          ))

        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  // console.log("nanana : ", state.localArticle);
  return {
    article: state.article,
    localArticleState: state.localArticleState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: () => dispatch(fetchArticle()),
    localArticle: () => dispatch(localArticle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);