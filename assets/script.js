// First goal is to get current date to display on the page as well as five following days using moment.js() and jQuery
var currentDay = $("#todaysDate");
        var date = moment().format('MMMM Do YYYY, h:mm: a');
        currentDay.text(date)

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