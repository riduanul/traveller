import React from 'react';
import './BookingDetail.css';
import booking1 from '../../resorces/Image/Rectangle 26.png';
import booking2 from '../../resorces/Image/Rectangle 27.png';
import booking3 from '../../resorces/Image/Rectangle 28.png';
import star from '../../resorces/Icon/star_1_.png';
import GoogleMap from '../GoogleMap/GoogleMap';
import Header from '../Header/Header';



const BookingDetail = () => {
   
    return (

        <div>
            <div>
                <Header></Header>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-md-8  room">
                    <small>252 stays April-13-17 3guests</small>
                    <h5> Stay in Cox's Bazar</h5>
                    <div className="row">
                        <div className="col-md-6 pl-0">
                            <img  src={booking1} alt=""/>
                        </div>
                        <div className="col-md-6 pr-0 mt-1">
                            <h6>Light bright airy stylish apt & <br/>safe peaceful stay</h6>
                            <small>4 guest 2 bedrooms 2 beds 2 baths</small> <br/>
                            <small>wifi, Air Conditioning kitchen</small> <br/>
                            <small>cancellation flexibility aviliable</small><br/>
                            <small style={{color: 'gray'}}><span className="star ml-0"><img src={star} alt=""/></span> 4.9(20)$34/night</small>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 pl-0 ">
                            <img  src={booking2} alt=""/>
                        </div>
                        <div className="col-md-6 pr-0 mt-1">
                            <h6>Apartment in Lost Panorama</h6>
                            <small>4 guest 2 bedrooms 2 beds 2 baths</small> <br/>
                            <small>wifi, Air Conditioning kitchen</small> <br/>
                            <small>cancellation flexibility aviliable</small> <br/>
                            <small style={{color: 'gray'}}><span className="star"><img src={star} alt=""/></span> 4.8(10)$52/night</small>
                        </div>
                    </div>
                    <div className="row no-gutter">
                        <div className="col-md-6 pl-0 ">
                            <img  src={booking3} alt=""/>
                        </div>
                        
                        <div className="col-md-6 pr-0 mt-1">
                            <h6>AR Lounge & Pool(s&r+b&B)</h6>
                            <small>4 guest 2 bedrooms 2 beds 2 baths</small> <br/>
                            <small>wifi, Air Conditioning kitchen</small> <br/>
                            <small>cancellation flexibility aviliable</small> <br/>
                            <small style={{color: 'gray'}}><span className="star"><img src={star} alt=""/>4.9(25)    $44/night</span></small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h1>Google map</h1>
                    {/* <GoogleMap /> */}
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingDetail;