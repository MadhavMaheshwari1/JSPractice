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

// function Counter() {
//   let count = 0; // Private variable, accessible only inside the closure

//   return {
//     increment: function () {
//       count++;
//       console.log(`Count: ${count}`);
//     },
//     decrement: function () {
//       count--;
//       console.log(`Count: ${count}`);
//     },
//     getCount: function () {
//       return count; // Provides controlled access to the private variable
//     },
//   };
// }

// const counter = Counter();
// counter.increment(); // Count: 1
// counter.increment(); // Count: 2
// counter.decrement(); // Count: 1
// console.log(counter.getCount()); // 1
// console.log(counter.count); // Undefined: `count` is not directly accessible

// Abstraction hides the complex implementation details of an object and exposes only the essential features to the user.

// class Car {
//   startEngine() {
//     console.log("Engine started...");
//   }

//   drive() {
//     console.log("Driving...");
//     this.stop();
//   }

//   // Abstracted implementation
//   stop() {
//     console.log("Car stopped.");
//   }
// }

// const car = new Car();
// car.startEngine(); // Exposes functionality
// car.drive(); // Hides underlying complexities about stop...

// Inheritance allows a class (child) to acquire properties and methods from another class (parent), promoting code reuse.

// Parent Class
// class Animal {
//     constructor(name, species) {
//       this.name = name;
//       this.species = species;
//     }

//     eat() {
//       console.log(`${this.name} is eating.`);
//     }

//     sleep() {
//       console.log(`${this.name} is sleeping.`);
//     }
//   }

//   // Child Class 1
//   class Dog extends Animal {
//     constructor(name, breed) {
//       super(name, "Dog");
//       this.breed = breed;
//     }

//     bark() {
//       console.log(`${this.name}, the ${this.breed}, is barking.`);
//     }
//   }

//   // Child Class 2
//   class Cat extends Animal {
//     constructor(name, color) {
//       super(name, "Cat");
//       this.color = color;
//     }

//     meow() {
//       console.log(`${this.name}, the ${this.color} cat, is meowing.`);
//     }
//   }

//   // Usage
//   const tommy = new Dog("Tommy", "Golden Retriever");
//   tommy.eat(); // Tommy is eating.
//   tommy.bark(); // Tommy, the Golden Retriever, is barking.

//   const kitty = new Cat("Kitty", "white");
//   kitty.sleep(); // Kitty is sleeping.
//   kitty.meow(); // Kitty, the white cat, is meowing.

// Polymorphism means "many forms" — a method can behave differently depending on the object calling it.

// In JavaScript, polymorphism is achieved primarily through Method Overriding (Runtime Polymorphism) and method overloading (simulated, not natively supported).

// Method Overriding (Runtime Polymorphism)

// A child class can redefine a method of its parent class.
// When the method is called on an object, the version of the method specific to the object's class is executed.

// Dynamic Method Invocation
// JavaScript decides which method to invoke based on the type of the object at runtime.

// Parent Class
// class Animal {
//     speak() {
//       console.log("The animal makes a sound.");
//     }
//   }

//   // Child Class 1
//   class Dog extends Animal {
//     speak() {
//       console.log("The dog barks.");
//     }
//   }

//   // Child Class 2
//   class Cat extends Animal {
//     speak() {
//       console.log("The cat meows.");
//     }
//   }

//   // Usage
//   const animals = [new Animal(), new Dog(), new Cat()];

//   animals.forEach((animal) => {
//     animal.speak();
//   });

// Output:
// The animal makes a sound.
// The dog barks.
// The cat meows.

// Simplified Maintenance and flexibility - Polymorphism ensures that behavior changes are confined to specific classes, minimizing the need for changes in higher-level code.

// Compile-Time Polymorphism (Method Overloading)

// JavaScript does not natively support method overloading like some other languages (e.g., Java or C++).
// However, method overloading can be simulated using default parameters or conditional logic.

// function greet(name, age) {
//   if (age) {
//     console.log(`Hello ${name}, you are ${age} years old.`);
//   } else {
//     console.log(`Hello ${name}.`);
//   }
// }

// greet("Madhav", 25); // Hello Madhav, you are 25 years old.
// greet("Madhav");     // Hello Madhav.

// -> For more strict parsing of the code...
// "use strict";

// function sayHello() {
//   console.log(this);
// }
// sayHello(); // `this` is the global object in non-strict mode or `undefined` in strict mode.

// const person = { name: "Madhav", sayHello };
// person.sayHello(); // `this` is `person`.

// function sum(a, a, c) {
//   // Error: Duplicate parameter name not allowed
//   return a + a + c;
// }-> not allowed in strict mode but normally allowed...
// console.log(this);

// How Context Changes:

// Default context: In the global scope, this refers to the global object (window in browsers, global in Node.js).
// Function calls: In strict mode, this is undefined for standalone functions. Without strict mode, it refers to the global object.
// Method calls: this refers to the object owning the method.
// Arrow functions: They don't have their own this and inherit it from their parent scope.

