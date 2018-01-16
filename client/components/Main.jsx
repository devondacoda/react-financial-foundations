import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

let notAChapter = true;

export default (props) => {
  const currentPath = window.location.pathname;
  let currentChapter = Number(currentPath.slice(-1));

  const currentComponent = props.children.props.children.filter(child =>
      // return the related route component by comparing pathnames
      // or return the default pathless route (error page)
      (child.props.path === currentPath) || !child.props.path)[0].props.component;

  const { title } = currentComponent().props;
  notAChapter = (title) ? false : true;

  return (
    <Fragment>
      {
        notAChapter // if it's notAChapter, styling will be different/unique
        ? props.children
        : <Fragment>
            <p className="tc ma2"><NavLink className="link black hover-red" to="/">Financial Foundations</NavLink></p>

            <header className="bg-purple white bb b--gold bw5">
              <h2 className="mt0 mr5 tracked b pt3 ttu tr">{title}</h2>
              <div className="fr">
                {/* Go to homepage if 'Back' is clicked on Chapter 1 */}
                <NavLink className="link" to={currentChapter > 1
                  && `/chapter-${currentChapter - 1}` || `/`}>{'\u2190'}Back</NavLink>
                <NavLink className="link ml3 mr4" to={`/chapter-${currentChapter + 1}`}>Next{'\u2192'}</NavLink>
              </div>
            </header>

            <article className="br4 br--bottom pl5 pr4 pt2 h-100 bg-moon-gray">
              {props.children}
            </article>
          </Fragment>
      }
    </Fragment>
  )
};
