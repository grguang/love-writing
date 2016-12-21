import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './components/App.js'
import Home from './components/Home.js'
import Posts from './components/Posts.js'
import New from './components/New.js'

class Routes extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='posts/:id' component={Posts} />
          <Route path='new' component={New} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
