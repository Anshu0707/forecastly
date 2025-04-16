const WeatherCard = ({ weather }) => {
    if (!weather) return <p>No data found</p>;

    return (
        <div className="weather-card">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;