/*


18. Seeing the World:

Think of at least five places in the world you’d like to visit.

• Store the locations in an array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
order has changed.


*/
var places = ["Paris", "London", "New York", "Tokyo", "Dubai"];
console.log(places);
// copy arrey
var copyofArry1 = places.slice();
var sortedArry = copyofArry1.sort();
console.log(sortedArry);
// Original Arry
console.log(places);
// Resvering original Arry 
//copyarry
var copyofArry2 = places.slice();
var reverseArry = copyofArry2.reverse();
console.log(reverseArry);
// printing original Arry
console.log(places);
// reverve the order of original Arry
var copyofArry3 = places.reverse();
console.log(copyofArry3);
var againreverse = copyofArry3.reverse();
console.log(againreverse); // same as original arry
// sorting original Arry
var sortOrArry = places.sort();
console.log(sortOrArry);
var sortOrArry2 = sortOrArry.reverse();
console.log(sortOrArry2);
