import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ChapterList = props => (
  <div
    className="slider pointer right-0 absolute dib h2 w2 mr4 bg-dark-green circle"
    onClick={(evt) => {
      const { classList } = evt.currentTarget;
      if (classList.contains('list-toggler')) {
        classList.remove('list-toggler');
        evt.currentTarget.firstChild.textContent = '\u2780';
      } else {
        classList.add('list-toggler');
        evt.currentTarget.firstChild.textContent = '';
      }
    }}
  >
    <p className="pa0 ma2">{'\u2780'}</p>
    <ul className="list mt6 f4">
      {
        props.chapters.map((chapter, i) => (
          <li key={chapter.props.path} className="mt5 br2">
            <NavLink
              className="no-underline near-white mt5 bg-animate bg-near-black hover-bg-gray ma2 tc br2 pa2 w-100"
              to={chapter.props.path}
            >
              {`chapter ${i + 1}`}
            </NavLink>
          </li>))
      }
    </ul>
  </div>
);

export default ChapterList;

ChapterList.propTypes = {
  chapters: PropTypes.arrayOf(PropTypes.object).isRequired,
};
