import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="tc">
    <h1>Nothing to see here!</h1>
    <h3>
      But a lot to see here {'\u2192'} 
      <NavLink to="/">Financial Foundations</NavLink>
    </h3>
  </div>
);
