import { useState, useEffect, useCallback } from 'react';
import SearchBox from '../components/SearchBox';
import WeatherCard from '../components/WeatherCard';
import Forecast from '../components/Forecast';
import { getWeather, getForecast } from '../utils/fetchWeather';

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [unit, setUnit] = useState('metric'); // Default to Celsius
    const [lastCity, setLastCity] = useState(null); // Store last searched city

    const handleSearch = useCallback(async (city) => {
        const weather = await getWeather(city, unit);
        const forecast = await getForecast(city, unit);
        setWeatherData(weather);
        setForecastData(forecast);
        setLastCity(city);     // Remember the city for re-fetching
      });

    const toggleUnit = async () => {
        const newUnit = unit === 'metric' ? 'imperial' : 'metric';
        setUnit(newUnit);
    
        if (weatherData) {
            const weather = await getWeather(weatherData.name, newUnit);
            const forecast = await getForecast(weatherData.name, newUnit);
            setWeatherData(weather);
            setForecastData(forecast);
        }
    };

     // This effect triggers when unit changes, and only if there's already a city searched
     useEffect(() => {
        if (lastCity) {
            handleSearch(lastCity);
        }
    }, [unit, handleSearch, lastCity]);

    return (
        <div className='home-container'>
            <h1>🌤 Weather App</h1>
            <SearchBox onSearch={handleSearch} />
            <div className="weather-info">
                <WeatherCard weather={weatherData} unit={unit} toggleUnit={toggleUnit}/>
                <Forecast forecast={forecastData} unit={unit} />
            </div>
        </div>
    );
};

export default Home;
