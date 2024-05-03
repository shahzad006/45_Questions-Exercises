/*

16. More Guests:

You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.

• Use append() to add one new guest to the end of your
list.

• Print a new set of invitation messages, one for each person in your list.



*/
var guestList = ["Zahid", "Sohaib", "Ali"];
console.log(guestList);
console.log("We have 3 more friend to invite on dinner\n");
// Adding three more gust
// Add at Starting 
guestList.unshift("Shahzad");
console.log(guestList);
// Add at center 
guestList.splice(2, 0, "Ahmed");
console.log(guestList);
// Add at last
guestList.push("Junaid");
console.log(guestList);
// Print all friend alongwith message
for (var i = 0; i < guestList.length; i++) {
    console.log("Mr.".concat(guestList[i], " you are invited to my dinner"));
}
