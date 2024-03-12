

const searchButton = document.querySelector(".search-btn")
const API_KEY = '7649b28c3542d28d3b3866ddf149b2aa'

const timeEl = document.getElementsByClassName('time');
const dateEl = document.getElementsByClassName('date');
const currentTemp =document.getElementById('current-temp');
const currentCondition = document.getElementsByClassName('current-condition');

const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const months =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']
const API_URL = `https://api.openweathermap.org/data/2.5`

setInterval(()=>{
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const hour = time.getHours();
    const day = time.getDay();
    const minutes = time.getMinutes();
    const hoursFormat = hour >= 13 ? hour %12: hour
    const ampm = hour >=12 ? 'PM' : 'AM'
    const dateFormat= days[day] + ',' + months[month] + '' +date

}, 1000)

getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) =>{
        let {lat, lon} = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&units=imperial&appid=${API_KEY}`)
        .then(res =>res.json()).then(data =>{
             console.log(data)
            showWeatherData(data);
           
            
        })
})
}
function showWeatherData(data){
    let {temp, weather={main, icon}}= data.current;


}
export {getWeatherData}