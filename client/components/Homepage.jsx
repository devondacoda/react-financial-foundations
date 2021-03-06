import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="tc mt5 pt4 mh3">
    <h1 className="h2 mb5 mb4-ns">Financial Foundations</h1>
    <div className="dib h2 bg-green slider slider-container">

      <span className="h2 w-25 bg-green fr white f4">{'\u2193'} <br />
        <a className="no-underline near-white mt5 bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="mailto:devjonb@gmail.com" title="Email">
          <svg className="dib h1 w1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z" /></svg>
        </a>
      </span>

      <span className="h2 w-25 bg-light-purple fr slider white f4"> touch <br />
        <a className="no-underline near-white bg-animate mt5 bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://medium.com/@devondevon" title="Medium">
          <svg className="dib h1 w1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z" /></svg>
        </a>
      </span>

      <span className="h2 w-25 bg-light-silver fr slider white f4"> in <br />
        <a className="no-underline near-white bg-animate mt5 bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://linkedin.com/in/djbap" title="LinkedIn">
          <svg className="dib h1 w1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero" /></svg>
        </a>
      </span>

      <span className="h2 w-25 bg-gold fr slider white f4"> Get <br />
        <a className="no-underline near-white mt5 bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://github.com/devondacoda" title="GitHub">
          <svg className="dib h1 w1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" /></svg>
        </a>
      </span>
    </div>

    <h3 className="h2 gray"> Notes converted to a website </h3>
    <h6>Material on this website is from the Lynda course, <a href="https://www.lynda.com/Business-Accounting-tutorials/Finance-Fundamentals/174917-2.html?finance+foundations">Finance Foundations</a> by Jim Stice and Kay Stice</h6>

    <NavLink to="/chapter-1" className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray">
      Get Started <span role="img" aria-label="money-bag">💰</span>
    </NavLink>
  </div>
);
