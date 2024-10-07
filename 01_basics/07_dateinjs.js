// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})



// tast1
// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// let tasktone=new Date(2020,2 ,20,3,12)
// console.log(tasktone.toLocaleString())


// task2
// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
 
// function getWeekDay(date){
// let dataget=new Date(date)
// let value=dataget.getDay()
// if(value==0){
//     console.log("Mon")
// }
// else if(value==1){
//     console.log("Tu")
// }
// else if(value==2){
//     console.log("we")
// }
// else if(value==3){
//     console.log("thus")
// }
// else if(value==4){
//     console.log("FR")
// }
// else if(value==5){
//     console.log("SA")
// }
// else{
//     console.log("SUN")
// }
// }
// const dayget=getWeekDay("2020,2 ,40")

// second solution 
// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
//     return days[date.getDay()];
//   }
  
//   let date = new Date(2014, 0, 3);
//   alert( getWeekDay(date) );

// task 3 

// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:


function getDateAgo( dateData,defaultValue){
  let dataget=new Date(dateData)
let myname=dataget.setDate(dataget.getDate() - defaultValue)
console.log( dataget.getDate(),"thisn")
}
let dateData= new Date(2015,0,29)

getDateAgo(dateData,1)
