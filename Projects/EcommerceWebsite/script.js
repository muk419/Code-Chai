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
         let getuserName=JSON.parse(localStorage.getItem("userDetail")) || [];
         console.log(getuserName)
         if(getuserName.length==0){
            userdetail={
                username:loginusername.value,
                password:loginpassword.value
            }
         }

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

// RegisterValidation
let registerButton=document.querySelector("#registerbutton")
let registerusername=document.querySelector("#registerusername")
let registeremailemial=document.querySelector("#registeremail")
let registerpassword=document.querySelector("#registerpassword")
let registererrormsg=document.querySelectorAll(".register_error_message")

registerButton.addEventListener("click",(event)=>{
    event.preventDefault()
    // let isUsernameValid=registerUsernamenew()
    // let isPasswordValid=registerPasswordnew()
  
     if(isUsernameValid && isPasswordValid){
        let getuserName=JSON.parse(localStorage.getItem("userDetail")) || [];
        if(getuserName.length==0){
           userdetail={
               username: registerusername.value,
               password:registerpassword.value,
               email:registeremailemial.value
           }
        }

     }
})



let registerUsername=()=>{
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_.]{2,14}$/;
    if(usernameRegex.test(registerusername.value)){
        registerusername.style.borderColor ="unset"
        registererrormsg[0].innerHTML="";
        console.log("this is true value")
        return true;
    }
    else{
        loginusername.style.borderColor ="red";
        registererrormsg[0].innerHTML="Username is Invalid";
        console.log("this is false value")
        return false; 
    }
    }
    
    
    function registerEmail(){
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if(passwordRegex.test(registeremailemial.value)){
            registeremailemial.style.borderColor ="unset";
            registererrormsg[1].innerHTML="";
            return true;
        }
        else{
            loginpassword.style.borderColor ="red";
            registererrormsg[1].innerHTML="Password is Invalid";
        
            return false;
        }
        }
    
    function registerPassword(){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if(passwordRegex.test(registerpassword.value)){
        registerpassword.style.borderColor ="unset";
        registererrormsg[2].innerHTML="";
        return true;
    }
    else{
        loginpassword.style.borderColor ="red";
        registererrormsg[2].innerHTML="Password is Invalid";
    
        return false;
    }
    }

    
    function registerresetUsernameError(){
        if (registerusername.value === "") {
            registerusername.style.borderColor = "unset"; 
            registererrormsg[0].innerHTML="";
        } else {
            registerUsername();
        }
    }
    
    
    function registerresetEmailError(){
        if (registeremailemial.value === "") {
            registeremailemial.style.borderColor = "unset";
            registererrormsg[1].innerHTML="";
        } else {
            registerEmail(); 
        }
    }
    function registerresetPasswordError(){
        if (registerpassword.value === "") {
            registerpassword.style.borderColor = "unset";
            registererrormsg[1].innerHTML="";
        } else {
            registerPassword(); 
        }
    }
    