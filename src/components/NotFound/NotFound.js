import React from 'react';

const NotFound = () => {
    const errStyle = {color:'red', textAlign:'center', marginTop:'200px'}
    return (
        
        <div>
            <h1 style={errStyle}> Error 404! Sorry Page Not Found.</h1>
        </div>
    );
};

export default NotFound;