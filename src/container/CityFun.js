import React, { useState } from 'react'

export default function CityFun() {
    const [city, setCity] = useState("Mumbai");
    const changeCity = () => {
        setCity("Surat");
    }
    return (
        <>
            <h1>Function Based Componetnt</h1>
            <h2>{city}</h2>
            <button onClick={() => changeCity()}>Click Me</button>
        </>
    )
}
