import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Gallery = (props) => {
  const [state, setstate] = useState({ youtube: [], page:0, disabled:false })

  useEffect(() => {
    fetchVideos()
  }, [])


  const map = (data) => {
    return 'https://www.youtube.com/embed/' + data.id.videoId
  }

  const fetchVideos = async () => {
    if (state.disabled) {
      return false
    }
    let page = state.page + 10;
    console.log(page, "===page")
    setstate((prevState) => ({
      ...prevState,
      page,
    }));

    const options = {
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAhPocC0ekFVS3U4KKezvsB_rEWtrg799c&channelId=UCyO9CUPft6N_xpnAl4pZONg&part=snippet,id&order=date&maxResults=${page}`
    };
    const result = await axios(options)
    let data = result?.data?.items.map(map)
    if (data.length < page) {
      setstate((prevState) => ({
        ...prevState,
        disabled: true,
      }));
    }
    setstate((prevState) => ({
      ...prevState,
      youtube: data
    }));
  }


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
                {
                  state.youtube.length > 0 &&
                  state.youtube.map((val, key) => {
                    return (
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp"  key={key}>
                        <a href="javascript:void(0);" className="gallery-thumbnail-card">
                          <iframe className="gt-tag" src={val} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </a>
                      </div>
                    )
                  })
                }

               

              </div>
              <div className="about-btn" style={{textAlign:"center"}}>
                <button class="btn btn-lg btn-gradient-purple btn-glow animated" disabled={state.disabled} onClick={fetchVideos}>Load More</button>
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
