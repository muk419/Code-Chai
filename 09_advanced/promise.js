// const promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
//    console.log("run the value")
//    resolve()
//     },1000)
// })
// promiseone.then(function(){
//     console.log("prmise consume")
// }).catch(function(){
//     console.log("error")
// })


// new Promise(function(resolve,reject){
//  setTimeout(function(){
//   console.log("run the value")
//   resolve()
//  },1000)
// }).then(function(){
//     console.log("error")
// })

// new Promise(function(resolve,reject){
// setTimeout(function(){
// console.log("data get")
// resolve({usename:"chai",email:"chai@gmail.com"})
// },1000)
// }).then(function(datagetingfromreaolve){
//     console.log(datagetingfromreaolve)
// })


// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({usename:"chai",email:"chai@gmail.com"})
//         }
//         else{
//             reject("Error:something went wrong")
//         }
//         },1000)
// })
// promiseFour.then(function(data) { 
// console.log(data)  
//   return data.usename; 
// }).then((data)=>{
//  console.log(data)
// }).catch(function(error){
//     console.log(` this is error ${error}`)
// }).finally(function(){
//   console.log("the promise either reject or resolve")  
// })

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "chai", email: "chai@gmail.com" });
        } else {
            reject("Error: something went wrong");
        }
    }, 1000);
});

async function consumeFive() {
    try {
        const response = await promiseFive;
        console.log(response); 
    } catch (error) {
        console.log(error); 
    }
}

consumeFive();

async function fetchdata(){

    
    try{
   const storedata=await fetch('https://jsonplaceholder.typicode.com/users');
   const data= await storedata.json()
   console.log(data,"this data getting from this")
    }catch(error){
     console.log(error)
    }
}
fetchdata()


const storedata= fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    let allow=false
    if(allow){
        return response.json()
    }
    else{
        return "getting error"
    }
}).then((data)=>{
console.log(data)
})
.catch((error)=>{
 console.log(error)
})