//Curried Function
console.log("curried Function")
var Addfunc = (argument1) => {
    return (argument2) => {
        return (argument1+argument2);
    }
}
var result = Addfunc(1)(2);
console.log( "Result of Curried function  " +result);

//Bind Function -- used to bind with objects 
console.log("bind function")
let Employeename = function (salary , branch){
   console.log(`Employee name is ${this.name} with ${this.age} works under the department of ${this.department}, 
    salary is ${salary} and branch is ${branch} `)  
    

}
const employee  = {
    name :"John Doe",
    department : "R & D",
    age : 45,
}
 var check = Employeename.bind(employee,"23564","Mumbai")
 check();


 //Debouncing 
 console.log("Debouncing")

const debounce = (func ,delay) =>{
    let timeoutid;
    return function(...args){
        if(timeoutid){
            clearTimeout(timeoutid)
        }
        timeoutid = setTimeout( () => {
            func(...args)
        }, delay)
    }
}

document.getElementById("clickme").addEventListener("click", debounce (debo => {
    console.log("clicked for debounce check")
},2000))

//Checking for filter function:

console.log("Printing odd numbers in array");

  const num_array=[2,5,34,21,13,67,8,7,9,45];
  console.log("Number Array : ",num_array)
  const numOddArray=num_array.filter((item)=>{
      return (item%2 !=0);
  });
  console.log("Odd Numbers in array : ",numOddArray);

  //Spread Operator
  console.log("spread operator")
  const user1 = { 
    name: 'Jen', 
    age: 22, 
}; 
  
const user2 = { 
    name: "Andrew", 
    location: "Philadelphia" 
}; 
  
const mergedUsers = {...user1, ...user2}; 
console.log(mergedUsers) 

//Rest parameters
console.log("Rest parameters");
function fun(...input){ 
    let sum = 0; 
    for(let i of input){ 
        sum+=i; 
    } 
    return sum; 
} 
console.log(fun(1,2));