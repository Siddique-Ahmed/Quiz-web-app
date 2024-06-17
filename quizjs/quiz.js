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

// ############## quiz ################################# \\

const htmlQuiz = [
  {
    question: "What does HTML stand for?",
    answer1: "Hyper Text Markup Language",
    answer2: "Home Tool Markup Language",
    answer3: "Hyperlinks and Text Markup Language",
    answer4: "Hyper Text Managing Links",
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Who is making the Web standards?",
    answer1: "Mozilla",
    answer2: "Microsoft",
    answer3: "The World Wide Web Consortium",
    answer4: "Google",
    correctAnswer: "The World Wide Web Consortium"
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    answer1: "<heading>",
    answer2: "<h6>",
    answer3: "<h1>",
    answer4: "<head>",
    correctAnswer: "<h1>"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answer1: "<lb>",
    answer2: "<br>",
    answer3: "<break>",
    answer4: "<ln>",
    correctAnswer: "<br>"
  },
  {
    question: "What is the correct HTML for adding a background color?",
    answer1: "<background>yellow</background>",
    answer2: "<body bg='yellow'>",
    answer3: "<body style='background-color:yellow;'>",
    answer4: "<body color='yellow'>",
    correctAnswer: "<body style='background-color:yellow;'>"
  },
  {
    question: "Choose the correct HTML element to define important text",
    answer1: "<important>",
    answer2: "<strong>",
    answer3: "<b>",
    answer4: "<i>",
    correctAnswer: "<strong>"
  },
  {
    question: "Choose the correct HTML element to define emphasized text",
    answer1: "<italic>",
    answer2: "<em>",
    answer3: "<i>",
    answer4: "<strong>",
    correctAnswer: "<em>"
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    answer1: "<a href='http://example.com'>Example</a>",
    answer2: "<a name='http://example.com'>Example</a>",
    answer3: "<a url='http://example.com'>Example</a>",
    answer4: "<a>http://example.com</a>",
    correctAnswer: "<a href='http://example.com'>Example</a>"
  },
  {
    question: "Which character is used to indicate an end tag?",
    answer1: "^",
    answer2: "*",
    answer3: "<",
    answer4: "/",
    correctAnswer: "/"
  },
  {
    question: "How can you open a link in a new tab/browser window?",
    answer1: "<a href='url' new>",
    answer2: "<a href='url' target='_blank'>",
    answer3: "<a href='url' target='new'>",
    answer4: "<a href='url' target='open'>",
    correctAnswer: "<a href='url' target='_blank'>"
  },
  {
    question: "Which of these elements are all <table> elements?",
    answer1: "<table><head><tfoot>",
    answer2: "<table><tr><td>",
    answer3: "<table><tr><tt>",
    answer4: "<thead><body><tr>",
    correctAnswer: "<table><tr><td>"
  },
  {
    question: "Inline elements are normally displayed without starting a new line.",
    answer1: "True",
    answer2: "False",
    correctAnswer: "True"
  },
  {
    question: "How can you make a numbered list?",
    answer1: "<ul>",
    answer2: "<ol>",
    answer3: "<dl>",
    answer4: "<list>",
    correctAnswer: "<ol>"
  },
  {
    question: "How can you make a bulleted list?",
    answer1: "<list>",
    answer2: "<ul>",
    answer3: "<ol>",
    answer4: "<dl>",
    correctAnswer: "<ul>"
  },
  {
    question: "What is the correct HTML for making a checkbox?",
    answer1: "<input type='checkbox'>",
    answer2: "<check>",
    answer3: "<checkbox>",
    answer4: "<input type='check'>",
    correctAnswer: "<input type='checkbox'>"
  },
  {
    question: "What is the correct HTML for making a text input field?",
    answer1: "<input type='text'>",
    answer2: "<textinput type='text'>",
    answer3: "<textfield>",
    answer4: "<input text='textfield'>",
    correctAnswer: "<input type='text'>"
  },
  {
    question: "What is the correct HTML for making a drop-down list?",
    answer1: "<input type='dropdown'>",
    answer2: "<list>",
    answer3: "<input type='list'>",
    answer4: "<select>",
    correctAnswer: "<select>"
  },
  {
    question: "What is the correct HTML for making a text area?",
    answer1: "<input type='textarea'>",
    answer2: "<input type='textbox'>",
    answer3: "<textarea>",
    answer4: "<textbox>",
    correctAnswer: "<textarea>"
  },
  {
    question: "What is the correct HTML for inserting an image?",
    answer1: "<img src='image.jpg'>",
    answer2: "<image src='image.jpg'>",
    answer3: "<img alt='image.jpg'>",
    answer4: "<img href='image.jpg'>",
    correctAnswer: "<img src='image.jpg'>"
  },
  {
    question: "What does the <a> tag stand for?",
    answer1: "Anchor",
    answer2: "Link",
    answer3: "Hyperlink",
    answer4: "Reference",
    correctAnswer: "Anchor"
  }
];

let currentQuestion = 0;
let score = 0;

let question = document.querySelector("#htmlquestion");
let answerA = document.querySelector("#textOptionA");
let answerB = document.querySelector("#textOptionB");
let answerC = document.querySelector("#textOptionC");
let answerD = document.querySelector("#textOptionD");
let htmlNext = document.querySelector(".buttonBox #Next");

function loadQuestion (){
  question.textContent = htmlQuiz[currentQuestion].question;
  answerA.textContent = htmlQuiz[currentQuestion].answer1;
  answerB.textContent = htmlQuiz[currentQuestion].answer2;
  answerC.textContent = htmlQuiz[currentQuestion].answer3;
  answerD.textContent = htmlQuiz[currentQuestion].answer4;
}
loadQuestion();

htmlNext.addEventListener("click",()=>{



  let selectAns = document.querySelector("input[type='radio']:checked")

  if(selectAns === null){
    swal.fire("please Select answer")
  }

let label = selectAns.nextElementSibling.textContent;
console.log(label);

if(label === htmlQuiz[currentQuestion].correctAnswer){
  score++;
}
currentQuestion++
if(currentQuestion < htmlQuiz.length){
  loadQuestion();
  selectAns.checked = false;
}

})
















































































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
