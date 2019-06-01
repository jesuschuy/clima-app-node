const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodedUrl = encodeURI(dir);
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        //timeout: 1000,
        headers: {
            'X-RapidAPI-Key': '0e85694611msheb538b2f783ba48p156d12jsn718b6ac807a1'
        }
    });

    const resp = await instance.get();
    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    instance.get()
        .then(resp => {
            console.log(resp.data.Results);
        })
        .catch(err => {
            console.log('Error!!! ', err);
        });

    return {
        direccion,
        lat,
        lng
    }    
}

module.exports = {
    getLugarLatLng
}