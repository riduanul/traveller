import React, { useState } from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel'
import sreemongol from '../../resorces/Image/Sreemongol.png';
import sundorbon from '../../resorces/Image/sundorbon.png';
import sajek from '../../resorces/Image/Sajek.png';
import coxbazar from '../../resorces/Image/coxbazar.png';
import { Link } from 'react-router-dom';




const Home = () => {

   return (
      
      <div className=" bg">
        <Carousel className='slider d-flex justify-content-between'>
          <Carousel.Item interval={1000}>
            <div className="row d-flex justify-content-between">
                <div className="col-md-5 text">
                  <h1>Coxbazar</h1>
                  <p>Longest sea beach in the world</p><br/><br/>
                  <Link to={'./booking/coxbazar'}><button className="btn btn-warning">Booking Now</button></Link>
                </div>
                <div className="col-md-6">
                  <img
                    className="d-block w-100"
                    src={coxbazar}
                    alt="First slide"
                  />
                </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="row d-flex justify-content-between">
              <div className="col-md-5 text">
                <h1>Shundorbon</h1>
                <p>Largest Mangrove Forest in the world</p><br/><br/>
                <Link to={'./booking/Sundorbon'}><button className="btn btn-warning">Booking Now</button></Link>
              </div>
            <div className="col-md-6 ">
            <img
              className="d-block w-100"
              src={sundorbon}
              alt="First slide"
            />
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="row d-flex justify-content-between">
              <div className="col-md-5 text">
                <h1>Sajek</h1>
                <p>Natural beauty of Bangladesh</p><br/><br/>
                <Link to={'./booking/sajek'}><button className="btn btn-warning">Booking Now</button></Link>
              </div>
              <div className="col-md-6">
                <img
                  className="d-block w-100"
                  src={sajek}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="row d-flex justify-content-between">
              <div className="col-md-5 text">
                <h1>Sremongol</h1>
                <p>Natural beauty of Bangladesh</p><br/><br/>
                <Link to={'./booking/sajek'}><button className="btn btn-warning">Booking Now</button></Link>
              </div>
              <div className="col-md-6">
                <img
                  className="d-block w-100"
                  src={sreemongol}
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          </Carousel>
      </div>
    );
};

export default Home;