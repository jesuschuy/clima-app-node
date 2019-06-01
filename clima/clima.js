const axios = require('axios');

const getClima = async(lat, lng) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=1cf1930df86d465591f2b81e188cbe9d&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}