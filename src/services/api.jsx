import axios from 'axios';

const API_KEY = '1b3ee718cd500d15c2a909dc96820891';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        alert('Error while calling the api ', error.message);
        return error.response;
    }
}