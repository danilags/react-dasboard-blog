import React from 'react';

const styles = {

}

class CreateArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formDisable: true
    }

  }

  componentWillReceiveProps(nextProps) {
    this.setState({formDisable: nextProps.form})
  }

  render () {
    return (
      <div>
        {
          this.state.formDisable ? '' :
          <form >
            Title:<br />
            <input style={{
              width: '700px',
              height: '40px',
              fontSize: '18px'
            }} type="text" name="firstname" /><br />
            Content Article:<br />
            <textarea style={{
              width: '700px',
              height: '200px',
              fontSize: '13px'
            }} /><br /><br />
            <input type="submit" value="Submit" />
          </form>
        }
      </div>
    )
  }

}

export default CreateArticle