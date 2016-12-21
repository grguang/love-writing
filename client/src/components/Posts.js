import React, { PropTypes } from 'react'
import axios from 'axios'

class Posts extends React.Component {
  constructor(){
    super()
    this.state={
      data:{}
    }
  }
  componentWillMount(){
    axios.get(`http://localhost:4000/posts/${this.props.params.id}`)
      .then(res => this.setState({data:res.data.content}))
  }
  render () {
    return(
      <div className='post-wrapper'>
        <div className='title'>{this.state.data.title}</div>
        <div className='content'>{this.state.data.content}</div>        
      </div>
    )
  }
}

export default Posts;
