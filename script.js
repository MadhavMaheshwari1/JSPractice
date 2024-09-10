// Q1: What is the output of the following code and why?
//
// function ABC() {
//   console.log(a);
//   var a = 10;
// }
//
// ABC();

// Answer: In the execution context of function ABC() we have {a:undefined} in memory creation phase, in execution phase
// when js engine sees the first line then console logs undefined.

// Follow Up question ->
//
//
// function ABC() {
//     console.log(a, b, c);
//     var a = 10; const b = 10; const c = 10;
// }

// ABC();

// Answer: In the execution context of function ABC() we have {a:undefined} in memory creation phase,but before initialisation and
// after declaration b and c will be in TDZ(Temporal Dead Zone) because of which even the memory for both of them is created
// but unlike var they are not intialised with undefined because of which js engine throws the error of reference error when
// encounters b.

// Q2: Based on implicit and explicit binding

// var obj = {
//     name: "Madhav",
//     greet: function () {
//         console.log("Good morning!", this.name);
//     }
// }
// var obj2 = {
//     name: "Vasu"
// }

// obj.greet.call(obj2);

// Answer: .call(thisContext, arg1,arg2,...) provides this context to the function in this case provides name:"Vasu" to greet.
// But if the greet function would have been an arrow function then this would refer to the enclosing scope which is the window object
// because of which in that case we wouldn't be seeing anything logged.

// Q3: Creating a cached/memoized function.

function memoizedFunction(fn) {
    const result = new Map();

    return function (...params) {
        const key = JSON.stringify(params); // Use JSON.stringify to create a unique key for the parameters
        if (result.has(key)) {
            return result.get(key);
        } else {
            const value = fn(...params);
            result.set(key, value);
            return value;
        }
    }
}

function clumsySquare(...params) {
    for (let i = 0; i < 1000000000; i++) { }

    return params.reduce((acc, curr) => {
        return acc * curr;
    }, 1);
}

const myFunc = memoizedFunction(clumsySquare);

// console.log("Testing clumsySquare:");
// console.time("clumsySquare");
// console.log(clumsySquare(103334, 204343)); // Call the normal function
// console.timeEnd("clumsySquare");

// console.log("clumsySquare Second Call");
// console.time("clumsySquare");
// console.log(clumsySquare(103334, 204343)); // Call the normal function
// console.timeEnd("clumsySquare");

console.log("Testing memoized function:");
console.time("memoizedFunction First Call");
console.log(myFunc(103334, 204343, 400)); // Call the memoized function
console.timeEnd("memoizedFunction First Call");

console.time("memoizedFunction Second Call");
console.log(myFunc(103334, 204343, 400)); // Call the memoized function again
console.timeEnd("memoizedFunction Second Call");






