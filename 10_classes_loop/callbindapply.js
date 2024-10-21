// const userdata={
//     username:"mukesh yadav lam",
//     age:28,
//     Designation:"software enigineer",
//     printdetails:function(){
//         console.log(this.username)
//     }
// }
// userdata.printdetails()

// const userdata2={
//     username:"mukesh yadav ram",
//     age:28,
//     Designation:"software enigineer",
// }
// // userdata.printdetails()
// userdata.printdetails.call(userdata2)



// generic function

const userdata={
    username:"mukesh yadav lam",
    age:28,
    Designation:"software enigineer",
   
}

//apply
// let printdetails=function(state1,sate2){
//     console.log(this.username+" "+state1,sate2)
// }
// printdetails.apply(userdata,"delhi",'kolkaat')

// const userdata2={
//     username:"mukesh yadav ram",
//     age:28,
//     Designation:"software enigineer",
// }
// userdata.printdetails()
// printdetails.apply(userdata2,"delhi",'mumbai') //yaha pe hum apply use iar sakte hai q ki hum data ko array me bhi pass kar skate hai like this ["delhi","kolkata//"]
  

// bind

// bind function kya karta hai ki aap function ki ek copy bana lo aur oosko baadf me copy kar skate ho jab chao


let printdetails=function(state1,sate2){
    console.log(this.username+" "+state1,sate2)
}
printdetails.call(userdata,"delhi",'kolkaat')

const userdata2={
    username:"mukesh yadav ram",
    age:28,
    Designation:"software enigineer",
}
// userdata.printdetails()
printdetails.apply(userdata2,["delhi",'mumbai']) 
let  storedata= printdetails.bind(userdata2,"delhjjji",'mumbai') 
console.log(storedata())






