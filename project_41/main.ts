/*

41. Magicians:

Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



*/

let magicianNames=["Zahid","Shahzad","Tariq","Sohaib"]

function show_magicians(){
    for(let item of magicianNames){
        console.log(item);
        
    }
}

show_magicians()