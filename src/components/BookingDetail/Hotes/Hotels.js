import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import BookingDetail from '../BookingDetail';
import travelData from '../../../resorces/travelData'

const Hotels = () => {
    const [loggedInUser, setLoggedInUser, locationInfo, setLocationInfo] = useContext(UserContext);
    const data = travelData;

    return (
        <div>
        {
            data.map(dt => <BookingDetail data={dt}></BookingDetail>)
        }       
        </div>
    );
};

export default Hotels;