// First goal is to get current date to display on the page as well as five following days using moment.js() and jQuery
var currentDay = $("#todaysDate");
var date = moment().format('MMMM Do, YYYY');
currentDay.text(date)

var currentTemp = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHumidity = $("#currentHumidity");
var currentUV = $("#currentUV");
var searchList = $("#mySearches")


// first 

// First goal is to get current date to display on the page as well as five following days using moment.js() and jQuery
var currentDay = $("#todaysDate");
var date = moment().format('MMMM Do, YYYY');
currentDay.text(date)

var currentTemp = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHumidity = $("#currentHumidity");
var currentUV = $("#currentUV");


// first day
var tempTwo = $("#tempTwo");
var windTwo = $("#windTwo");
var humidityTwo = $("#humidityTwo");

// second day
var tempThree = $("#tempThree");
var windThree = $("#windThree");
var humidityThree = $("#humidityThree");

// third day
var tempFour = $("#tempFour");
var windFour = $("#windFour");
var humidityFour = $("#humidityFour");

// fourth day
var tempFive = $("#tempFive");
var windFive = $("#windFive");
var humidityFive = $("#humidityFive");

// fifth day
var tempSix = $("#tempSix");
var windSix = $("#windSix");
var humiditySix = $("#humiditySix");


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
// var cityName = $("#city_search").val();
var apiKey = "2b20e1ebc0b012577b54a5df43d1e6b8"
// var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`

// I know my input function needs to begin here and encompass three fetch requests: 1. current weather, 2. current UV using different link, 3. fetch for 5 day with loop.
// Still stuck on those because I can't figure out how to get the click event to work and might as well code it all at once. See line 62 for my attempt at the click event
// fetch(apiUrl).then(response => {
//         console.log(respopnse)
//         // return response.json()
// })
//         .then(data => {
//                 //     console.log(data);
//                 //     console.log(data.main.temp)
//                 //     console.log(data.wind.speed)
//                 //     console.log(data.main.humidity)
//                 currentTemp.text(`Temperature: ${data.main.temp}`)
//                 currentWind.text(`Wind: ${data.wind.speed}`)
//                 currentHumidity.text(`Humidity: ${data.main.humidity}`)

//         })

// Assign new id's (ex day1 temp, day2 temp, day3 temp, etc.)
// Return 40 elements 5 days every Three hours (look for 5 day 3 hours doc) - loop through these elements - loop every 8 elements


//localStorage create an empty array - everytime you click the submit button - function makes a call that will be tied to the submit button appendEl to front end with name of last city searched
//push all cities to localStorage and then pull it with a line retreiving the information from localStorage and a line saving the submissions to localStorage

// For functionality I want a user to enter a city name into the input text area.
// Once the input area is populated I want them to click the search button.
// Upon clicking the search button the var cityName is populated with the user's input
$(".searchBtn").on("click", function (e) {
        e.preventDefault();

        var cityName = $("#city_search").val();
        console.log("city is: ", cityName);


        console.log("clicked!");




        // var lat = 0;
        // var lon = 0;



        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`)
                .then(data => {
                        return data.json();
                })
                .then(data => {
                        console.log(data);
                        console.log(data.main.temp)
                        console.log(data.wind.speed)
                        console.log(data.main.humidity)
                        currentTemp.text(`Temperature: ${data.main.temp}`)
                        currentWind.text(`Wind: ${data.wind.speed}`)
                        currentHumidity.text(`Humidity: ${data.main.humidity}`)
                        var lat = data.coord.lat;
                        var lon = data.coord.lon;
                        // console.log("lon and lat are: ", lon, lat);



                        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`)
                                .then(data => {
                                        return data.json();
                                })
                                .then(data => {
                                        console.log("the uv is: ", data)
                                        // currentUV
                                        currentUV.text(`UV: ${data.current.uvi}`)
                                })

                        // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}        


                        var fiveDaysURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`

                        fetch(fiveDaysURL)
                                .then(response => {
                                        return response.json();
                                })
                                .then(data => {
                                        console.log("five day response: ", data);

                                        var firstDay = {
                                                temp: data.list[0].main.temp,
                                                wind: data.list[0].wind.speed,
                                                humidity: data.list[0].main.humidity
                                        }

                                        tempTwo.text(`Temp: ${firstDay.temp}`)
                                        windTwo.text(`Wind: ${firstDay.wind}`)
                                        humidityTwo.text(`Humidity: ${firstDay.humidity}`)

                                        var secondDay = {
                                                temp: data.list[7].main.temp,
                                                wind: data.list[7].wind.speed,
                                                humidity: data.list[7].main.humidity
                                        }

                                        tempThree.text(`Temp: ${secondDay.temp}`)
                                        windThree.text(`Wind: ${secondDay.wind}`)
                                        humidityThree.text(`Humidity: ${secondDay.humidity}`)


                                        var thirdDay = {
                                                temp: data.list[15].main.temp,
                                                wind: data.list[15].wind.speed,
                                                humidity: data.list[15].main.humidity
                                        }

                                        tempFour.text(`Temp: ${thirdDay.temp}`)
                                        windFour.text(`Wind: ${thirdDay.wind}`)
                                        humidityFour.text(`Humidity: ${thirdDay.humidity}`)

                                        var fourthDay = {
                                                temp: data.list[23].main.temp,
                                                wind: data.list[23].wind.speed,
                                                humidity: data.list[23].main.humidity
                                        }

                                        tempFive.text(`Temp: ${fourthDay.temp}`)
                                        windFive.text(`Wind: ${fourthDay.wind}`)
                                        humidityFive.text(`Humidity: ${fourthDay.humidity}`)


                                        var fifthDay = {
                                                temp: data.list[31].main.temp,
                                                wind: data.list[31].wind.speed,
                                                humidity: data.list[31].main.humidity
                                        }

                                        tempSix.text(`Temp: ${fifthDay.temp}`)
                                        windSix.text(`Wind: ${fifthDay.wind}`)
                                        humiditySix.text(`Humidity: ${fifthDay.humidity}`)

                                })


                });






        // var citySearch = $(this).siblings("#city_search").val()
        // var time = $(this).parent().attr("id")
        // console.log(citySearch)
        // console.log(time)
        // localStorage.setItem(time, citySearch)
});

// First goal is to get current date to display on the page as well as five following days using moment.js() and jQuery
var currentDay = $("#todaysDate");
var date = moment().format('MMMM Do, YYYY');
currentDay.text(date)

var currentTemp = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHumidity = $("#currentHumidity");
var currentUV = $("#currentUV");


// first day
var tempTwo = $("#tempTwo");
var windTwo = $("#windTwo");
var humidityTwo = $("#humidityTwo");

// second day
var tempThree = $("#tempThree");
var windThree = $("#windThree");
var humidityThree = $("#humidityThree");

// third day
var tempFour = $("#tempFour");
var windFour = $("#windFour");
var humidityFour = $("#humidityFour");

// fourth day
var tempFive = $("#tempFive");
var windFive = $("#windFive");
var humidityFive = $("#humidityFive");

// fifth day
var tempSix = $("#tempSix");
var windSix = $("#windSix");
var humiditySix = $("#humiditySix");


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
// var cityName = $("#city_search").val();
var apiKey = "2b20e1ebc0b012577b54a5df43d1e6b8"
// var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`

// I know my input function needs to begin here and encompass three fetch requests: 1. current weather, 2. current UV using different link, 3. fetch for 5 day with loop.
// Still stuck on those because I can't figure out how to get the click event to work and might as well code it all at once. See line 62 for my attempt at the click event
// fetch(apiUrl).then(response => {
//         console.log(respopnse)
//         // return response.json()
// })
//         .then(data => {
//                 //     console.log(data);
//                 //     console.log(data.main.temp)
//                 //     console.log(data.wind.speed)
//                 //     console.log(data.main.humidity)
//                 currentTemp.text(`Temperature: ${data.main.temp}`)
//                 currentWind.text(`Wind: ${data.wind.speed}`)
//                 currentHumidity.text(`Humidity: ${data.main.humidity}`)

//         })

// Assign new id's (ex day1 temp, day2 temp, day3 temp, etc.)
// Return 40 elements 5 days every Three hours (look for 5 day 3 hours doc) - loop through these elements - loop every 8 elements


//localStorage create an empty array - everytime you click the submit button - function makes a call that will be tied to the submit button appendEl to front end with name of last city searched
//push all cities to localStorage and then pull it with a line retreiving the information from localStorage and a line saving the submissions to localStorage

// For functionality I want a user to enter a city name into the input text area.
// Once the input area is populated I want them to click the search button.
// Upon clicking the search button the var cityName is populated with the user's input
$(".searchBtn").on("click", function (e) {
        e.preventDefault();

        var cityName = $("#city_search").val();
        console.log("city is: ", cityName);


        console.log("clicked!");

        localStorage.setItem("city", cityName)

        searchList.append('<li>' + cityName + '</li>')



        // var lat = 0;
        // var lon = 0;



        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`)
                .then(data => {
                        return data.json();
                })
                .then(data => {
                        console.log(data);
                        console.log(data.main.temp)
                        console.log(data.wind.speed)
                        console.log(data.main.humidity)
                        currentTemp.text(`Temperature: ${data.main.temp}`)
                        currentWind.text(`Wind: ${data.wind.speed}`)
                        currentHumidity.text(`Humidity: ${data.main.humidity}`)
                        var lat = data.coord.lat;
                        var lon = data.coord.lon;
                        // console.log("lon and lat are: ", lon, lat);



                        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`)
                                .then(data => {
                                        return data.json();
                                })
                                .then(data => {
                                        console.log("the uv is: ", data)
                                        // currentUV
                                        currentUV.text(`UV: ${data.current.uvi}`)
                                })

                        // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}        


                        var fiveDaysURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`

                        fetch(fiveDaysURL)
                                .then(response => {
                                        return response.json();
                                })
                                .then(data => {
                                        console.log("five day response: ", data);

                                        var firstDay = {
                                                temp: data.list[0].main.temp,
                                                wind: data.list[0].wind.speed,
                                                humidity: data.list[0].main.humidity
                                        }

                                        tempTwo.text(`Temp: ${firstDay.temp}`)
                                        windTwo.text(`Wind: ${firstDay.wind}`)
                                        humidityTwo.text(`Humidity: ${firstDay.humidity}`)

                                        var secondDay = {
                                                temp: data.list[7].main.temp,
                                                wind: data.list[7].wind.speed,
                                                humidity: data.list[7].main.humidity
                                        }

                                        tempThree.text(`Temp: ${secondDay.temp}`)
                                        windThree.text(`Wind: ${secondDay.wind}`)
                                        humidityThree.text(`Humidity: ${secondDay.humidity}`)


                                        var thirdDay = {
                                                temp: data.list[15].main.temp,
                                                wind: data.list[15].wind.speed,
                                                humidity: data.list[15].main.humidity
                                        }

                                        tempFour.text(`Temp: ${thirdDay.temp}`)
                                        windFour.text(`Wind: ${thirdDay.wind}`)
                                        humidityFour.text(`Humidity: ${thirdDay.humidity}`)

                                        var fourthDay = {
                                                temp: data.list[23].main.temp,
                                                wind: data.list[23].wind.speed,
                                                humidity: data.list[23].main.humidity
                                        }

                                        tempFive.text(`Temp: ${fourthDay.temp}`)
                                        windFive.text(`Wind: ${fourthDay.wind}`)
                                        humidityFive.text(`Humidity: ${fourthDay.humidity}`)


                                        var fifthDay = {
                                                temp: data.list[31].main.temp,
                                                wind: data.list[31].wind.speed,
                                                humidity: data.list[31].main.humidity
                                        }

                                        tempSix.text(`Temp: ${fifthDay.temp}`)
                                        windSix.text(`Wind: ${fifthDay.wind}`)
                                        humiditySix.text(`Humidity: ${fifthDay.humidity}`)

                                })


                });






        // var citySearch = $(this).siblings("#city_search").val()
        // var time = $(this).parent().attr("id")
        // console.log(citySearch)
        // console.log(time)
        // localStorage.setItem(time, citySearch)

});

day
var tempTwo = $("#tempTwo");
var windTwo = $("#windTwo");
var humidityTwo = $("#humidityTwo");

// second day
var tempThree = $("#tempThree");
var windThree = $("#windThree");
var humidityThree = $("#humidityThree");

// third day
var tempFour = $("#tempFour");
var windFour = $("#windFour");
var humidityFour = $("#humidityFour");

// fourth day
var tempFive = $("#tempFive");
var windFive = $("#windFive");
var humidityFive = $("#humidityFive");

// fifth day
var tempSix = $("#tempSix");
var windSix = $("#windSix");
var humiditySix = $("#humiditySix");


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
// var cityName = $("#city_search").val();
var apiKey = "2b20e1ebc0b012577b54a5df43d1e6b8"
// var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`

// I know my input function needs to begin here and encompass three fetch requests: 1. current weather, 2. current UV using different link, 3. fetch for 5 day with loop.
// Still stuck on those because I can't figure out how to get the click event to work and might as well code it all at once. See line 62 for my attempt at the click event
// fetch(apiUrl).then(response => {
//         console.log(respopnse)
//         // return response.json()
// })
//         .then(data => {
//                 //     console.log(data);
//                 //     console.log(data.main.temp)
//                 //     console.log(data.wind.speed)
//                 //     console.log(data.main.humidity)
//                 currentTemp.text(`Temperature: ${data.main.temp}`)
//                 currentWind.text(`Wind: ${data.wind.speed}`)
//                 currentHumidity.text(`Humidity: ${data.main.humidity}`)

//         })

// Assign new id's (ex day1 temp, day2 temp, day3 temp, etc.)
// Return 40 elements 5 days every Three hours (look for 5 day 3 hours doc) - loop through these elements - loop every 8 elements


//localStorage create an empty array - everytime you click the submit button - function makes a call that will be tied to the submit button appendEl to front end with name of last city searched
//push all cities to localStorage and then pull it with a line retreiving the information from localStorage and a line saving the submissions to localStorage

// For functionality I want a user to enter a city name into the input text area.
// Once the input area is populated I want them to click the search button.
// Upon clicking the search button the var cityName is populated with the user's input
$(".searchBtn").on("click", function (e) {
        e.preventDefault();

        var cityName = $("#city_search").val();
        console.log("city is: ", cityName);


        console.log("clicked!");




        // var lat = 0;
        // var lon = 0;



        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`)
                .then(data => {
                        return data.json();
                })
                .then(data => {
                        console.log(data);
                        console.log(data.main.temp)
                        console.log(data.wind.speed)
                        console.log(data.main.humidity)
                        currentTemp.text(`Temperature: ${data.main.temp}`)
                        currentWind.text(`Wind: ${data.wind.speed}`)
                        currentHumidity.text(`Humidity: ${data.main.humidity}`)
                        var lat = data.coord.lat;
                        var lon = data.coord.lon;
                        // console.log("lon and lat are: ", lon, lat);



                        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`)
                                .then(data => {
                                        return data.json();
                                })
                                .then(data => {
                                        console.log("the uv is: ", data)
                                        // currentUV
                                        currentUV.text(`UV: ${data.current.uvi}`)
                                })

                        // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}        


                        var fiveDaysURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`

                        fetch(fiveDaysURL)
                                .then(response => {
                                        return response.json();
                                })
                                .then(data => {
                                        console.log("five day response: ", data);

                                        var firstDay = {
                                                temp: data.list[0].main.temp,
                                                wind: data.list[0].wind.speed,
                                                humidity: data.list[0].main.humidity
                                        }

                                        tempTwo.text(`Temp: ${firstDay.temp}`)
                                        windTwo.text(`Wind: ${firstDay.wind}`)
                                        humidityTwo.text(`Humidity: ${firstDay.humidity}`)

                                        var secondDay = {
                                                temp: data.list[7].main.temp,
                                                wind: data.list[7].wind.speed,
                                                humidity: data.list[7].main.humidity
                                        }

                                        tempThree.text(`Temp: ${secondDay.temp}`)
                                        windThree.text(`Wind: ${secondDay.wind}`)
                                        humidityThree.text(`Humidity: ${secondDay.humidity}`)


                                        var thirdDay = {
                                                temp: data.list[15].main.temp,
                                                wind: data.list[15].wind.speed,
                                                humidity: data.list[15].main.humidity
                                        }

                                        tempFour.text(`Temp: ${thirdDay.temp}`)
                                        windFour.text(`Wind: ${thirdDay.wind}`)
                                        humidityFour.text(`Humidity: ${thirdDay.humidity}`)

                                        var fourthDay = {
                                                temp: data.list[23].main.temp,
                                                wind: data.list[23].wind.speed,
                                                humidity: data.list[23].main.humidity
                                        }

                                        tempFive.text(`Temp: ${fourthDay.temp}`)
                                        windFive.text(`Wind: ${fourthDay.wind}`)
                                        humidityFive.text(`Humidity: ${fourthDay.humidity}`)


                                        var fifthDay = {
                                                temp: data.list[31].main.temp,
                                                wind: data.list[31].wind.speed,
                                                humidity: data.list[31].main.humidity
                                        }

                                        tempSix.text(`Temp: ${fifthDay.temp}`)
                                        windSix.text(`Wind: ${fifthDay.wind}`)
                                        humiditySix.text(`Humidity: ${fifthDay.humidity}`)

                                })


                });






        // var citySearch = $(this).siblings("#city_search").val()
        // var time = $(this).parent().attr("id")
        // console.log(citySearch)
        // console.log(time)
        // localStorage.setItem(time, citySearch)
        // $("#city_search").val(" ")
});

// First goal is to get current date to display on the page as well as five following days using moment.js() and jQuery
var currentDay = $("#todaysDate");
var date = moment().format('MMMM Do, YYYY');
currentDay.text(date)

var currentTemp = $("#currentTemp");
var currentWind = $("#currentWind");
var currentHumidity = $("#currentHumidity");
var currentUV = $("#currentUV");


// first day
var tempTwo = $("#tempTwo");
var windTwo = $("#windTwo");
var humidityTwo = $("#humidityTwo");

// second day
var tempThree = $("#tempThree");
var windThree = $("#windThree");
var humidityThree = $("#humidityThree");

// third day
var tempFour = $("#tempFour");
var windFour = $("#windFour");
var humidityFour = $("#humidityFour");

// fourth day
var tempFive = $("#tempFive");
var windFive = $("#windFive");
var humidityFive = $("#humidityFive");

// fifth day
var tempSix = $("#tempSix");
var windSix = $("#windSix");
var humiditySix = $("#humiditySix");


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
// var cityName = $("#city_search").val();
var apiKey = "2b20e1ebc0b012577b54a5df43d1e6b8"
// var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`

// I know my input function needs to begin here and encompass three fetch requests: 1. current weather, 2. current UV using different link, 3. fetch for 5 day with loop.
// Still stuck on those because I can't figure out how to get the click event to work and might as well code it all at once. See line 62 for my attempt at the click event
// fetch(apiUrl).then(response => {
//         console.log(respopnse)
//         // return response.json()
// })
//         .then(data => {
//                 //     console.log(data);
//                 //     console.log(data.main.temp)
//                 //     console.log(data.wind.speed)
//                 //     console.log(data.main.humidity)
//                 currentTemp.text(`Temperature: ${data.main.temp}`)
//                 currentWind.text(`Wind: ${data.wind.speed}`)
//                 currentHumidity.text(`Humidity: ${data.main.humidity}`)

//         })

// Assign new id's (ex day1 temp, day2 temp, day3 temp, etc.)
// Return 40 elements 5 days every Three hours (look for 5 day 3 hours doc) - loop through these elements - loop every 8 elements


//localStorage create an empty array - everytime you click the submit button - function makes a call that will be tied to the submit button appendEl to front end with name of last city searched
//push all cities to localStorage and then pull it with a line retreiving the information from localStorage and a line saving the submissions to localStorage

// For functionality I want a user to enter a city name into the input text area.
// Once the input area is populated I want them to click the search button.
// Upon clicking the search button the var cityName is populated with the user's input
$(".searchBtn").on("click", function (e) {
        e.preventDefault();

        var cityName = $("#city_search").val();
        console.log("city is: ", cityName);


        console.log("clicked!");




        // var lat = 0;
        // var lon = 0;



        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`)
                .then(data => {
                        return data.json();
                })
                .then(data => {
                        console.log(data);
                        console.log(data.main.temp)
                        console.log(data.wind.speed)
                        console.log(data.main.humidity)
                        currentTemp.text(`Temperature: ${data.main.temp}`)
                        currentWind.text(`Wind: ${data.wind.speed}`)
                        currentHumidity.text(`Humidity: ${data.main.humidity}`)
                        var lat = data.coord.lat;
                        var lon = data.coord.lon;
                        // console.log("lon and lat are: ", lon, lat);



                        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`)
                                .then(data => {
                                        return data.json();
                                })
                                .then(data => {
                                        console.log("the uv is: ", data)
                                        // currentUV
                                        currentUV.text(`UV: ${data.current.uvi}`)
                                })

                        // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}        


                        var fiveDaysURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`

                        fetch(fiveDaysURL)
                                .then(response => {
                                        return response.json();
                                })
                                .then(data => {
                                        console.log("five day response: ", data);

                                        var firstDay = {
                                                temp: data.list[0].main.temp,
                                                wind: data.list[0].wind.speed,
                                                humidity: data.list[0].main.humidity
                                        }

                                        tempTwo.text(`Temp: ${firstDay.temp}`)
                                        windTwo.text(`Wind: ${firstDay.wind}`)
                                        humidityTwo.text(`Humidity: ${firstDay.humidity}`)

                                        var secondDay = {
                                                temp: data.list[7].main.temp,
                                                wind: data.list[7].wind.speed,
                                                humidity: data.list[7].main.humidity
                                        }

                                        tempThree.text(`Temp: ${secondDay.temp}`)
                                        windThree.text(`Wind: ${secondDay.wind}`)
                                        humidityThree.text(`Humidity: ${secondDay.humidity}`)


                                        var thirdDay = {
                                                temp: data.list[15].main.temp,
                                                wind: data.list[15].wind.speed,
                                                humidity: data.list[15].main.humidity
                                        }

                                        tempFour.text(`Temp: ${thirdDay.temp}`)
                                        windFour.text(`Wind: ${thirdDay.wind}`)
                                        humidityFour.text(`Humidity: ${thirdDay.humidity}`)

                                        var fourthDay = {
                                                temp: data.list[23].main.temp,
                                                wind: data.list[23].wind.speed,
                                                humidity: data.list[23].main.humidity
                                        }

                                        tempFive.text(`Temp: ${fourthDay.temp}`)
                                        windFive.text(`Wind: ${fourthDay.wind}`)
                                        humidityFive.text(`Humidity: ${fourthDay.humidity}`)


                                        var fifthDay = {
                                                temp: data.list[31].main.temp,
                                                wind: data.list[31].wind.speed,
                                                humidity: data.list[31].main.humidity
                                        }

                                        tempSix.text(`Temp: ${fifthDay.temp}`)
                                        windSix.text(`Wind: ${fifthDay.wind}`)
                                        humiditySix.text(`Humidity: ${fifthDay.humidity}`)

                                })


                });






        // var citySearch = $(this).siblings("#city_search").val()
        // var time = $(this).parent().attr("id")
        // console.log(citySearch)
        // console.log(time)
        // localStorage.setItem(time, citySearch)
});