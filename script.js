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