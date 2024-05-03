/*


37. Large Shirts:

Modify the make_shirt() function so that shirts are large by default, with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.



*/

// function make_shirt(size:string,labal:string){
//     return size + labal
// }

// let myFun = make_shirt("large"," I love TypeScript");

// console.log(myFun);



// // * Making Large as default

// function make_shirt(labal:string,size:string = "Large"){
//     return size + labal
// }

// let myFun = make_shirt(" I love TypeScript");

// console.log(myFun);






// // * Making medium as default

// function make_shirt(labal:string,size:string = "Medium"){
//     return size + labal
// }

// let myFun = make_shirt(" I love TypeScript");

// console.log(myFun);






// * Making shirt of any size

function make_shirt(labal:string,size:string){
    return size + labal
}

let myFun = make_shirt("any size"," I love TypeScript ");

console.log(myFun);