// When you call any function with new...
// A new object is created, this being {} as well.
// Now you can bind different properties to this object.
// and now this.__proto__ points to the user.prototype...
// Every newly created object has its own this...

// function user(username, loginCount) {
//   this.username = username;
//   this.loginCount = loginCount;
// }

// const madhav = new user("Madhav", 5); // new is necessary because it binds this to the newly created object...
// console.log(madhav);

// this is a reference to the current object in the execution context.
// instanceof operator tests constructor prototype chain with object's prototype chain, if object appears in constructor chain, then true else false...

// function Obj(username, loginCount) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.greet = function () {
//     console.log(`Hello ${username}`);
//   };
// }

// const madhav1 = new Obj("Madhav", 5);
// const madhav2 = new Obj("Madhav", 5);
// console.log(madhav1.greet === madhav2.greet);// false as both have different this contexts...
// console.log(Obj instanceof madhav1); // error as correct syntax is: (obj instanceof constructorFunction)...
// All JavaScript numbers are 64-bit floating-point numbers...

// const num = new Number(2);
// console.log(num);

// When you try to run a function on a primitive js wraps the primitive into corresponding object (for strings only) and then you are
// able to run a function on the primitive...

// To convert an array of objects into an array of array...

// const num1 = [
//   { name: "Madhav", value: "Helsdlo" },
//   { name: "Madsdfhav", value: "Hesfllo" },
//   { name: "Madhasdfvsdf", value: "Hellsdfo" },
//   { name: "Madhsdfsdfav", value: "Helsdflo" },
// ];

// const num2 = num1.map((val, ind) => {
//   const newArr = Object.keys(val).map((key) => val[key]);
//   return newArr;
// });

// console.log(num2);

// Object.values() provides an array of object's enumerable propertie's values...
// Much easier than above...

// map,reduce and filter makes a shallow copy(for reference data types only) of the array you are running on it...

// const num1 = [
//   { name: "Madhav", value: "Helsdlo" },
//   { name: "Madsdfhav", value: "Hesfllo" },
//   { name: "Madhasdfvsdf", value: "Hellsdfo" },
//   { name: "Madhsdfsdfav", value: "Helsdflo" },
// ];

// const num2 = num1.map((val) => val);
// console.log((num2[0].name = "Madhav1234"));
// console.log(num1);

// Functions in js are first class objects, meaning they can be assigned to a variable, called, can be returned, can be assigned some values...
// function greet() {
//   console.log("HELLO");
// }
// greet.help = "Madhav";
// console.log(greet);

// By default every reference data type inherit from Object.prototype unless specified through Object.create(null)...
// .prototype is available to only constructor functions and not to instances of them...
// You can normally just add any function to instances without prototype usage...

// Array.prototype.func = function (num) {
//   return num * 10;
// };

// const num1 = [
//   { name: "Madhav", value: "Helsdlo" },
//   { name: "Madsdfhav", value: "Hesfllo" },
//   { name: "Madhasdfvsdf", value: "Hellsdfo" },
//   { name: "Madhsdfsdfav", value: "Helsdflo" },
// ];

// // console.log(num1.func(5)); // Outputs: 50
// num1.func = function(){
//     return 50;
// }
// console.log(num1.func());
// const arr = Object.create(Array); // Array is a constructor function, so its prototype is pointing
// constructor but its actually normal object...
// console.log(arr);

// obj got the prototype chain of Array constructor function and therefore of Array.prototype also...
// const obj = Object.create(Array);
// console.log(obj.length);
// console.log(obj.from("String"));

// Everything inherits from Object.prototype but we are not able to inherit static method of Object constructor...
// Array.prototype.from();

// Static methods are required when you don't want to instantiate new instances and without your work is getting done...
// or you want to create methods that are same for all instances of an object...
// can be made with the help of keyword static...

// We can also make prototype chain of different objects by using __proto__: objectYouWantToAttach, but older syntax...
// New Syntax - Object.setPrototypeOf(objYouWantToHavePrototypeInOfOtherObj,protoOfOtherObj);

// Scope determines accessibility whereas Context refers to the current environment(created by functions,block scope or objects ) in which the code is running...

// this refers to the current context, for functions this also include outer scope because functions during time of declaration captures outer scope,
// whereeas objects don't do this, therefore this in this case only refer to the object...

// Through .call() for any function we can explicitly bind the current function's this to another this...
// call() vs apply(), call takes space seperated arguments whereas apply() takes array like arguments...

// const obj1 = {
//   name: "Madhav",
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// const obj2 = {
//   name: "Khushi",
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// obj1.greet.call(obj2);

// console.log(obj1.greet());
// console.log(func());

// Once a function is bound by .bind(), you can't again change the context...
// The function returned by bind will always point to the new location when called further but not the same with call,
// for call you will have to specify again and again when needed...
