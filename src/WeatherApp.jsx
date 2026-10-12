import Search from "./Search";
import InfoBox from './InfoBox'
import { useState } from "react";

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]= useState({
        city: "Abbotabad".toUpperCase(),
        temp: 30,
        feels_like: 31,
        humidity: 38,
        min_temp: 30,
        max_temp: 32,
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
    }

    return <>
    <Search updateInfo={updateInfo}/>
    <br />
    <InfoBox info={weatherInfo}/>
    </>
}