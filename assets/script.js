// First goal is to get current date to display on the page as well as five following days using moment.js() and jQuery
var currentDay = $("#todaysDate");
var date = moment().format('MMMM Do, YYYY');
currentDay.text(date)

var currentTemp = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHumidity = $("#currentHumidity");
var currentUV = $("#currentUV");

// moment.js() for forecast days: tomorrow-day 5
var tomorrow = $("#weekday1");
        var date = moment().add(1, 'days').format('dddd');
        tomorrow.text(date)

var secondDay = $("#weekday2");
        var date = moment().add(2, 'days').format('dddd');
        secondDay.text(date)

var thirdDay = $("#weekday3");
        var date = moment().add(3, 'days').format('dddd');
        thirdDay.text(date)

var fourthDay = $("#weekday4");
        var date = moment().add(4, 'days').format('dddd');
        fourthDay.text(date)

var fifthDay = $("#weekday5");
        var date = moment().add(5, 'days').format('dddd');
        fifthDay.text(date)

// Tutor assisted portion below
var cityName = $("#city_search").val();
var apiKey = "2b20e1ebc0b012577b54a5df43d1e6b8"
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`

// I know my input function needs to begin here and encompass three fetch requests: 1. current weather, 2. current UV using different link, 3. fetch for 5 day with loop.
// Still stuck on those because I can't figure out how to get the click event to work and might as well code it all at once. See line 62 for my attempt at the click event
fetch(apiUrl).then(response => {return response.json()}).then(data => {
//     console.log(data);
//     console.log(data.main.temp)
//     console.log(data.wind.speed)
//     console.log(data.main.humidity)
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

// For functionality I want a user to enter a city name into the input text area.
// Once the input area is populated I want them to click the search button.
// Upon clicking the search button the var cityName is populated with the user's input
// $(".searchBtn").on("click", function(e) {
//         e.preventDefault();
//         var citySearch = $(this).siblings("#city_search").val()
//         var time = $(this).parent().attr("id")
//         // console.log(citySearch)
//         // console.log(time)
//         localStorage.setItem(time, citySearch)
//         });