import React, { useContext, } from 'react';
import './Home.css';
import { UserContext } from '../../App';
import bg from '../../resorces/Image/coxbazar.png'
import travelData from '../../resorces/travelData/travelData';
import Destination from '../Destination/Destination';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


const Home = () => {
  const [loggedInUser, setLoggedInUser, locationInfo, setLocationInfo] = useContext(UserContext);
    
  function handleData (id){
    const location = travelData.find(data => data.id === id);
    setLocationInfo(location);
  }
  
   return (
        
        <div className="container-home">
          <div className="white-img">
          <Header ></Header>
          </div>
        <div className="row ">
          <div className="col home-text">
            <h1>{locationInfo.title}</h1>
            <p>{locationInfo.desc}</p>
            <Link to="./booking"><button className='btn btn-warning'>Booking</button></Link>
          </div>
          <div className="col-7 mr-3">
            <div className="row">
            {
              travelData.map(data => <Destination handleData={handleData} location={data}></Destination>)
            }
            </div>
          </div>
          
          </div>   
      
      </div>
    );
};

export default Home;