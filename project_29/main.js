/*

29. Favorite Fruit:

Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make an array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


*/
var favorite_fruits = ["Apple", "Banana", "Orange"];
var fruit = "Orange";
if (favorite_fruits.includes(fruit)) {
    console.log("You really like ".concat(fruit, "!"));
}
else if (favorite_fruits.includes(fruit)) {
    console.log("You really like ".concat(fruit, "!"));
}
else if (favorite_fruits.includes(fruit)) {
    console.log("You really like ".concat(fruit, "!"));
}
else {
    console.log("Fruit are not available");
}
