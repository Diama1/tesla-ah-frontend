/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import crying from '../../assets/img/crying-cartoon.png';

const PageNotFound = () => (
  <div className="container notfound__container">
    <div className="notfound__container--content">
      <div className="row">
        <div className="col-sm-6">
          <img src={crying} alt="" className="notfound__container--image" />
        </div>
        <div className="col-sm-6 notfound__container--description">
          <h2>Awww... Don't cry.</h2>
          <p>
            The page you are looking for is not found
          </p>
          <a href="/" className="btn button is-grey">Go back to homepage</a>
        </div>
      </div>
    </div>
  </div>
);

export default PageNotFound;
