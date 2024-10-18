// task 1
// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

let taskfirst=["jazz","Blues"];
taskfirst.push("Rock and role");
taskfirst.splice(1,1,"classic")
taskfirst.shift()
taskfirst.unshift("rap","regge")
console.log(taskfirst)

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?



// taks 3




function addnumb(){
let data=[]
while(true){
let inputvalue=20
if(inputvalue==0 || inputvalue==null || !isFinite(inputvalue))break;
data.push(+inputvalue)
}
console.log(data)
}

// task 4

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.


let camelize=(str)=>{
let data=str.split("-")
return data.map((ele)=>ele[0].toUpperCase()+ele.slice(1)).join("*")
}
console.log(camelize("ram-yadav"))


// let arr = [5, 3, 8, 1];
// let filterRange=(arr,a,b)=>{
//  return arr.filter((ele)=>ele<=a || ele>=b)
// }
// console.log(filterRange(arr,2,5))


function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] ,"this is arry")
      if (arr[i] < a || arr[i] > b) {
        console.log(arr,"ky")
        arr.splice(i, 1); // Remove the element at index i
        i--; // Decrease i to account for the array's new length
      }
    }
  }
  
  // Example usage:
  let arr = [5, 3, 8, 1, 10];
  filterRangeInPlace(arr, 1, 7);
  console.log(arr); // Output: [5, 3, 1]

// sort method
  let arrdata = [5, 2, 1, -10, 8]
console.log(  arrdata.sort((a,b)=>b-a))
  
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
// console.log(users.map((ele)=>({
//     fullName: `${ele.name} ${ele.age}`,
//   id: ele.id
// })))


let s=users.reduce((acc,ele)=>(acc+ele.age),0)
   
console.log(s/users.length)



// Create a function unique(arr) that should return an array with unique items of arr.

// let strings = [1,2,3,4,5,5,5,];



// let uniqueStrings = strings.filter((item, index) => {
//   console.log(item,index,"this is value")
//   return strings.indexOf(item) === index;
// });

// console.log(uniqueStrings);


// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// let uniqueStrings = strings.map((item, index) => {
//   if(strings.indexOf(item)===index){
//   return item
//   }
// });

// console.log(uniqueStrings);



let usersData = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];


function groupById(users){
console.log(users)
}


let usersById = groupById(users);



// object task

 let calculator = {
 
  add:function(a,b){
    console.log(a+b)
  },
  mul:function(a,b){
    console.log(a*b)
  },
  div:function(a,b){
    console.log(a/b)
  },
};

calculator.add(1,3)
calculator.mul(2,4)


let revrsearray="mueksh"

let revrseaeValue=(revrsearray)=>{
let valuege= revrsearray.split('')
return valuege.reverse().join("")
}

console.log(revrseaeValue(revrsearray))
