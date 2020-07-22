"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Curried Function
console.log("curried Function");

var Addfunc = function Addfunc(argument1) {
  return function (argument2) {
    return argument1 + argument2;
  };
};

var result = Addfunc(1)(2);
console.log("Result of Curried function  " + result); //Bind Function -- used to bind with objects 

console.log("bind function");

var Employeename = function Employeename(salary, branch) {
  console.log("Employee name is ".concat(this.name, " with ").concat(this.age, " works under the department of ").concat(this.department, ", \n    salary is ").concat(salary, " and branch is ").concat(branch, " "));
};

var employee = {
  name: "John Doe",
  department: "R & D",
  age: 45
};
var check = Employeename.bind(employee, "23564", "Mumbai");
check(); //Debouncing 

console.log("Debouncing");

var debounce = function debounce(func, delay) {
  var timeoutid;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeoutid) {
      clearTimeout(timeoutid);
    }

    timeoutid = setTimeout(function () {
      func.apply(void 0, args);
    }, delay);
  };
};

document.getElementById("clickme").addEventListener("click", debounce(function (debo) {
  console.log("clicked for debounce check");
}, 2000)); //Checking for filter function:

console.log("Printing odd numbers in array");
var num_array = [2, 5, 34, 21, 13, 67, 8, 7, 9, 45];
console.log("Number Array : ", num_array);
var numOddArray = num_array.filter(function (item) {
  return item % 2 != 0;
});
console.log("Odd Numbers in array : ", numOddArray); //Spread Operator

console.log("spread operator");
var user1 = {
  name: 'Jen',
  age: 22
};
var user2 = {
  name: "Andrew",
  location: "Philadelphia"
};

var mergedUsers = _objectSpread(_objectSpread({}, user1), user2);

console.log(mergedUsers); //Rest parameters

console.log("Rest parameters");

function fun() {
  var sum = 0;

  for (var _len2 = arguments.length, input = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    input[_key2] = arguments[_key2];
  }

  for (var _i = 0, _input = input; _i < _input.length; _i++) {
    var i = _input[_i];
    sum += i;
  }

  return sum;
}

console.log(fun(1, 2));