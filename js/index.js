/*Count down function*/

// getTime() Returns the number of milliseconds since 1970/01/01:
// new Date("string") - sets a specific date
let countDownDate = new Date("Dec 01, 2021 09:30:00").getTime();
// setInterval(function, milliseconds) triggeres a function at a specified interval(in milliseconds)
let discount = setInterval(function () {
    // Achieving the number of of milliseconds since 1970/01/01 until now
    let today = new Date().getTime();
    // defining the amount of time from now to the expiration date
    let amount = countDownDate - today;
    // defining the amout of days/hours/minutes/seconds until the expiration date;
    // The Math.floor() method rounds a number downwards to the nearest integer, and returns the result
    let days = Math.floor(amount / (1000 * 60 * 60 * 24));
    let hours = Math.floor((amount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((amount % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((amount % (1000 * 60)) / 1000);
    // The code searches the html for a specific ID and outputs the results from above
    document.querySelector(".count-down").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    // if the variable "amout" is 0 or lower clearInterval() stops the execution of the function discount
    if (amount <= 0) {
    clearInterval();
    document.querySelector(".count-down").innerHTML = "discounted price is over ";
    }
    // the function is triggered every second
},1000)