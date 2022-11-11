import {useState, useEffect } from 'react'
import '../css/Clock.css'

const Clock = () => {
    const [ date, setDate ]= useState(new Date());
    const refreshClock = () =>  setDate(new Date());

    useEffect(() =>{    
        const timerId = setInterval(refreshClock, 1000);
        const cleanup = () => clearInterval(timerId);
        return cleanup;
    }, [])

   
    return (
        <div className='clock-numbers'>
           {date.toLocaleTimeString()} 
        </div>
    )
}

export default Clock;