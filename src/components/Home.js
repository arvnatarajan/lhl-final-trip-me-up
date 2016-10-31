import React, { PropTypes } from 'react'
import Slider from 'react-slick'

let settings = {
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

const Home = () => (
  <div className="home-container">
    <div className="col carousel-container">
      <Slider {...settings} className="carousel">
        <div><img src='http://i65.tinypic.com/bfqera.jpg' /></div>
        <div><img src='http://i64.tinypic.com/anc2mg.jpg' /></div>
        <div><img src='http://i68.tinypic.com/o7rb10.jpg' /></div>
        <div><img src='http://i67.tinypic.com/2ursazd.jpg' /></div>
        <div><img src='http://i65.tinypic.com/2589vz7.jpg' /></div>
        <div><img src='http://i64.tinypic.com/2rhrzif.jpg' /></div>
      </Slider>
    </div>
    <div className="col signup-container">
      <p>signup here...</p>
        <input className="signup-box" type="text" placeholder="Name"/>
        <input className="signup-box" type="text" placeholder="Email"/>
        <input className="signup-box" type="text" placeholder="Hometown"/>
        <button className="signup-box">be a tripper</button>
    </div>
  </div>
)


export default Home
