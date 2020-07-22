"use strict";

/*let option ={
    title : "vs code",
    width:500,
    height:200,
};
let {title, ...rest} = option;

console.log(title);
console.log(rest);*/

/*function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));*/
var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));