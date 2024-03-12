

const API_KEY = '7649b28c3542d28d3b3866ddf149b2aa'


const API_URL = 'https://api.openweathermap.org/data/2.5'


const getWeatherData = (infoType,searchParams) =>{
    const url = new URL(API_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});
    console.log(url);
    return fetch(url)
    .then((res) => res.json())
    .then((data)=> data);
};
export default getWeatherData;