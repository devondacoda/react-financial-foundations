import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import ChapterList from './ChapterList';

export default (props) => {
  const currentPath = window.location.pathname;
  const currentChapter = Number(currentPath.slice(-1));
  const routeElements = props.children.props.children;

  const currentComponent = routeElements.filter(child =>
      // return the related route component by comparing pathnames
      // or return the default pathless route (error page)
      (child.props.path === currentPath) || !child.props.path)[0].props.component;

  const { title } = currentComponent().props;

  return (
    <Fragment>
      {
        !title // if no chapter, styling will be different/unique. Only chapters are given a title
        ? props.children
        : <Fragment>
            <p className="tc ma2"><NavLink className="link black hover-red" to="/">Financial Foundations</NavLink></p>

            <header className="bg-green white bb b--light-silver bw5">
            <ChapterList chapters={routeElements.slice(1, -1)}/>
              <h2 className="mt0 mr5 tracked b pt3 ttu ph3">{title}</h2>
              <div className="fr">
                {/* Go to homepage if 'Back' is clicked on Chapter 1 */}
                <NavLink className="link" to={currentChapter > 1
                  && `/chapter-${currentChapter - 1}`
                  || `/`}>{'\u2190'}Back</NavLink>
                { currentChapter < routeElements.length - 2 // only display next button if not on last chapter
                  && <NavLink className="link ml3 mr4" to={`/chapter-${currentChapter + 1}`}>Next{'\u2192'}</NavLink>
                  || <span className="ml4 mr4">&nbsp;</span>
                }
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
