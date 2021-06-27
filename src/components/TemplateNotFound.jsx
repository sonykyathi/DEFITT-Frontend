import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TemplateNotFound = (props) => {
  return (
    <Fragment>
      <main>
        <div class='error404' data-midnight='white'>
          <div id='particles-js'></div>
          <div class='error-img text-center'>
            <img src='theme-assets/images/error.png' alt='' class='img-fluid' />
          </div>
          <div class='error-content text-center'>
            <h4 class='error-info'>Oops! You’ve got lost in space</h4>
            <a
              href='index.html'
              class='btn btn-glow btn-gradient-blue btn-round'
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

TemplateNotFound.propTypes = {};

export default TemplateNotFound;
