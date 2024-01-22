const API_KEY = 'b1d420bb342e4759abc150954241801';


async function getWeather(event, location){
    event.preventDefault();
    const data = await fetch("http://api.weatherapi.com/v1/current.json?key="+API_KEY+"&q="+location, {mode:'cors'});
    const weather = await data.json();
    console.log(weather);
    const condition = weather.current.condition.text;
    const feel = weather.current.feelslike_f;
    const temp = weather.current.temp_f;
    const wind = weather.current.wind_mph;
    const city = weather.location.name;
    displayWeather(city, condition, feel, temp, wind);
    
    // console.log("You chose " + location + "!");

    

}

async function displayWeather(location,condition,feel,temp,wind){
    const weatherDiv = document.getElementById("weather");
    weatherDiv.replaceChildren();


    const locale = document.createElement("h1");
    locale.textContent = location;
    weatherDiv.appendChild(locale);

    const conditionImage = document.createElement("img");
    weatherDiv.appendChild(conditionImage);

    const currWeather = document.createElement("p");
    currWeather.textContent = condition + " with a temperature of " + temp + " degrees, it feels like " + feel + " degrees and the wind is " + wind + " mph.";
    weatherDiv.appendChild(currWeather);

    if (temp > 80){
        weatherDiv.classList.add("hot");
        weatherDiv.classList.remove("cold");
    }else if(temp < 40){
        weatherDiv.classList.add("cold");
        weatherDiv.classList.remove("hot");
    }else{
        
            weatherDiv.classList.remove("hot");
        
            weatherDiv.classList.remove("cold");
        
    }

    const imgData = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=sH7c268lbaklFUcjxL2Zy6PtUr1oGtqh&s=' + condition, {mode: 'cors'});
    gifData = await imgData.json();
    conditionImage.src = gifData.data.images.original.url;






    // find nice way to display the conditions, color coding for temp, maybe adding raindrops/snowflakes for weather. wind etc.
    // your code up to now displays the city name and, and logs the weather. 


}




