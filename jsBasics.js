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
// null otherwise the value.

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
