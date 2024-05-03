//      Exercies 3

/*

3. Name Cases:

Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.

*/


let personName:string= "shahzad";


//  lowercase
console.log(personName.toLowerCase());

// UpperCase
console.log(personName.toUpperCase());

// titlecase
let firstName:string=personName.charAt(0).toUpperCase()
let resetName:string=personName.slice(1).toLowerCase()


let titlecase=firstName+resetName;

console.log(titlecase);



