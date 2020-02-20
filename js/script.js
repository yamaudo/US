var today = new Date()
var start = new Date(2020, 0, 2, 14, 0, 0, 0);
var seconds = (today.getTime() - start.getTime()) / 1000;
seconds = seconds | 0;
var days = (seconds / 86400) | 0;
seconds = seconds % 86400;
var hours = (seconds / 3600) | 0;
seconds = seconds % 3600;
var minutes = (seconds / 60) | 0;
seconds = seconds % 60;
console.log(seconds + " " + minutes + " " + hours + " " + days);


var second_element = document.getElementById("second");
var minute_element = document.getElementById("minute");
var hour_element = document.getElementById("hour");
var day_label_element = document.getElementById("day");
var time_label_element = document.getElementById("time");

initialise();

setInterval(clock_second, 1000);

function initialise() {
    rotate_clock(second_element, seconds * 6);
    rotate_clock(minute_element, minutes * 6);
    rotate_clock(hour_element, hours * 15);
    day_label_element.innerHTML = days;
    time_label_element.innerHTML = "";
}

function clock_second() {
    seconds++;
    rotate_clock(second_element, seconds * 6);
    if (seconds === 60) {
        seconds = 0;
        clock_minute();
    }
    // console.log(seconds + " " + minutes + " " + hours);
}

function clock_minute() {
    minutes++;
    rotate_clock(minute_element, minutes * 6);
    if (minutes === 60) {
        minutes = 0;
        clock_hour();
    }
}

function clock_hour() {
    hours++;
    rotate_clock(hour_element, hours * 15);
    if (hours === 24) {
        hours = 0;
        clock_day();
    }
}

function clock_day() {
    days++;
    day_label_element.innerHTML = days;
}

var ishovering = false;

function rotate_clock(element, deg) {
    if (!ishovering) {
        element.style.setProperty('--rotation', deg + 120);
    } else {
        update_label();
    }
}

function update_label() {
    var ss = ((seconds < 10) ? "0" + seconds : seconds);
    var mm = ((minutes < 10) ? "0" + minutes : minutes);
    var hh = ((hours < 10) ? "0" + hours : hours);
    time_label_element.innerHTML = hh + ":" + mm + ":" + ss;
}

function reset() {
    ishovering = true;
    second_element.style.setProperty('--rotation', 120);
    minute_element.style.setProperty('--rotation', 120);
    hour_element.style.setProperty('--rotation', 120);
    update_label();
}

function leave() {
    ishovering = false;
    initialise();
}