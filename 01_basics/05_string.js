let myName="mukesh"
// console.log(myName[myName.length-1])
// console.log(myName[-1])

// console.log(myName.__proto__) inside string properties are avilable

// It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.
// let lastName="this is my surname Yadav";
// console.log(lastName.indexOf("my")) indax start from 0 O/P is 8


// For instance, the first occurrence of "id" is at position 1. To look for the next occurrence, let’s start the search from position 2:
// console.log(lastName.indexOf("surname",15))


let str='As sly as a fox, as strong as an ox'; 
let target ="as";
let pos =0

while(true){
let foundpos=str.indexOf(target,pos)
console.log(foundpos,"enter in loop")
if(foundpos !== -1)
break
console.log(`found at ${foundpos}`)
pos = foundpos + 1
}


console.log(str.slice(0))

// tarsk1

// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
function firstUpperCase(getName){
let resutl=getName.slice(0,1)
   let getValue=resutl.toUpperCase()
   console.log(getValue+getName.slice(1))
}

firstUpperCase("mukesh")
// task2
// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

function truncate(str,maxlength){
   if(str.length>maxlength){
   return str.slice(0, maxlength - 1) + '…' 
   }
   else{
      return str
   }
   }
   
   let data=truncate("What I'd like to tell on this topic is:", 20);
   console.log(data)


   // task3
//    We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str){
   let amountValue=str.slice(1)
   return parseInt(amountValue)
}
let resrurnAmountValue= extractCurrencyValue("$12000")
console.log(typeof resrurnAmountValue)
