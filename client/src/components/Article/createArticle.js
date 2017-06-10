import React from 'react';
import { connect } from 'react-redux';

import { createArticle } from '../../actions/articleAction';

class CreateArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formDisable: true,
      title: '',
      content: '',
      author: localStorage.getItem('id')
    }

  }

  componentWillReceiveProps(nextProps) {
    this.setState({formDisable: nextProps.form})
  }

  handleChange(e) {
    const newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState)
    console.log("ini state dari article : -- ", this.state);
  }

  render () {

    return (
      <div>
        {
          this.state.formDisable ? '' :
          <form onSubmit={(e) => {
            e.preventDefault()
            this.props.createArticle({
              title: this.state.title,
              content: this.state.content,
              author: this.state.author
            })
            this.setState({formDisable: true})

          }}>
            Title:<br />
            <input style={{
              width: '700px',
              height: '40px',
              fontSize: '18px'
            }}
            type="text"
            name="title"
            onChange={this.handleChange.bind(this)}
            /><br />
            Content Article:<br />
            <textarea style={{
              width: '700px',
              height: '200px',
              fontSize: '13px'
            }}
            name="content"
            onChange={this.handleChange.bind(this)}
            /><br /><br />
            <input type="submit" value="Submit" />
          </form>
        }
      </div>
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

const mapDispatchToProps = dispatch => ({
  createArticle: (article) => dispatch(createArticle(article))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle)