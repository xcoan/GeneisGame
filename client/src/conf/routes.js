import React from 'react';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import App from '../app/App';
import Home from '../home/Home';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;