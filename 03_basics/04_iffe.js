// (function myname(){
//     console.log("hi")
// })()                
// global variable ke polution se bachne ke liye IIFE use karte hai 

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//agar humdo IIFI likhte hai ek hu file me tho  ye semicolone lagana pdhta hai  nahi tho error deta hai 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')



