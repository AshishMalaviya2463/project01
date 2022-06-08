import React, { useEffect, useState } from 'react'

export default function TimerFunc() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let timeI = '';
        setInterval(() => {
            timeI = setTime(new Date())
        }, 1000)

        return ( 
            clearInterval(timeI)
        );
    }, [time])
    return (
        <>
            <h2>{time.toLocaleTimeString()}</h2>
        </>
    )
}
