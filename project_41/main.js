/*

41. Magicians:

Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



*/
var magicianNames = ["Zahid", "Shahzad", "Tariq", "Sohaib"];
function show_magicians() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var item = magicianNames_1[_i];
        console.log(item);
    }
}
show_magicians();
