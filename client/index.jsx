import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'tachyons'; // for css
import { Homepage, Main, Chapter1, Chapter2, Chapter3, Chapter4, Chapter5, NotFound } from './components';
import ScrollToTop from './ScrollToTop';
import './scss/style.scss';

render(
  <Router>
    <ScrollToTop>
      <Main>
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* Do not put trailing slash at the end of path, needs to be compared later with window location (which trims trailing slash) */}
          <Route path="/chapter-1" component={() => <Chapter1 title="What is Finance" />} />
          <Route path="/chapter-2" component={() => <Chapter2 title="Financial Statements: Overview" />} />
          <Route path="/chapter-3" component={() => <Chapter3 title="Financial Statements: Balance Sheet" />} />
          <Route path="/chapter-4" component={() => <Chapter4 title="Financial Statements: Income Statement" />} />
          <Route path="/chapter-5" component={() => <Chapter5 title="Financial Statements: Cash Flow Statement" />} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </ScrollToTop>
  </Router>,
  document.getElementById('app'),
);
