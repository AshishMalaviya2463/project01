import React, { useState } from 'react'
// import India from './India';
// import Us from './Us';

export default function CountryFun() {
    const [country, setCountry] = useState("INDIA");
    const handleClick = () => {
        country === "INDIA" ? setCountry("USA") : setCountry("INDIA");
    }

    const India = (props) => {
        return (
            <>
                <h2>Top 5 Famous Places of {props.country_Name}</h2>
                <ol style={{ fontWeight: 'bold', fontSize: "20px" }}>
                    <li>Taj Mahal</li>
                    <li>Kutub Minar</li>
                    <li>Statue of Unity</li>
                    <li>Raani ki Vaav</li>
                    <li>Simla - Manali</li>
                </ol>
            </>
        );
    }

    const Us = (props) => {
        return (
            <>
                <h2>Top 5 Famous Places of {props.country_Name}</h2>
                <ol style={{ fontWeight: 'bold', fontSize: "20px" }}>
                    <li>Grand Canyon. Grand Canyon | Photo Copyright: Lana Law.</li>
                    <li>Niagara Falls. Niagara Falls. .</li>
                    <li>Statue of Liberty. Statue of Liberty.</li>
                    <li>White House. White House.</li>
                    <li>Walt Disney World Resort. Walt Disney World Resort</li>
                </ol>
            </>
        );
    }
    return (
        <>
            <h1>{country}</h1>
            <button onClick={() => handleClick()}><h3>Chnage Country</h3></button>
            {country === "INDIA" ? <India country_Name={country} /> : <Us country_Name={country} />}
        </>
    )
}
