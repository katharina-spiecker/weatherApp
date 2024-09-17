import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

export default function Search() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    function handleSearch(e) {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3db5eb8bc5f28ab53106182b9020d06`)
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
        

    }

    return (
        <section>
        <h3>Suche</h3>
        <form onSubmit={handleSearch}>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button>Suche</button>
        </form>

        <div>
            {
                weatherData && <WeatherDisplay weatherData={weatherData} />
            }
        </div>
        </section>
    )
}