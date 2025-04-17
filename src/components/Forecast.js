

const Forecast = ({ forecast, unit }) => {
    if (!forecast || !forecast.list) return null;

    const now = new Date();

    // Filter out past forecasts, get next 5 future ones
    const upcoming = forecast.list.filter(entry => new Date(entry.dt_txt) > now).slice(0, 5);
    const unitSymbol = unit === 'imperial' ? 'F' : 'C';

    return (
        <div className="forecast-cards">
            {upcoming.map((entry, index) => {
                const time = new Date(entry.dt_txt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                });

                return (
                    <div key={index} className="forecast-card">
                        <p><strong>{time}</strong></p>
                        <p>{entry.main.temp}°{unitSymbol}</p>
                        <p>{entry.weather[0].description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Forecast;
