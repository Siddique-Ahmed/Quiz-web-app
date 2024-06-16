// ############# signup page eye ################################# \\

/* #################### 
    signup page eye 
#################### */

let peye = document.querySelectorAll(".inputBox #peye");
let cpeye = document.querySelectorAll(".inputBox #cpeye");
let pas = document.querySelector(".inputBox #userPassword");
let cpas = document.querySelector(".inputBox #userConfirmPassword");

/* #################### 
    for password 
#################### */

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

/* #################### 
for confirm password 
#################### */

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

// ######################## login page eye ######################### \\
let logpeye = document.querySelector(".inputBox #eye");
let logpass = document.querySelector(".inputBox #password");

/* #################### 
  for login password 
#################### */
logpeye.addEventListener("click", () => {
  if (logpass.type == "password") {
    logpass.type = "text";
    logpeye.classList.add("fa-eye");
    logpeye.classList.remove("fa-eye-slash");
  } else {
    logpass.type = "password";
    logpeye.classList.add("fa-eye-slash");
    logpeye.classList.remove("fa-eye");
  }
});

/* ########################### 
          main page
########################### */

let conSign = document.querySelector("#conSign");
let conLog = document.querySelector("#conLog");
let signupPage = document.querySelector(".SignupPage");
let loginPage = document.querySelector(".loginPage");
let mainPage = document.querySelector(".mainPage");

conLog.addEventListener("click", (e) => {
  e.preventDefault();
  convertToLoginPage();
});
conSign.addEventListener("click", (e) => {
  e.preventDefault();
  convertToSignupPage();
});

function convertToLoginPage() {
  loginPage.style.display = "flex";
  mainPage.style.display = "none";
}
function convertToSignupPage() {
  signupPage.style.display = "flex";
  mainPage.style.display = "none";
}
/* ################################ 
  converting signup page to login 
################################ */

let logPage = document.querySelector("#logPage");
logPage.addEventListener("click", (e) => {
  e.preventDefault();
  signupToLogin();
});
function signupToLogin() {
  loginPage.style.display = "flex";
  signupPage.style.display = "none";
}

/*##############################
      Signup Page working  
############################# */

/* ##############################
          function work 
############################## */

let signup = document.querySelector("#signup");

signup.addEventListener("click", (e) => {
  e.preventDefault();
  SignupFormValidation();
});

/*############## 
Save user Data 
############# */

let saveUserDataArr = []; // Array to store user data

// Function to save data to local storage
function saveToLocalStorage() {
  localStorage.setItem("Save", JSON.stringify(saveUserDataArr));
}

// Function to retrieve array from local storage
function loadFromLocalStorage() {
  let retrievedData = localStorage.getItem("Save");
  if (retrievedData) {
    saveUserDataArr = JSON.parse(retrievedData);
  }
}
loadFromLocalStorage(); // Load existing data from local storage on page load

// Function to validate and handle signup form submission
function SignupFormValidation() {
  let firstName = document.querySelector("#userfirstName").value.trim();
  let lastName = document.querySelector("#userLastName").value.trim();
  let username = document.querySelector("#username").value.trim();
  let email = document.querySelector("#userEmail").value.trim();
  let password = document.querySelector("#userPassword").value.trim();
  let confirmPassword = document
    .querySelector("#userConfirmPassword")
    .value.trim();
  let profilePic = document.querySelector("#userPic").value.trim();
  let fullName = `${firstName} ${lastName}`;
  let numPat = /\d/;
  let letterPat = /[A-Za-z]/;

  // Function to validate email format
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Form validation checks
  if (
    firstName === "" ||
    lastName === "" ||
    username === "" ||
    password === "" ||
    email === "" ||
    confirmPassword === "" ||
    profilePic === ""
  ) {
    swal.fire("Please fill all the required fields");
    return;
  }

  if (firstName.length < 3 || firstName.length > 15) {
    swal.fire("Name should be between 3 and 15 characters long.");
    return;
  }
  if (firstName.search(numPat) !== -1) {
    swal.fire("First name should not contain any numbers");
    return;
  }
  if (lastName.length < 3 || lastName.length > 15) {
    swal.fire("Last name should be between 3 and 15 characters long.");
    return;
  }
  if (lastName.search(numPat) !== -1) {
    swal.fire("Last name should not contain any numbers");
    return;
  }
  if (username.length < 3 || username.length > 15) {
    swal.fire("Username should be between 3 and 15 characters long.");
    return;
  }
  if (username.search(letterPat) === -1 || username.search(numPat) === -1) {
    swal.fire("Username must contain at least one letter and one number.");
    return;
  }
  if (!isValidEmail(email)) {
    swal.fire("Please enter a valid email address");
    return;
  }
  if (
    password.length < 6 ||
    password.length > 8 ||
    confirmPassword.length < 6 ||
    confirmPassword.length > 8
  ) {
    swal.fire("Password must be between 6 and 8 characters long.");
    return;
  }
  if (confirmPassword !== password) {
    swal.fire("Passwords doesn't match");
    return;
  }

  // Check if user already exists based on email
  let userExists = saveUserDataArr.some((user) => user.email === email);
  if (userExists) {
    swal.fire("User already exists");
    return;
  }

  // Create new user object
  let newUser = {
    fullName: fullName,
    username: username,
    email: email,
    password: password,
    profilePic: profilePic,
  };

  // Add new user to array and save to local storage
  saveUserDataArr.push(newUser);
  saveToLocalStorage();

  // Inform user about successful registration
  swal.fire("Registration successful!");
  setTimeout(() => {
    loginPage.style.display = "flex";
    signupPage.style.display = "none";
  }, 1000);
  // ######### reset form fields ##################### \\
  document.querySelector("#userfirstName").value = "";
  document.querySelector("#userLastName").value = "";
  document.querySelector("#username").value = "";
  document.querySelector("#userEmail").value = "";
  document.querySelector("#userPassword").value = "";
  document.querySelector("#userConfirmPassword").value = "";
  document.querySelector("#userPic").value = "";
}

/* #################################
        login page working 
################################# */

/* ###################################
    converting login page to signup 
################################### */

let signPage = document.querySelector("#signPage");

signPage.addEventListener("click", (e) => {
  e.preventDefault();
  loginToSignup();
});
function loginToSignup() {
  signupPage.style.display = "flex";
  loginPage.style.display = "none";
}

// ########### moving on quiz app ##################### \\

let login = document.querySelector("#login");

login.addEventListener("click", (e) => {
  e.preventDefault();
  userLogin();
});

// ################## checking user data ################## \\

function userLogin() {
  let emailUserName = document.querySelector("#emailUserName").value.trim();
  let userPassword = document.querySelector("#password").value.trim();

  let userFound = saveUserDataArr.some(
    (data) =>
      (data.email === emailUserName || data.username === emailUserName) &&
      data.password === userPassword
  );

  if (userFound) {
    swal.fire("Login Successfull");
    setTimeout(() => {
      document.location.href = "quiz.html";
    }, 1700);
  } else {
    Swal.fire("Invalid email or password!");
  }
}