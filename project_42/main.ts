/*

42. Great Magicians:

Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


*/

let magicianNames=["Zahid","Shahzad","Tariq","Sohaib"]

function show_magicians(greet){
    for(let item of magicianNames){
        console.log(greet,item);
        
    }
}

show_magicians("Hello, How are you Mr.")