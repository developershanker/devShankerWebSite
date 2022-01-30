import React, { useState } from 'react';
import Loader from './Loader';
 
function About () {
    const [isLoading, setIsLoading] = useState(true)
    return (
    
        
            !isLoading? <div className="aboutContainer"></div> : <Loader/>
        
    
    )
}
export default About;