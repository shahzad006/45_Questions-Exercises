/*

36. T-Shirt:

Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


*/

function make_shirt(size:number,labal:string){
    // return size + labal

    return `My Shirt size is ${size} and labal is ${labal}`
}

let myfun= make_shirt(25, " The Sunny Day");

console.log(myfun);



