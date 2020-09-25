import React, { useContext, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Booking.css'



const Booking = () => {

    const [loggedInUser, setLoggedInUser, locationInfo, setLocationInfo] =useContext(UserContext);
    const {title, desc} = locationInfo;

const history = useHistory();
const handleBooking = () => {
    history.push('/bookingDetail')
}


   
    return (
        <div className="row">
            <div style={{margin:'0px auto'}}>
            <Header></Header>
            </div>
            <div style={{color:'black'}} className="col home-text mr-0">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="col-7 pl-0">
            <div className="form">
                <form className=" booking-form" >
                    <label className="label">Origin</label>
                    <select className="select btn btn-default" name="origin" id="origin">
                    <option value="Dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="Rajshahi">Rajshahi</option>
                    </select><br/>
                    <label className="label">Destination</label>
                    <select className="select btn btn-default" name="origin" id="origin">
                    <option value="coxbazar">Cox's Bazar</option>
                    <option value="shundorbon">Shundorbon</option>
                    <option value="sajek">Sajek</option>
                    </select><br/>
                    <div className="date row ">
                        <div className="col-md-6">
                            <label className="label">From</label>
                            <input required className="" type="date" name="date" id=""/>
                        </div>
                        <div className="col-md-6">
                        <label className="label">To</label>
                            <input  required type="date" name="date" id=""/>
                        </div>
                    </div>
                    <br/>
                    <input className="btn btn-warning booking" onClick={handleBooking} type="submit" value="Start Booking"/>

                </form>
            </div>
            </div>
            
        </div>
    );
};

export default Booking;