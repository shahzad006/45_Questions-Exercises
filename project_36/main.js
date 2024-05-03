/*

36. T-Shirt:

Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


*/
function make_shirt(size, labal) {
    // return size + labal
    return "My Shirt size is ".concat(size, " and labal is ").concat(labal);
}
var myfun = make_shirt(25, " The Sunny Day");
console.log(myfun);
