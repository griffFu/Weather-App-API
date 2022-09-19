//https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7ede2840c992ead1534f5115013dd6f1
//Example of a call for london

//1.) try/catch logic for invalid input
//2.) have london be default version
//3.) let input box have london in gray text before you enter anything
//4.) 





//variables we are manipulating
let Atemp = document.getElementById('temp');
let forecast = document.getElementById('forecast');
let humidity = document.getElementById('humidity');
let feelsLike = document.getElementById('feelsLike');



let responseInput = document.getElementById("search");


// event listener thats waiting for user to click enter, must be in input box though
responseInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        getTemp();
    }
});




// function that runs an API when you click enter
async function getTemp(){
    let userInput = document.getElementById("search").value;
    // run the API
    try{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=7ede2840c992ead1534f5115013dd6f1`,{mode:'cors'});
    let weatherData = await response.json();

    //setting the raw ouptput to variables and fixing input
    let tempKel = weatherData.main.temp;
    let tempKelFeels =  weatherData.main.feels_like;
    let responseHumidity = weatherData.main.humidity;
   
    
    
    //populating the HTML
    forecast.innerHTML = weatherData['weather'][0]['description'];
    Atemp.innerHTML = kelvenToFahr(tempKel);
    feelsLike.innerHTML = kelvenToFahr(tempKelFeels);
    humidity.innerHTML = responseHumidity + "%";
    } catch{
        responseInput.setCustomValidity("Location non-existent")
        responseInput.reportValidity();
        renderLondon();
        document.getElementById("search").value = '';
    }

}


function kelvenToFahr (enter){
    let Kelvin = enter;
    //(0K − 273.15) × 9/5 + 32 
    let fahr = Math.round((Kelvin - 273.15) * (9/5) + 32) + "\xB0";
    return fahr;
}





async function renderLondon() {
    let londonInput = "London";
    // run the API
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${londonInput}&APPID=7ede2840c992ead1534f5115013dd6f1`,{mode:'cors'});
    let weatherData = await response.json();

    //setting the raw ouptput to variables and fixing input
    let tempKel = weatherData.main.temp;
    let tempKelFeels =  weatherData.main.feels_like;
    let responseHumidity = weatherData.main.humidity;
   
    
    
    //populating the HTML
    forecast.innerHTML = weatherData['weather'][0]['description'];
    Atemp.innerHTML = kelvenToFahr(tempKel);
    feelsLike.innerHTML = kelvenToFahr(tempKelFeels);
    humidity.innerHTML = responseHumidity + "%";
    
}







/*
decided against this, icons were pissing me off
function findIcon(input){
    //forecast in text
    let givenForecast = input;

    let img = document.createElement("img");
    img.src = "icons/Clear.png"
    icon.appendChild(img);
    // we need to match the icon to the given forecast and return the link for this
    
}
*/