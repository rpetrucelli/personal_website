import { useState, useEffect } from "react";

export default function Weather() {
    const [weather, setWeather] = useState({});

    const fetchData = () => {
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york?unitGroup=metric&key=RTSG3WZ6JGBEHC897LFTJTQZB&contentType=json")
            .then((response) => response.json())
            .then((data) => setWeather(data))
            .catch((err) => console.log(err));
    }

    useEffect( () => {
        fetchData();
    }, 
    []);

    return (   
    <>
        <span>Today in {weather.address} the temperature is  degrees celsius </span>
    </>
    );
}
