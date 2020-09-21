import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Booking.css'


const Booking = () => {
    
const history = useHistory();
const handleBooking = () => {
    history.push('/bookingDetail')
}

   
    return (
        <div>
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
                            <input  className="" type="date" name="date" id=""/>
                        </div>
                        <div className="col-md-6">
                        <label className="label">To</label>
                            <input  type="date" name="date" id=""/>
                        </div>
                    </div>
                    <br/>
                    <input className="btn btn-warning booking" onClick={handleBooking} type="submit" value="Start Booking"/>

                </form>
            </div>
        </div>
    );
};

export default Booking;