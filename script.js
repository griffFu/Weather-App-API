//https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7ede2840c992ead1534f5115013dd6f1
//Example of a call for london

//1.) Retreive all of the variables I would like to recieve
//2.) Look at other projects to see what they have included
//3.) Create the logic for displaying different icons and diff animations for the website, i.e. background
//3.) Create the try/catch logic
//4.) If it doesnt work, then print a message to the user maybe??




//variables we are manipulating
let Atemp = document.getElementById('temp');
let forecast = document.getElementById('forecast');
let icon = document.getElementById('icon');
let feelsLike = document.getElementById('feelsLike');



let response = document.getElementById("search");


// event listener thats waiting for user to click enter, must be in input box though
response.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        getTemp();
    }
});




// function that runs an API when you click enter
async function getTemp(){
    let userInput = document.getElementById("search").value;
    // run the API
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=7ede2840c992ead1534f5115013dd6f1`,{mode:'cors'});
    let weatherData = await response.json();

    //setting the raw ouptput to variables and fixing input
    let tempKel = weatherData.main.temp;
    let tempKelFeels =  weatherData.main.feels_like;
    let forecastForIcon = weatherData['weather'][0]['main'];
    
    
    //populating the HTML
    forecast.innerHTML = forecastForIcon;
    Atemp.innerHTML = kelvenToFahr(tempKel);
    feelsLike.innerHTML += kelvenToFahr(tempKelFeels);
    findIcon(forecastForIcon);
}


function kelvenToFahr (enter){
    let Kelvin = enter;
    //(0K − 273.15) × 9/5 + 32 
    let fahr = Math.round((Kelvin - 273.15) * (9/5) + 32) + "\xB0";
    return fahr;
}




function findIcon(input){
    //forecast in text
    let givenForecast = input;

    let img = document.createElement("img");
    img.src = "icons/Clear.png"
    icon.appendChild(img);
    // we need to match the icon to the given forecast and return the link for this
    
}
