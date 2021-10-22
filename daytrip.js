"use strict"

let destinations = ['Atlanta', 'Savannah', 'Charleston', 'Tybee', 'Ellijay', 'Dahlonega', 'Helen'];
let random = Math.floor(Math.random() * destinations.length);
console.log(random, destinations[random]);



































function displayGreeting(timeOfDay, aName) {
    console.log(`Good ${timeOfDay}, ${aName}`);
}

function determineTimeOfDay(clockTime) {
    let timeOfDay;
    if (clockTime < 1200) {
        timeOfDay = "morning";
    }   else if (clockTime < 1800) {
        timeOfDay = "afternoon";
    }   else {
        timeOfDay = "evening";
    }
    return timeOfDay;
}

let aName = "Brandon"
let timeOfDayForToday = determineTimeOfDay(1400);
displayGreeting(timeOfDayForToday, aName);

