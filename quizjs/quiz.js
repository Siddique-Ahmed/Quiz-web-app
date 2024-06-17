let logout = () => {
  const profilePic = document.querySelector(".navbar .profile-pic");
  const logoutMenu = document.querySelector(".navbar .logout");
  const logoutBtn = document.querySelector("#logoutBtn");

  profilePic.addEventListener("click", function () {
    if (logoutMenu.style.display === "block") {
      logoutMenu.style.display = "none";
    } else {
      logoutMenu.style.display = "block";
    }
  });
};

logout();

// ############### Start Quiz ##################### \\

let startQuiz = document.querySelector("#startQuiz");
let startSection = document.querySelector(".startQuiz");
let selectSection = document.querySelector(".selectSection");
let htmlSection = document.querySelector(".htmlSection");
let cssSection = document.querySelector(".cssSection");
let javascriptSection = document.querySelector(".javascriptSection");
let phpSection = document.querySelector(".phpSection");
let pyhtonSection = document.querySelector(".pyhtonSection");
let loader = document.querySelector("#loader");

startQuiz.addEventListener("click", (e) => {
  e.preventDefault();
  selectOpen();
});

function selectOpen() {
  loader.style.display = "block";
  setTimeout(() => {
    selectSection.style.display = "flex";
    loader.style.display = "none";
  }, 1500);
  startSection.style.display = "none";
}

// ################# selection of quiz ########################### \\

let htmlBtn = document.querySelector("#HTML");
let cssBtn = document.querySelector("#CSS");
let javascriptBtn = document.querySelector("#JAVASCRIPT");
let phpBtn = document.querySelector("#PHP");
let pythonBtn = document.querySelector("#PYTHON");

// ########### html quiz ################## \\
htmlBtn.addEventListener("click", (e) => {
  e.preventDefault();
  htmlPage();
});

function htmlPage() {
  loader.style.display = "block";
  setTimeout(() => {
    htmlSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  selectSection.style.display = "none";
}

// ############## css quiz ################ \\
cssBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cssPage();
});
function cssPage() {
  loader.style.display = "block";
  setTimeout(() => {
    cssSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  selectSection.style.display = "none";
}
// ############ javascript quiz ############# \\
javascriptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  javscriptPage();
});
function javscriptPage() {
  loader.style.display = "block";
  setTimeout(() => {
    javascriptSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  selectSection.style.display = "none";
}
// ############# php quiz #################### \\
phpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  phpPage();
});
function phpPage() {
  loader.style.display = "block";
  setTimeout(() => {
    phpSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  selectSection.style.display = "none";
}
// ############### python quiz ###################### \\
pythonBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pythonPage();
});
function pythonPage() {
  loader.style.display = "block";
  setTimeout(() => {
    pyhtonSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  selectSection.style.display = "none";
}
