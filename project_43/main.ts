/*

43. Unchanged Magicians:

Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/

let magicianNames=["Zahid","Shahzad","Tariq","Sohaib"]


// making a copy of an array

let magicianNamesCopy= [...magicianNames];


function show_magicians(greet){

    let withGreetings="";
    for(let item of magicianNamesCopy){
        
        withGreetings+=`${greet} ${item}\n`
        
    }

    return withGreetings;
}


let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split(`\n`);
console.log(makeArray);


// Original Array
console.log(magicianNames);
