"use strict"

let destinations = ['Atlanta', 'Savannah', 'Charleston', 'Tybee', 'Ellijay', 'Dahlonega', 'Helen'];
let restaurants = ['McDonalds', 'BurgerKing', 'Subway', 'Shanes', 'TacoBell', 'Checkers', 'Krystal'];
let transportation = ['Walk', 'Scooter', 'Uber', 'Bike', 'Drive', 'Boat','Bus'];
let entertainment = ['Live Music', 'Movies', 'Bars', 'Put-Put', 'Shopping', 'Sight Seeing'];

let random = Math.floor(Math.random() * destinations.length);
console.log(random, destinations[random]);



