// const num = Number("33abc")
// console.log(isNaN("33abc")); // Returns true
// console.log(isNaN({})); // Returns true
// console.log(typeof "3.14".valueOf()); // Returns 3.14,doesn't perform type coercion
// console.log([1, 2, 3] + ' is an array'); // "1,2,3 is an array" (array is coerced to string)
// console.log({} + ''); // "[object Object]" (empty object is coerced to string)

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply('5', 2)); // 10 (string '5' is coerced to number)
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(+true); // 1

// console.log(null >= 0);

// let str = "Hello";
// str[0] = "h";                // This does not work; strings are immutable
// console.log(str);           // "Hello"

// str = "h" + str.slice(1);   // This creates a new string
// console.log(str);           // "hello"

// const id = Symbol(1)
// console.log(id);

// const func = (a, b) => a * b
// const arr = [234,23423,234324]
// console.log(typeof func == 'function',typeof arr,typeof {},typeof [])

// let str = new String("Madhav")
// let str2 = "Madhav"
// let val = str
// val[0] = 'h'
// console.log(val);

// const min = 25
// const max = 200
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// const arr = { a: 234, b: 23423, c: 234324, d: 23234, e: 245695 };
// const newArr = [1, 2, 3].join(" ");

// console.log(arr);
// console.log(newArr);

// const newArr1 = arr.slice(0, arr.length - 2)
// const newArr2 = arr.splice(0, arr.length - 2)
// console.log(newArr1);
// console.log(arr);
// console.log(newArr2);

// let arr1 = [1, 2, 3];
// let newLength = arr1.push(4, 5); // Adds 4 and 5 to the array
// console.log(arr1); // [1, 2, 3, 4, 5] (Original array is modified)
// console.log(newLength); // 5 (The new length of the array)

// let arr2 = [1, 2, 3];
// let newArr = arr2.concat(4, 5); // Concatenates 4 and 5 into a new array
// console.log(arr2); // [1, 2, 3] (Original array remains unchanged)
// console.log(newArr); // [1, 2, 3, 4, 5] (New array with concatenated values)

// Objects are always compared by reference irrespective of == or === comparison.

// const num1 = [1, 2, 3];
// const num2 = [].concat([1, 2, 3]);
// console.log(num1 == num2);

// Custom Flat

// const customFlat = (initial, depth = Infinity) => {
//     let newDepth = depth;
//     let temp = [];

//     while (newDepth) {
//         // Flatten one level of the array
//         temp = [].concat(...initial);

//         // If no more nested arrays are found, stop
//         initial = temp;
//         if (!initial.some(Array.isArray)) break; // This prevents premature termination

//         // Update initial to the newly flattened array
//         newDepth--;
//     }

//     return initial; // Return the fully flattened array
// };

// // Test input
// const num = [[1, [2, [3, [4, 5, 7, [8, [9]]]]]], [2, [8, [9]]], [3], [4, [4, 5, 7, [8, [9]]]], [5]];
// console.log(customFlat(num));

// Through Reduce -->

// const flatten = (arr, depth = 1) =>
//     arr.reduce((acc, val) =>
//         Array.isArray(val) && depth > 1
//             ? acc.concat(flatten(val, depth - 1))
//             : acc.concat(val), []
//     );

// const arr = [1, [2, [3, [4, 5]]]];
// console.log(flatten(arr, 1)); // [1, 2, [3, [4, 5]]]
// console.log(flatten(arr, 2)); // [1, 2, 3, [4, 5]]
// console.log(flatten(arr, Infinity)); // [1, 2, 3, 4, 5]

// const id = Symbol('Id');

// const employee = {
//     [id]: 1,
//     name: "Madhav Maheshwari",
//     SAP: 500092026
// }

// employee.name = "Madhav Maheshwari2"
// employee["name"] = "Nandini Maheshwari"
// Object.freeze(employee);
// employee.name = "Madhav Maheshwari3" // These changes will not be propogated.
// console.log(employee);

// Singleton Object

// const Singleton = (function () {
//     let instance;

//     function createInstance() {
//         return { name: "I am the instance" };
//     }

//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// })();

// const obj1 = Singleton.getInstance();
// const obj2 = Singleton.getInstance();

// console.log(obj1 === obj2); // true

// Shallow Copying takes place

// const obj1 = { 1: 'a', 2: 'b' }
// const obj2 = { 3: 'c', 4: 'd' }

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// For deep Copying we can use structuredClone method.

// Object.keys is iterable like an array.

// const obj1 = {
//     nameOfOwner: "Madhav Maheshwari"
// }

// const newArr = [1, 2, 3, 4, 5];
// const { 0: elem } = newArr;
// console.log(elem);

// const { nameOfOwner: Name } = obj1;
// console.log(Name);

// const Navbar = ({ company:Company }) => {
//     console.log(Company);
// }

// Navbar({ company: "Madhav" });

// Difference Between Object and Array Destructuring:
// Order matters for arrays: In array destructuring, elements are assigned based on their position (first element, second element, etc.).

// Property names matter for objects: In object destructuring, the names of the variables must match the property names in the object.

// const obj = {
//   username: "Madhav",
//   func: function () {
//     const newFunc = () => {
//       console.log(`${username}`);
//     };
//     newFunc();
//   },
// };

