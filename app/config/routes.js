import React from 'react';
import Main from '../components/Main';
import ResumeContainers from '../containers/ResumeContainer';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ResumeContainers} />
    </Route>
  </Router>
);

module.exports = routes;