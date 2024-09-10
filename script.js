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
function ABC() {
    console.log(a, b, c);
    var a = 10; const b = 10; const c = 10;
}

ABC();

// Answer: In the execution context of function ABC() we have {a:undefined} in memory creation phase,but before initialisation and
// after declaration b and c will be in TDZ(Temporal Dead Zone) because of which even the memory for both of them is created 
// but unlike var they are not intialised with undefined because of which js engine throws the error of reference error when 
// encounters b.