/*

17. Shrinking Guest List:

You just found out that your new dinner table won’t arrive in time for the dinner, and you have
space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you
pop a name from your list, print a message to that person letting them know you’re sorry you can’t
invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you

actually have an empty list at the end of your program.



*/

let guestList:string[]= ["Ali", "Ahsan", "Asad", "Aslam", "Azhar","Shahzad"];

console.log(`Table is not avaible I can invite only 2 persone `);


// Remove guests from your list one at a time until only two names remain in your list.

let guestList1=guestList.pop();
console.log(`Sorry Mr.${guestList1} you are not invited\n`);

let guestList2=guestList.pop();
console.log(`Sorry Mr.${guestList2} you are not invited\n`);

let guestList3=guestList.pop();
console.log(`Sorry Mr.${guestList3} you are not invited\n`);

let guestList4=guestList.pop();
console.log(`Sorry Mr.${guestList4} you are not invited\n`);



for(let i=0;i<guestList.length; i++){
    
    console.log(`Mr.${guestList[i]} you are still invited`);
    
}



guestList.pop();
guestList.pop();

console.log(`${guestList}`);
