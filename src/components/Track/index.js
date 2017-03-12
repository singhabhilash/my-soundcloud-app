import React, { PropTypes } from 'react';
import './track.css';

const Track = ({ artwork_url, title }) => {
  return (
    <div className="track">
      <div className="track-artwork-wrapper">
        <img src={artwork_url} alt={title}></img>
      </div>
      <div className="track-detail">
        {title}
      </div>
    </div>
  )
};

Track.propTypes = {
  artwork_url: PropTypes.string,
  title: PropTypes.string
};

export default Track;