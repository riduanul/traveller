import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../../resorces/Logo.png';
import './Header.css'



const Header = () => {
    const location = useLocation()
    let condition = location.pathname === "./";
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);        
    return (
    
    <div className="  container container-fluid">
        <div className="header">
        <div className="d-flex">
            <div  className="img" >
                <Link to="./home"><img 
                className={`${condition && "white-img"}`}
                src={Logo} width="100" alt="logo"/></Link>
            </div>
            <div className="searchButton">
                <input type="search" name="Search" placeholder="Search Your Destination"id=""/>
            </div>
            <nav className="d-flex justify-content-end nav ">
                <Link to="./home"> Home </Link>
                <Link to="./destination"> Destination </Link>
                <Link to="./blog"> Blog </Link>
                <Link to="./contact"> contact </Link>
                <Link to="./login"><button className="button">Login</button></Link>
                <Link onClick={() => setLoggedInUser('')}><button className="button">Logout</button></Link>
            </nav>
        </div>                
 
   </div>
    </div>
    );
};

export default Header;