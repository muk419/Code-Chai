function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
   let result= number1 + number2;
   return result
}

let finalValue=addTwoNumbers(2,2)
console.log(finalValue)

function loginUserMessage(username = "sam"){  //note undefined and and emty string false value hoti hai is liye osko ! use karke true kar diya taki wo if ke under jaa sake 
   if(!username){
    console.log("please enter login")
    return
   }
   return `${username} loged in`
}
let loginvalue=loginUserMessage()
console.log(loginvalue)


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// note : kabhi kabhi kya hota hai object me price ke jagha prices ho jataa hai is  wo hume if else se handle karna hota hai
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));