import { useState } from 'react';
import SearchBox from '../components/SearchBox';
import WeatherCard from '../components/WeatherCard';
import { getWeather } from '../utils/fetchWeather';

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = async (city) => {
        const data = await getWeather(city);
        setWeatherData(data);
    };

    return (
        <div>
            <h1>🌤 Weather App</h1>
            <SearchBox onSearch={handleSearch} />
            <div className="weather-info">
                <WeatherCard weather={weatherData} />
            </div>
        </div>
    );
};

export default Home;