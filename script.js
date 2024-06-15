// ############# signup page eye ################################# \\
let peye = document.querySelectorAll(".inputBox #peye");
let cpeye = document.querySelectorAll(".inputBox #cpeye");
let pas = document.querySelector(".inputBox #userPassword");
let cpas = document.querySelector(".inputBox #userConfirmPassword");

// ####### for password ####################### \\

peye.forEach((e) => {
  e.addEventListener("click", () => {
    if (pas.type == "password") {
      pas.type = "text";
      e.classList.add("fa-eye");
      e.classList.remove("fa-eye-slash");
    } else {
      pas.type = "password";
      e.classList.add("fa-eye-slash");
      e.classList.remove("fa-eye");
    }
  });
});

// ####### for confirm password ####################### \\

cpeye.forEach((e) => {
  e.addEventListener("click", () => {
    if (cpas.type == "password") {
      cpas.type = "text";
      e.classList.add("fa-eye");
      e.classList.remove("fa-eye-slash");
    } else {
      cpas.type = "password";
      e.classList.add("fa-eye-slash");
      e.classList.remove("fa-eye");
    }
  });
});

// ############# login page eye ################################# \\
let logpeye = document.querySelector(".inputBox #eye");
let logpass = document.querySelector(".inputBox #password");

// ################ for login password #################### \\
logpeye.addEventListener("click",()=>{
  if(logpass.type == "password"){
    logpass.type = "text";
    logpeye.classList.add("fa-eye")
    logpeye.classList.remove("fa-eye-slash")
  }else{
    logpass.type = "password";
    logpeye.classList.add("fa-eye-slash")
    logpeye.classList.remove("fa-eye")
  }
})

// ##################### Signup Page working  ############################# \\

document.addEventListener("DOMContentLoaded", () => {
  // ############### signup buttons selector ####################### \\
  let signupBtn = document.querySelector("#userSignup");

  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signupValidation();
  });
});

// ######################### function work ############################# \\

let signupValidation = () => {
  let firstName = document.querySelector("#userfirstName").value.trim();
  let lastName = document.querySelector("#userLastName").value.trim();
  let username = document.querySelector("#username").value.trim();
  let email = document.querySelector("#userEmail").value.trim();
  let password = document.querySelector("#userPassword").value.trim();
  let confirmPassword = document.querySelector("#userConfirmPassword").value.trim();
  let profilePic = document.querySelector("#userPic").value.trim();
  // ############### check empty input ########################## \\

    // ##################### empty input ########################### \\

    if ( firstName === "" || lastName === "" || username === "" || email === "" || password === "" || confirmPassword === "" || profilePic === "") {
      swal.fire("Please fill the required filled");
      return
    }
  // ###################### name Validation ################################ \\

     if (firstName.length < 3 || firstName.length > 15 && lastName.length < 3 || lastName.length > 15) {
      swal.fire("Name must be longer than 3 characters and shorter than 15 characters.");
      return
    }

    let num = /[0-9]/; 
    
    if (firstName.search(num) !== -1 || lastName.search(num) !== -1) {
      swal.fire("Name don't contain any number");
    }

    // ##################### user name validation ####################### \\
    if(username.length < 3 || username.length > 15){
      swal.fire("User name must be longer than 3 characters and shorter than 15 characters.")
    }
    let letterPattern = /[a-zA-Z]/;
    let numberPattern = /\d/
    if (username.search(letterPattern) === -1 || username.search(numberPattern) === -1) {
      swal.fire("Username must contain both letters and numbers");
    }
      // #################### email validation ############################# \\
      function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    if(!isValidEmail(email)){
      swal.fire("please enter a valid email address")
    }
    // ############### password validation ####################### \\

    if(password.length > 8 || password.length < 6 && confirmPassword > 8 | confirmPassword < 6){
      swal.fire("password must be 6 or 8 character")
    }
    if(password !== confirmPassword){
      swal.fire("password not matched")
    }
    
  };
