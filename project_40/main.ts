/*

40. Album:

Write a function called make_album() that builds an Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.

Add an optional parameter to make_album() that allows you to store the number of tracks on an album.

If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make
at least one new function call that includes the number of tracks on an album.


*/


function make_album1(artistName:string, albumTitle:string){
    return {artistName,albumTitle}
}


let album1 =make_album1("Shahzad","Rang-e-Mohabat");
let album2 =make_album1("Zahid","Roshan Andhera");
let album3 =make_album1("Sohaib","Mausam-e-Dil");


console.log(album1);
console.log(album2);
console.log(album3);



// Number of tracksa

function make_album2(artistName:string, albumTitle:string,numberoftracks? :number){
    return {artistName,albumTitle,numberoftracks}
}


let album4 =make_album2("Shahzad","Rang-e-Mohabat", 56);
let album5 =make_album2("Zahid","Roshan Andhera",34);
let album6 =make_album2("Sohaib","Mausam-e-Dil");


console.log(album4);
console.log(album5);
console.log(album6);
