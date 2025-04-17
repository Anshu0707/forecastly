import axios from 'axios';

const API_KEY = '93bb54a31a798130d47997c1e99b69a9';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

export const getWeather = async (city, unit = 'metric') => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=${unit}`);
        if (response.data.cod !== 200) {
            console.error("Invalid city or API issue:", response.data.message);
            return null;
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};

export const getForecast = async (city, unit = 'metric') => {
    try {
        const response = await axios.get(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=${unit}`);
        if (response.data.cod !== '200') {
            console.error("Invalid city or API issue:", response.data.message);
            return null;
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching forecast data:", error);
        return null;
    }
};
