const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
      //console.log("Got user details from database");
      // console.log(`Username: ${this.username}`);
      console.log(this);
  }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);




function User(usename,logincount,isLogin){
  this.usename=usename;
  this.logincount=logincount;
  this.isLogin=isLogin
  this.greetings= function(){
    console.log(`my name is ${this.usename}`)
  }
//   return this
}
let  data= new User(12,2,2)
let data2=new User(20,30,30)
console.log(data.greetings(),"thus is my data") 
console.log(data2.constructor)// constructor function give allwas new instance when we not use new then data will be overide 