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

// function memoizedFunction(fn) {
//     const result = new Map();

//     return function (...params) {
//         const key = JSON.stringify(params); // Use JSON.stringify to create a unique key for the parameters
//         if (result.has(key)) {
//             return result.get(key);
//         } else {
//             const value = fn(...params);
//             result.set(key, value);
//             return value;
//         }
//     }
// }

// function clumsySquare(...params) {
//     for (let i = 0; i < 1000000000; i++) { }

//     return params.reduce((acc, curr) => {
//         return acc * curr;
//     }, 1);
// }

// const myFunc = memoizedFunction(clumsySquare);

// console.log("Testing clumsySquare:");
// console.time("clumsySquare");
// console.log(clumsySquare(103334, 204343)); // Call the normal function
// console.timeEnd("clumsySquare");

// console.log("clumsySquare Second Call");
// console.time("clumsySquare");
// console.log(clumsySquare(103334, 204343)); // Call the normal function
// console.timeEnd("clumsySquare");

// console.log("Testing memoized function:");
// console.time("memoizedFunction First Call");
// console.log(myFunc(103334, 204343, 400)); // Call the memoized function
// console.timeEnd("memoizedFunction First Call");

// console.time("memoizedFunction Second Call");
// console.log(myFunc(103334, 204343, 400)); // Call the memoized function again
// console.timeEnd("memoizedFunction Second Call");

// Q4 : Promises based questions

// 1. Basic Promise Creation
// Write a function `asyncOperation` that returns a Promise. The Promise should resolve with the string "Success" after 2 seconds
// and reject with the string "Error" if the condition `true` is set to `false` inside a `setTimeout` function.

// Soln 1:

// function asyncOperation() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true) { // Adjust this condition as needed
//                 resolve('Success');
//             } else {
//                 reject('Error');
//             }
//         }, 2000);
//     })
// }
// asyncOperation().then((res) => console.log(res)).catch((error) => console.log(error));

// 2. Promise Chaining
// Given a Promise-based function `fetchData` that resolves with a JSON object `{ data: 42 }`,
// write a chain of `.then()` methods to extract the `data` property from the resolved value and log it to the console.

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ "data": 42 });
//             reject('Error');
//         }, 2000);
//     })
// }
// fetchData().then((res) => console.log(res.data)).catch((error) => console.log(error));

// 3. Promise.all
// Create two Promises: one that resolves with the number 10 after 1 second and another that resolves with the number 20 after 2 seconds.
// Use `Promise.all` to wait for both Promises to resolve and then log their sum to the console.

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 1000);
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(20);
//     }, 2000);
// });

// console.log(promise1);
// Promise.all([promise1, promise2]).then((res) => console.log(res[0] + res[1]));

// 4. Promise.race
// Write a function `fastestOperation` that takes two Promises: one that resolves after 3 seconds with the string "Operation A" and
// another that resolves after 1 second with the string "Operation B". Use `Promise.race` to return the result of the faster operation.

// const promiseA = new Promise(resolve => setTimeout(() => resolve('Operation A'), 3000));
// const promiseB = new Promise(resolve => setTimeout(() => resolve('Operation B'), 1000));

// Promise.race([promiseA, promiseB])
//   .then(result => {
//     console.log(result); // Output: "Operation B"
//   });

// 5. Promise Handling with Async/Await
// Convert the following Promise-based code to use `async`/`await` syntax:
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Data received');
//     }, 1000);
//   });
// }
// fetchData().then(data => {
//   console.log(data);
// }).catch(error => {
//   console.error(error);
// });

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data received'), 1000);
    });
}

(async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();
