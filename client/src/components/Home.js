import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router'



class Home extends Component {
  constructor(){
    super()
    this.state={
      title:[]
    }
  }
  componentWillMount(){
    axios.get('http://localhost:4000/posts')
      .then(res => this.setState({title:res.data.posts}))
  }
  render(){
    let title = this.state.title.map((item,index) =>
      <div className="post-card" key={index}><Link to={`posts/${item._id}`}>{item.title}</Link></div>)
    return(
      <div>
        <div><Link to="/new">编辑文章</Link></div>
        <h3>{title}</h3>
      </div>
    )
  }
}

export default Home;
