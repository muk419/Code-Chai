// RegisterValidation
let loginButton=document.querySelector("#loginButton")
let loginusername=document.querySelector("#loginusername")
let loginpassword=document.querySelector("#loginpassword")
let errormessage=document.querySelectorAll(".error_message")



loginButton.addEventListener("click",(event)=>{
     event.preventDefault()
     let isUsernameValid=loginUsername()
     let isPasswordValid=loginPassword()
   
      if(isUsernameValid && isPasswordValid){
         let getuserName=JSON.parse(localStorage.getItem("userData")) || [];
         
        getuserName.map((ele)=>{
            console.log(typeof ele.username)
            console.log(typeof loginusername)
       if(ele.username==loginusername && ele.password==loginpassword){
        //  alert("you login successfully")
       }
       else{
        // alert("username and password not matched")
       }
        })
         

      }
})


let loginUsername=()=>{
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_.]{2,14}$/;
if(usernameRegex.test(loginusername.value)){
    loginusername.style.borderColor ="unset"
    errormessage[0].innerHTML="";
    console.log("this is true value")
    return true;
}
else{
    loginusername.style.borderColor ="red";
    errormessage[0].innerHTML="Username is Invalid";
    console.log("this is false value")
    return false; 
}
}


function loginPassword(){
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
if(passwordRegex.test(loginpassword.value)){
    loginpassword.style.borderColor ="unset";
    errormessage[1].innerHTML="";
    return true;
}
else{
    loginpassword.style.borderColor ="red";
    errormessage[1].innerHTML="Password is Invalid";

    return false;
}
}


function resetUsernameError(){
    if (loginusername.value === "") {
        loginusername.style.borderColor = "unset"; 
        console.log(errormessage[0])
        errormessage[0].innerHTML="";
    } else {
        loginUsername();
    }
}

function resetPasswordError(){
    if (loginpassword.value === "") {
        loginpassword.style.borderColor = "unset";
        errormessage[1].innerHTML="";
    } else {
        loginPassword(); 
    }
}

