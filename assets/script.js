// First goal is to get current date to display on the page as well as five following days using moment.js() and jQuery
var currentDay = $("#todaysDate");
        var date = moment().format('MMMM Do YYYY, h:mm: a');
        currentDay.text(date)
var currentTemp = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHumidity = $("#currentHumidity");
var currentUV = $("#currentUV");

var tomorrow = $("#weekday1");
        var date = moment().add(1, 'days').calendar();
        tomorrow.text(date)

var secondDay = $("#weekday2");
        var date = moment().add(2, 'days').calendar();
        secondDay.text(date)

var thirdDay = $("#weekday3");
        var date = moment().add(3, 'days').calendar();
        thirdDay.text(date)

var fourthDay = $("#weekday4");
        var date = moment().add(4, 'days').calendar();
        fourthDay.text(date)

var fifthDay = $("#weekday5");
        var date = moment().add(5, 'days').calendar();
        fifthDay.text(date)

var cityName = "Orlando"
var apiKey = "2b20e1ebc0b012577b54a5df43d1e6b8"
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`

fetch(apiUrl).then(response => {return response.json()}).then(data => {
    console.log(data);
    console.log(data.main.temp)
    console.log(data.wind.speed)
    console.log(data.main.humidity)
    currentTemp.text(`Temperature: ${data.main.temp}`)
    currentWind.text(`Wind: ${data.wind.speed}`)
    currentHumidity.text(`Humidity: ${data.main.humidity}`)
})

// Assign new id's (ex day1 temp, day2 temp, day3 temp, etc.)
// Return 40 elements 5 days every Three hours (look for 5 day 3 hours doc) - loop through these elements - loop every 8 elements
var fiveDaysURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
fetch(fiveDaysURL).then(response => {return response.json()}).then(data => console.log(data))

//localStorage create an empty array - everytime you click the submit button - function makes a call that will be tied to the submit button appendEl to front end with name of last city searched
//push all cities to localStorage and then pull it with a line retreiving the information from localStorage and a line saving the submissions to localStorage

//