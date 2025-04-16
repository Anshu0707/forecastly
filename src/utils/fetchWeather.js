import axios from 'axios';

const API_KEY = '93bb54a31a798130d47997c1e99b69a9';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

export const getWeather = async (city) => {

    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
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