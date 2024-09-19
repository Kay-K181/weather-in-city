'use strict'

const searchCity = document.getElementById('searchCity');
const searchBtn = document.getElementById('searchBtn');
const temp = document.getElementById('temp');
const cityName = document.getElementById('cityName');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weatherImg = document.getElementById('weatherImg');

const apiKey = '329082bbdad0677ef233eb5fa0f90055';

const fetchData = async function(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if(!response.ok) {
            alert('The browser was able to communicate with a given server');
        } else {
            const data = await response.json();
            console.log(data);
            cityName.innerHTML = data.name;
            wind.innerHTML = `${data.wind.speed} km/h`;
            temp.innerHTML = `${Math.round(data.main.temp - 283.15)} c`;
            humidity.innerHTML = `${data.main.humidity}%`; 
            
            switch (data.weather[0].main) {
                case 'Rain':
                    weatherImg.src = 'images/rain.png';
                    break;
                case 'Sun':
                    weatherImg.src = 'images/sun.png';
                    break;
                case 'Wind':
                    weatherImg.src = 'images/wind.png';
                    break;            
                case 'Clear':
                    weatherImg.src = 'images/clear.png';
                    break;            
                default:
                    weatherImg.src = 'images/sun.png';
                    break;
            }
        }
    } catch (error) {
        alert(error.message);        
    }
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();    
    fetchData(searchCity.value);
});







