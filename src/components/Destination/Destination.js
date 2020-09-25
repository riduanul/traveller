import React from 'react';
import './Destination.css'


const Destination = (props) => {

    const {img, title,id} = props.location;   
    const handleData = props.handleData;
 
    const imgStyle ={
       background: `url(${img})`,
       backgroundSize: '100% 100% ',
       borderRadius:'10px',
        
    }
    

    return (
        <div onClick={() => handleData(id)} style={imgStyle} className="dest">
            <h4>{title}</h4>
        </div>

    );
};

export default Destination;