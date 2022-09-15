//https://api.openweathermap.org/data/2.5/weather?q=London&APPID=7ede2840c992ead1534f5115013dd6f1
//Example of a call for london

//1.) Retreive all of the variables I would like to recieve
//2.) Look at other projects to see what they have included
//3.) Create the logic for displaying different icons and diff animations for the website, i.e. background
//3.) Creat the try/catch logic
//4.) If it doesnt work, then print a message to the user maybe??


let text = document.getElementById('temp');

async function getTemp(){
    let userInput = document.getElementById("search").value;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=7ede2840c992ead1534f5115013dd6f1`,{mode:'cors'});
    let weatherData = await response.json();
    text.innerHTML = weatherData.main.temp;

}