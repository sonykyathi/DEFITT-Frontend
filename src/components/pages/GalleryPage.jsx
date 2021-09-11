import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Gallery = (props) => {
  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://axesso-facebook-data-service.p.rapidapi.com/fba/facebook-lookup-posts',
      params: {url: 'https://www.facebook.com/longhornsteakhouse/posts/'},
      headers: {
        'x-rapidapi-host': 'axesso-facebook-data-service.p.rapidapi.com',
        'x-rapidapi-key': 'undefined'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  return (
    <Fragment>
      <section className='gallery section-padding' id='gallery'>
        <div className='container'>
          <div className='heading text-center'>
            <div
              className='animated'
              data-animation='fadeInUpShorter'
              data-animation-delay='0.3s'
            >
              <h6 className='sub-title'>Gallery</h6>
              <h2 className='title'>Social Gallery</h2>
            </div>
          </div>
          <div className='content-area'>
            <div className="gallery-post-list">
              <div className="row text-center">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.10s">
                      <a href="javascript:void(0);" className="gallery-thumbnail-card">
                          <img className="img-fluid gt-tag" src="https://qph.fs.quoracdn.net/main-qimg-4079c882451673a969ea7167d61bc7e1" alt=""/>
                      </a>
                  </div>
                 
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.10s">
                      <a href="javascript:void(0);" className="gallery-thumbnail-card">
                          <iframe className="gt-tag" src="https://www.youtube.com/embed/Y94LNw5SUbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                      </a>
                  </div>
                 
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.10s">
                      <a href="javascript:void(0);" className="gallery-thumbnail-card">
                          <iframe className="gt-tag" src="https://www.youtube.com/embed/LPyxG2uKGbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                      </a>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.10s">
                      <a href="javascript:void(0);" className="gallery-thumbnail-card">
                          <iframe className="gt-tag" src="https://www.youtube.com/embed/SGkwNe6PHhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                      </a>
                  </div>
                 
              </div>
          </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Gallery.propTypes = {};

export default Gallery;
