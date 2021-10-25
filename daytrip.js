"use strict"
let destinations = ['Atlanta', 'Savannah', 'Charleston', 'Tybee', 'Ellijay', 'Dahlonega', 'Helen'];
let restaurants = ['McDonalds', 'BurgerKing', 'Subway', 'Shanes', 'TacoBell', 'Checkers', 'Krystal'];
let transportation = ['Walk', 'Scooter', 'Uber', 'Bike', 'Drive', 'Boat','Bus'];
let entertainment = ['Live Music', 'Movies', 'Bars', 'Put-Put', 'Shopping', 'Sight Seeing'];

function randDestination(place){
    let randomD = Math.floor(Math.random() *7)
    let destinationSpot = place[randomD];
        return destinationSpot
}
let placeSelected = randDestination(destinations)
console.log(placeSelected);

function randRestaurants(restaurant){
    let randomF = Math.floor(Math.random() *7)
    let restaurantSpot = restaurant[randomF];
        return restaurantSpot
}
let letsEatHere = randRestaurants(restaurants)
console.log(letsEatHere);

function randTransportation(transport){
    let randomT = Math.floor(Math.random() *7)
    let transportationMethod = transport[randomT];
        return transportationMethod 
}
let letsDrive = randTransportation(transportation)
console.log(letsDrive);

function randEntertainment(fun){
    let randomE = Math.floor(Math.random() *6)
    let entertainmentTime = fun[randomE];
        return entertainmentTime
}
let letsHaveFun = randEntertainment(entertainment)
console.log(letsHaveFun); 

function myFunction(placeSelected, letsEatHere, letsDrive, letsHaveFun,){
    alert("Destination:" + ' ' + placeSelected + "\nRestaurant:" + ' ' + letsEatHere + "\nTransportation:" + ' ' + letsDrive + "\nEntertainment:" + ' ' + letsHaveFun)
}
 myFunction(placeSelected,letsEatHere,letsDrive,letsHaveFun);

let userInput = prompt("would you like to make any changes YES or NO") 
    if (userInput === "yes") {
        let userChange = prompt("What would you like to change? Destination, Restaurant, Transportation, Entertainment")
        if(userChange === "Destination"){
            placeSelected = randDestination(destinations)
            myFunction(placeSelected, letsEatHere, letsDrive, letsHaveFun);
        } else if (userChange === "Restaurant"){
            letsEatHere = randRestaurants(restaurants)
            myFunction(placeSelected, letsEatHere, letsDrive, letsHaveFun);
        } else if (userChange === "Transportation"){
            letsDrive = randTransportation(transportation)
            myFunction(placeSelected, letsEatHere, letsDrive, letsHaveFun);
        } else if (userChange === "Entertainment"){
            letsHaveFun = randEntertainment(entertainment)
            myFunction(placeSelected, letsEatHere, letsDrive, letsHaveFun);
        } else {
        myFunction(placeSelected,letsEatHere,letsDrive,letsHaveFun,);
        }

     let userConfirm = prompt("Are you Happy with your changes? Yes or No")
        if(userConfirm === "yes"){
        myFunction(placeSelected,letsEatHere,letsDrive,letsHaveFun, + 'Enjoy your trip');
        }
    } 
    
    
    
