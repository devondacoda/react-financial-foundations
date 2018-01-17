import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => (
  <div
    className="slider pointer right-0 absolute dib h2 w2 bg-light-purple mt3 mr3"
    onClick={(evt) => {
      const { classList } = evt.currentTarget;
      if (classList.contains('list-toggler')) {
        classList.remove('list-toggler');
      } else {
        classList.add('list-toggler');
      }
    }}>
    <ul className="list mt6 f4">
      {
        props.chapters.map((chapter, i) =>
          <li key={chapter.props.path} className="mt5 br2">
            <NavLink
              className="no-underline near-white mt5 bg-animate bg-near-black hover-bg-gray ma2 tc br2 pa2 w-100"
              to={chapter.props.path}>
                {`chapter ${i + 1}`}
            </NavLink>
          </li>
        )
      }
    </ul>
  </div>
);
