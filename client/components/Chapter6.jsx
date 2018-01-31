import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <p>A financial ratio is one financial statement number divided by another</p>

    <h3>There are 6 widely used financial ratios</h3>
    <ol>
      <li>
        <dl className="f4 lh-title mv2">
          <dt className="term">Debt ratio: ( total liabilities / total assets )</dt>
          <dd className="ml0">a measure of a company's leverage (degree to which a company borrowed money)</dd>
        </dl>
      </li>

      <li>
        <dl className="f4 lh-title mv2">
          <dt className="term">Current ratio: ( current assets * / current liabilities ** )</dt>
          <dd className="ml0">a measure of a company's liquidity (ability of a company to pay its debts in a short term)</dd>
        </dl>
      </li>

      <li>
        <dl className="f4 lh-title mv2">
          <dt className="term">Return on sales: ( net income / total sales )</dt>
          <dd className="ml0">a measure of the amount of profit earned for each dollar of investment</dd>
        </dl>
      </li>
      
      <li>
        <dl className="f4 lh-title mv2">
          <dt className="term">Asset turnover: ( sales / total assets )</dt>
          <dd className="ml0">a measure of a company's efficiency</dd>
        </dl>
      </li>
      
      <li>
        <dl className="f4 lh-title mv2">
          <dt className="term">Return on equity: ( net income / stockholders' equity )</dt>
          <dd className="ml0">a measure of the amount of profit earned per dollar of shareholder's investment. Most established companies have an ROE between 10-20%</dd>
        </dl>
      </li>
      
      <li>
        <dl className="f4 lh-title mv2">
          <dt className="term">Price-earnings ratio: ( market value of shares *** / net income )</dt>
          <dd className="ml0">a measure of growth potential, earnings stability, and management capabilities. Essentially it gives insight into how caluable a company's earnings are. Most companies have a price-earnings ration between 10-30. A higher price-earnings ratio means a higher expectation of earnings growth</dd>
        </dl>
      </li>
    </ol>

    <aside>
      * a current asset is an asset that is expected to be used within the current year
      <br/>
      ** a current liability is an obligation expected to be paid within the current year
      <br/>
      *** A.K.A. market capitalization: the total cost of all the shares of company
    </aside>
  </Fragment>
);
