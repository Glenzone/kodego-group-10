const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),
      pass = document.getElementById("reg-pass"),
      verifyPass = document.getElementById("reg-pass2");

//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{
            if(pwField.type ==="password"){
                pwField.type = "text";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            }else{
                pwField.type = "password";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        }) 
    })
})

// js code to appear signup and login form
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});

//js code to check if password is valid
verifyPass.addEventListener("input", () => {
    let pass1 = pass.value;
    let pass2 = verifyPass.value;
    let validPass = false;
    if (pass1 == pass2) {
        let validPass = true;
        return validPass;
    } else if (pass1 !== pass2) {
        let validPass = false;
        return validPass;
    }
})