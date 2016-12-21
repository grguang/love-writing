import React, { PropTypes } from 'react'
import axios from 'axios'
import { Link } from 'react-router'

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
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">标题</label>
            <input type='text' name="title" ref='title' />
          </div>
          <div className="field">
            <label className="label">内容</label>
            <input type='text' name="content" ref='content' />
          </div>
          <div className="actions">
            <button type='submit' className="button" key='2'>提交</button>
            <Link to='/' className="cancel">取消</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default New;
