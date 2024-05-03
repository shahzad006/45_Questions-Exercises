/*

24. More Conditional Tests:

You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in an array

• Test whether an item is not in an array


*/
// equality and inequality
var myName = "Shahzad";
console.log(myName == "Shahzad");
console.log(myName == "shahzad");
// Numerical
var myAge = 19;
console.log(myAge == 19);
console.log(myAge !== 19);
console.log(myAge < 20);
console.log(myAge > 15);
console.log(myAge <= 20);
console.log(myAge >= 10);
//    and &&   ,  0r ||
var num1 = 10;
var num2 = 7;
console.log(num1 > 8 && num2 < 6);
console.log(num1 > 8 || num2 < 6);
var array = [2, 3, 4, 5, "Zahid"];
var strings = "Asad";
console.log(Array.isArray(array));
console.log(Array.isArray(strings));
