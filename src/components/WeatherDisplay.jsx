export default function WeatherDisplay({weatherData}) {
    return (
        <>
            <h4>{weatherData.name}</h4>
            <p>Min: {weatherData.main.temp_min}</p>
            <p>Max: {weatherData.main.temp_max}</p>
        </>
    )
}