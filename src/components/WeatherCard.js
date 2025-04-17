const WeatherCard = ({ weather, unit, toggleUnit }) => {
    if (!weather) return <p>No data found</p>;
    const unitSymbol = unit === 'imperial' ? '°F' : '°C';

      // Get current date and format it to show only month and day
      const currentDate = new Date();
      const dateOptions = { month: 'long', day: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
  
      // Format time to show only hours and minutes
      const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
      const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

    return (
        <div className="weather-card">
             <p>📅 {formattedDate},  {formattedTime}</p>
            <h2>🌍{weather.name}, {weather.sys.country}</h2>
            <p>🌡️Temperature: {weather.main.temp}{unitSymbol}</p>
            <p>💧Humidity: {weather.main.humidity}%</p>
           <p>🌀Wind Speed: {weather.wind.speed} m/s</p>
            <p>☁️Condition: {weather.weather[0].description}</p>     

             <div className="toggle-container" onClick={toggleUnit}>
                <div className={`slider ${unit === 'metric' ? 'left' : 'right'}`}>
                    {unit === 'metric' ? '°C' : '°F'}
                </div>
                <span className="label left">°C</span>
                <span className="label right">°F</span>
            </div>   
            <p>Toggle  Unit</p>  
        </div>
    );
};

export default WeatherCard;