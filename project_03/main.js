//      Exercies 3
/*

3. Name Cases:

Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.

*/
var personName = "shahzad";
//  lowercase
console.log(personName.toLowerCase());
// UpperCase
console.log(personName.toUpperCase());
// titlecase
var firstName = personName.charAt(0).toUpperCase();
var resetName = personName.slice(1).toLowerCase();
var titlecase = firstName + resetName;
console.log(titlecase);
