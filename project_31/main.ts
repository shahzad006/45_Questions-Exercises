/*

31. No Users:

Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
 */




let usernames = ["Shahzad", "Admin", "Junaid", "Sohaib",]

// remove all of the usernames from your array
// usernames = []
// console.log(usernames);

if(usernames.length > 0){

  for(let i = 0; i < usernames.length; i++){
    if(usernames[i] == "Admin"){
        console.log(`\nHello ${usernames[i]}, would you like to see a status report?\n`);
    }else{
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
  }

}else{
    console.log("We need to find some users!");
}