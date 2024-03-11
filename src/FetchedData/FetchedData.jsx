import { DateTime } from "luxon";


const API_KEY = '7649b28c3542d28d3b3866ddf149b2aa'

const API_URL = `https://api.openweathermap.org/data/2.5`

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(API_URL +'/' + infoType);
    url.search = new URLSearchParams(
        {...searchParams, appid: API_KEY});
    return fetch(url).then((res) =>res.json());
};

const formatCurrentWeather = (data) =>{
    const {
        coord:{lon, lat} ,
        weather,
        main: {temp, temp_min, temp_max},
        name,
        dt,
        sys:{country}
    } = data;
 console.log(data)
    const {main:details, icon} = weather[0]
    return {
        lon, lat, temp, temp_min, temp_max, name, dt, country, details, icon
    }
   

}
 const formattForecastWeather = (data) =>{
    let{ timezone, daily, hourly} = data;
    daily = data.split(1,6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });
    hourly = hourly.split(1,6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        };
    });


    return {timezone, daily, hourly};

}
const getFormattedWeatherData = async(searchParams) => {
    const formattedCurrentWeather = await 
    getWeatherData(
        "weather", searchParams).then(formatCurrentWeather);

const {lat, lon} =formatCurrentWeather;

const formattedForecastWeather = await getWeatherData('onecall', {
    lat, 
    lon, 
    exclude: "current, minutely, alerts", 
    units: searchParams.units,})
    .then(formattForecastWeather)
 
    return {...formattedCurrentWeather, ...formattedForecastWeather};
};

const formatToLocalTime = 
(secs, 
zone, 
format = "cccc, LLL, dd, yyyy' | Local Time: 'hh:mm a") =>
DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrl = (code) => `http://openweather.map.org/img/wn/${code}@2x.png`;


export default getFormattedWeatherData


export {formatToLocalTime, iconUrl};