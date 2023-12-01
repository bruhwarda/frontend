import React from 'react';
import background from './back.jpg';
import sat from './sat.jpg';
import solar from './solar.jpg';
import "../App.css"

const Overlap = () => {
  return (
    <div className="row container-fluid background-container" style={{ backgroundImage: `url(${background})` }}>
      <div className=" col-md-6 d-flex align-items-center justify-content-center">
        <div className="text-center overlay-column">
          <img
            src={`${sat}`}
            alt="Overlay 1"
            rounded
            className="img-fluid top overlay-image"
          />
          <img
            src={`${solar}`}
            alt="Overlay 2"
            rounded
            className="img-fluid bottom  overlay-image" 
          />
        </div>
      </div>
      <div className=" col-md-6 d-flex align-items-center justify-content-center">
        <div className="text-center content-column">
          <h1 className='text-dark'>Your Heading</h1>
          <p className='text-dark'>Your paragraph goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Overlap;