// obj.func();
// Arrow functions don't get their own this context. They inherit this from the lexical scope. If you want to refer to obj.username, you'll need a regular function.

// const func = () => {
//   console.log(this);
// };
// func();

// IIFE ->
// 1. Helps us making a function which runs on program initialization
// 2. If we want that the variables inside no longer exist,or in other words doesn't pollute the global context.

// (function (name) {
//   function btoa() {
//     return "abc";
//   }
//   console.log(btoa());
// })("Madhav");

// Initially Global Execution context is created and is referred to by this keyword.
// First Phase for every execution context: Memory Creation Phase.
// Second Phase for every execution context: Execution Phase.

// console.log(myVar); // Logs: undefined
// console.log(myFunc()); // Logs: 'Hello from myFunc!'

// var myVar = 10;

// function myFunc() {
//   return 'Hello from myFunc!';
// }

// console.log(myVar); // Logs: 10

// For the above code first phase is-> myVar = undefined; myfunct = definition-> execution phase->
// logs undefined, Execution context for function is created in the same way and when function ends function execution
// context gets deleted->myVar = 10;->logs value 10;

// Nullish Coalescing Operator -> It does a safety check for null, for eg: If you don't get any valid response then you are assigned
// null or undefined otherwise the value.

// It handle cases where the returned value can be other falsy values like 0 or '' or false.

// let var1 = null ?? undefined;
// console.log(var1);
// let var2 = null ?? 0;
// console.log(var2);

// Optional Chaining Operator -> Helps you in safe access of the properties of an object or array, if the property is not there
// it simply returns undefined instead of throwing an error.

// const user = {
//   name: "Madhav",
//   address: {
//     street: "123 Main St",
//   },
// };

// // Safe access using optional chaining
// console.log(user.address?.street); // Output: '123 Main St'
// console.log(user.address?.city); // Output: undefined

// // Without optional chaining, it would throw an error if address is undefined
// console.log(user.profile?.bio); // Output: undefined

// const map = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ]);

// // Iterating over map entries
// for (const [key, value] of map) {
//   console.log(key, value); // logs key-value pairs
// }

// foreach can't return anything whereas map,filter and reduce return a new deep copy of the original array.

// DOM Manipulation:

// const button = document.getElementById("myButton");
// button.innerText-> it shows the text that is actually present on the button.
// button.textContent-> it shows the text that is present on the button+text that is not visible.
// button.innerHTML-> it shows the text that is present on the button+text that is not visible + HTML tags.

// HTML Collection and NodeList are different types of collections, not arrays.

// Through createElement method we can create new HTML elements only in memory but we can't see them in the browser, because
// of that we will have to appendChild them to the DOM.

// Prefer appendChild over innerHTML to avoid XSS attacks.
// The problem is if innerHTML is used, any HTML code that is inserted can be executed leaving the site vulnerable.
// Whereras appendChild only creates a new node, it doesn't execute the HTML code embedded in it.

// Event Propogation -> Event bubbles up the DOM tree from the target element to the parent element.
// There are two types of event bubbling: Capturing and bubbling.
// By default, event bubbles up from the target element to the parent element, but we can prevent it using stopPropagation() method.
// or we can set capturing true, in which case event bubbles down from the parent element to the target element.

// Promise is the eventual completion or failure of an asynchronous operation and also the value associated with the completion or
// failure.

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Promise 1 resolved');
//     resolve("resolved promise");
//     console.log("Resolved promise");
//   }, 2000);
// });

// console.log(
//   promise1.then((resolve) => {
//     // console.log("resolved");
//     console.log(resolve);
//   })
// );

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let val = true;
//     if (!val) {
//       resolve({ name: "Madhav", description: "Boy" });
//     } else {
//       reject("Promise 4 rejected");
//     }
//   }, 2000);
// });

// const ans = promise4
//   .then((user) => {
//     console.log(user.username);
//     return;
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// A fetch promise is rejected only when there is a network error i.e., some permissions issue or some internet connections problem
// and otherwise always resolved and we have to check for statuses manually.
// Or you can say it will go in catch when it is not even able to make any request.

// Status Codes ->

// 404 Not Found - The server cannot find the requested resource.
// 403 Forbidden - The client does not have access rights to the content;
// 500 Internal Server Error - The server has encountered a situation it does not know how to handle.
// 200 OK - The request succeeded.
// 303 See Other - The server sent this response to direct the client to get the requested resource at another URI with a GET request.

// const amazing = new Promise((resolveOuter) => {
//   resolveOuter(
//     new Promise((resolveInner) => {
//       setTimeout(resolveInner, 1000);
//     }).then(() => "Resolved")
//   );
// });

// console.log(amazing);

// OOPS

// Encapsulation - Protected access of data - You can use the data but can't modify it according to your will...
// Let's say you wanted to encrypt it...

function Counter() {
  let count = 0; // Private variable, accessible only inside the closure

  return {
    increment: function () {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count: ${count}`);
    },
    getCount: function () {
      return count; // Provides controlled access to the private variable
    },
  };
}

const counter = Counter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log(counter.getCount()); // 1
// console.log(counter.count); // Undefined: `count` is not directly accessible

// Abstraction hides the complex implementation details of an object and exposes only the essential features to the user.
