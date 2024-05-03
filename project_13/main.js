/*

13. Your Own Array:

Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
that stores several examples. Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.”


*/
var myFavoriteTransportation = ["Motorcycle", "Car", "Plane", "Boat", "Train", "Bus"];
// for(let i=0; i<myFavoriteTransportation.length; i++){
//     console.log(`I would like to own a ${myFavoriteTransportation[i]}`);
// }
// It will work like this 
console.log("I would like to own a ".concat(myFavoriteTransportation[0]));
console.log("I would like to own a ".concat(myFavoriteTransportation[1]));
console.log("I would like to own a ".concat(myFavoriteTransportation[2]));
console.log("I would like to own a ".concat(myFavoriteTransportation[3]));
console.log("I would like to own a ".concat(myFavoriteTransportation[4]));
