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

// const arr = { "a": 234, "b": 23423, "c": 234324, "d": 23234, "e": 245695 }
// const newArr = arr.join('-')

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

const customFlat = (initial, depth = Infinity) => {
    let newDepth = depth;
    let temp = initial; // Start with the initial array

    while (newDepth > 0) {
        // Flatten one level of the array
        temp = [].concat(...temp); 

        // Check if there are still nested arrays
        if (!temp.some(Array.isArray)) {
            // If there are no more nested arrays, break
            break;
        }

        newDepth--; // Decrease the depth counter
    }

    return temp; // Return the flattened array
};

// Test input
const num = [[1, [2, [3, [4, 5, 7, [8, [9]]]]]], [2, [8, [9]]], [3], [4, [4, 5, 7, [8, [9]]]], [5]];
console.log(customFlat(num, 3)); // Flattening to depth 3
console.log(customFlat(num)); // Flattening to infinity
















