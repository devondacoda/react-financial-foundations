import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'tachyons'; // for css
import { Homepage, Main, Chapter1, NotFound } from './components';
import './scss/style.scss';

render(
  <Router>
    <Main>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* Do not put trailing slash at the end of path, needs to be compared later with window location (which trims trailing slash) */}
        <Route path="/chapter-1" component={() => <Chapter1 title="What is Finance" />} />
        <Route component={NotFound} />
      </Switch>
    </Main>
  </Router>,
  document.getElementById('app'),
);
