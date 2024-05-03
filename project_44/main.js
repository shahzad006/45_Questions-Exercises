/*

44. Sandwiches:

Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



*/
function mySandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want  Sandwiches of ".concat(items);
}
var collects1 = mySandwiches("Cheeze ", " Ham ", " Lettuce ");
var collects2 = mySandwiches(" Turkey ", " Swiss ");
var collects3 = mySandwiches();
console.log(collects1);
console.log(collects2);
console.log(collects3);
