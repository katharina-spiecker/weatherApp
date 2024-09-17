import { useEffect, useState } from "react"
import WeatherDisplay from "./WeatherDisplay";

export default function CurrentWeather() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(onGeoLocationSuccess, onGeoLocationRejected);
        } else {
            console.log("Geolocation is not supported by this browser");
            onGeoLocationRejected();
        }
    }, [])

    function onGeoLocationSuccess(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c3db5eb8bc5f28ab53106182b9020d06`)
        .then(res => {
            if (!res.ok) {
                throw new Error()
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            setWeatherData(data)
        })
        .catch(err => console.error(err))

    }

    function onGeoLocationRejected() {
        console.log("rejected")
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=c3db5eb8bc5f28ab53106182b9020d06`)
        .then(res => {
            if (!res.ok) {
                throw new Error()
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            setWeatherData(data)
        })
        .catch(err => console.error(err))
    }


    return (
        <>
            <h3>Aktuelles Wetter</h3>
            {
                weatherData && <WeatherDisplay weatherData={weatherData} />
            }
        </>
    )
}