import React, { PropTypes } from 'react'
import axios from 'axios'

class New extends React.Component {
  handleSubmit(e){
    e.preventDefault()
    if(this.refs.title.value==''||this.refs.content.value==''){
      alert('输入内容不能为空')
    }else{
      axios.post('http://localhost:4000/posts',{title:this.refs.title.value,content:this.refs.content.value});
      this.refs.title.value='';
      this.refs.content.value=''
    }
  }
  render () {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="title" name='title' />
          <input type="text" ref="content" name='content' />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default New;
