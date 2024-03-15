const key = "5b30315702e0292efedb47f33076ea2e";
const Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector('.search input')
const btn = document.querySelector('.search button')
const icon = document.querySelector('.icon')


async function weather(city){
    const response = await fetch(Url + city + `&appid=${key}`);
    const data = await response.json()
    console.log(data);
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = data.main.temp.toFixed(1) + "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity  + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed  + "Km/h"

    let condition = data.weather[0].main.toLowerCase();

    switch (condition){
        case'clouds':
        icon.src = 'images/clouds.png'
        break;
        case'clear':
        icon.src = 'images/clear.png'
        break;
        case'smoke':
        icon.src = 'images/smoke.png'
        break;
        case'drizzle':
        icon.src = 'images/drizzle.png'
        break;
        case'mist':
        icon.src = 'images/mist.png'
        break;
        default:
            icon.src = "images/temperature.png"
    }
    document.querySelector('.weather').style.display = "block"


    // console.log("Weather Condition", data.weather[0].main)
}


btn.addEventListener('click', () => {
    weather(search.value)
})