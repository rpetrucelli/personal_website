import React, { useState, useEffect } from 'react';

const DateTime = () => {
    var [date, setDate] = useState(new Date());
    
    useEffect( () => {
        var timer = setInterval( () => setDate(new Date()), 1000);
        return () => {
            clearInterval(timer)
        }
    }
    ,[]);

    return(
        <div className = "date">
            <p>It is currently { date.toLocaleTimeString() } on { date.toLocaleDateString() }</p>
        </div>
    )
};

export default DateTime;