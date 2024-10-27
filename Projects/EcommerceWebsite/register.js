// RegisterValidation
let registerButton=document.querySelector("#registerbutton")
let registerusername=document.querySelector("#registerusername")
let registeremailemial=document.querySelector("#registeremail")
let registerpassword=document.querySelector("#registerpassword")
let registererrormsg=document.querySelectorAll(".register_error_message")
let storeuserDetailAll = JSON.parse(localStorage.getItem("userData")) || [];
registerButton.addEventListener("click",(event)=>{

    event.preventDefault()
    let isUsernameValid=registerUsername()
    let isEmailValid=registerEmail()
    let isPasswordValid=registerPassword()
     if(isUsernameValid && isEmailValid && isPasswordValid){        
           userdetail={
               username: registerusername.value,
               password:registerpassword.value,
               email:registeremailemial.value       
        }
        storeuserDetailAll.push(userdetail)
        console.log(storeuserDetailAll,"store all values")
        localStorage.setItem("userData", JSON.stringify(storeuserDetailAll))
        alert("you registerd Succsesfully")
        openLoginPage()
     }
    
})

function openLoginPage(){
    location.href="Login.html"
}


let registerUsername=()=>{
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_.]{2,14}$/;
    if(usernameRegex.test(registerusername.value)){
        registerusername.style.borderColor ="unset"
        registererrormsg[0].innerHTML="";
        console.log("this is true value")
        return true;
    }
    else{
        registerusername.style.borderColor ="red";
        registererrormsg[0].innerHTML="Username is Invalid";
        console.log("this is false value")
        return false; 
    }
    }
    
    
    function registerEmail(){
        const passwordRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(passwordRegex.test(registeremailemial.value)){
            registeremailemial.style.borderColor ="unset";
            registererrormsg[1].innerHTML="";
            return true;
        }
        else{
            registeremailemial.style.borderColor ="red";
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
        registerpassword.style.borderColor ="red";
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
    