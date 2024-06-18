let logout = () => {
  const profilePic = document.querySelector(".navbar .profile-pic");
  const logoutMenu = document.querySelector(".navbar .logout");

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
let jsSection = document.querySelector(".javascriptSection");
let phpSection = document.querySelector(".phpSection");
let pyhtonSection = document.querySelector(".pythonSection");
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

// ###################################### HTML QUIZ ####################################### \\
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

// ############# HTML QUESTION ANSWER ############## \\

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
    answer3: "<br>",
    answer4: "<hr>",
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
// ############## for result ####################
let result = document.querySelector(".result");
let greeting = document.querySelector("#greet");
let totalMarks = document.querySelector("#totalMarks span");
let obtainedMarks = document.querySelector("#obtainedMarks span");
let quizBox = document.querySelector(".quizBox");
let backSelect = document.querySelector("#backSelect");

function loadQuestion() {
  question.textContent = htmlQuiz[currentQuestion].question;
  answerA.textContent = htmlQuiz[currentQuestion].answer1;
  answerB.textContent = htmlQuiz[currentQuestion].answer2;
  answerC.textContent = htmlQuiz[currentQuestion].answer3;
  answerD.textContent = htmlQuiz[currentQuestion].answer4;
}

backSelect.addEventListener("click",(e)=>{
  e.preventDefault();
  loader.style.display = "flex";
  setTimeout(() => {
    selectSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  htmlSection.style.display = "none";
})

function showResult() {
  loader.style.display = "flex";
  setTimeout (()=>{
    result.style.display = "flex";
    loader.style.display = "none";
  },1000);
  htmlNext.style.display = "none";
  quizBox.style.display = "none";
  totalMarks.textContent = `${htmlQuiz.length}`;
  obtainedMarks.textContent = `${score}`;
  if (score >= 15) {
    loader.style.display = "flex";
    setTimeout (()=>{
      result.style.display = "flex";
      loader.style.display = "none";
    },1000);
    quizBox.style.display = "none";
    htmlNext.style.display = "none";
    greeting.textContent = "Congratulation you are passed!";
    greeting.style.color = "#0f8b62";
  } else {
    greeting.textContent = "Sorry you are fail!";
    greeting.style.color = "orangered";
  }
}

loadQuestion();

htmlNext.addEventListener("click", () => {
  let selectAns = document.querySelector("input[type='radio']:checked");

  if (selectAns === null) {
    swal.fire("Please select an answer");
    return;
  }

  let label = selectAns.nextElementSibling.textContent;

  if (label === htmlQuiz[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < htmlQuiz.length) {
    loadQuestion();
    document.querySelector("input[type='radio']:checked").checked = false;
  } else {
    showResult();
  }
});


// ############################### CSS QUIZ ##################################3######### \\

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

// ############# HTML QUESTION ANSWER ############## \\

const cssQuiz = [
  {
    question: "What does CSS stand for?",
    answer1: "Colorful Style Sheets",
    answer2: "Creative Style Sheets",
    answer3: "Cascading Style Sheets",
    answer4: "Computer Style Sheets",
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answer1: "<style>",
    answer2: "<script>",
    answer3: "<css>",
    answer4: "<link>",
    correctAnswer: "<style>"
  },
  {
    question: "Which property is used to change the background color?",
    answer1: "bgcolor",
    answer2: "background-color",
    answer3: "color",
    answer4: "background",
    correctAnswer: "background-color"
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    answer1: "text-color",
    answer2: "fgcolor",
    answer3: "color",
    answer4: "font-color",
    correctAnswer: "color"
  },
  {
    question: "Which property is used to change the font of an element?",
    answer1: "font-weight",
    answer2: "font-style",
    answer3: "font-family",
    answer4: "font-variant",
    correctAnswer: "font-family"
  },
  {
    question: "How do you make each word in a text start with a capital letter?",
    answer1: "text-transform:capitalize",
    answer2: "text-style:capitalize",
    answer3: "transform:capitalize",
    answer4: "You can't do that with CSS",
    correctAnswer: "text-transform:capitalize"
  },
  {
    question: "Which property is used to change the space between characters?",
    answer1: "spacing",
    answer2: "letter-spacing",
    answer3: "character-spacing",
    answer4: "text-spacing",
    correctAnswer: "letter-spacing"
  },
  {
    question: "How do you make a list that lists its items with squares?",
    answer1: "list-type: square",
    answer2: "list-style-type: square",
    answer3: "list: square",
    answer4: "list-style: square",
    correctAnswer: "list-style-type: square"
  },
  {
    question: "Which property is used to change the left margin of an element?",
    answer1: "padding-left",
    answer2: "margin-left",
    answer3: "indent",
    answer4: "margin",
    correctAnswer: "margin-left"
  },
  {
    question: "Which property is used to change the bottom border of an element?",
    answer1: "border-width",
    answer2: "border-style",
    answer3: "border-bottom",
    answer4: "border-color",
    correctAnswer: "border-bottom"
  },
  {
    question: "How do you select an element with id 'demo'?",
    answer1: "#demo",
    answer2: ".demo",
    answer3: "demo",
    answer4: "*demo",
    correctAnswer: "#demo"
  },
  {
    question: "How do you select elements with class name 'test'?",
    answer1: "#test",
    answer2: ".test",
    answer3: "test",
    answer4: "*test",
    correctAnswer: ".test"
  },
  {
    question: "How do you make the text bold?",
    answer1: "font:bold",
    answer2: "font-weight:bold",
    answer3: "text:bold",
    answer4: "style:bold",
    correctAnswer: "font-weight:bold"
  },
  {
    question: "How do you display hyperlinks without an underline?",
    answer1: "a {text-decoration:none;}",
    answer2: "a {underline:none;}",
    answer3: "a {decoration:no-underline;}",
    answer4: "a {text-decoration:no-underline;}",
    correctAnswer: "a {text-decoration:none;}"
  },
  {
    question: "Which property is used to change the font size of an element?",
    answer1: "text-size",
    answer2: "font-size",
    answer3: "text-style",
    answer4: "font-style",
    correctAnswer: "font-size"
  },
  {
    question: "How do you display a border like this: The top border = 10 pixels, bottom border = 5 pixels, left border = 20 pixels and right border = 1pixel?",
    answer1: "border-width:10px 5px 20px 1px",
    answer2: "border-width:10px 1px 5px 20px",
    answer3: "border-width:10px 20px 5px 1px",
    answer4: "border-width:10px 5px 1px 20px",
    correctAnswer: "border-width:10px 5px 1px 20px"
  },
  {
    question: "How do you change the left margin of an element?",
    answer1: "margin-left",
    answer2: "padding-left",
    answer3: "indent",
    answer4: "text-indent",
    correctAnswer: "margin-left"
  },
  {
    question: "How do you make a list that lists its items with squares?",
    answer1: "list-style-type: square",
    answer2: "list-type: square",
    answer3: "list-style: square",
    answer4: "list: square",
    correctAnswer: "list-style-type: square"
  },
  {
    question: "How do you select all p elements inside a div element?",
    answer1: "div.p",
    answer2: "div p",
    answer3: "div + p",
    answer4: "div > p",
    correctAnswer: "div p"
  },
  {
    question: "How do you group selectors?",
    answer1: "Separate each selector with a comma",
    answer2: "Separate each selector with a plus sign",
    answer3: "Separate each selector with a space",
    answer4: "Separate each selector with a dot",
    correctAnswer: "Separate each selector with a comma"
  },
  {
    question: "What is the default value of the position property?",
    answer1: "static",
    answer2: "relative",
    answer3: "absolute",
    answer4: "fixed",
    correctAnswer: "static"
  }
];

let cssCurrentQuestion = 0;
let cssScore = 0;

let cssQuestion = document.querySelector("#cssQuestion");
let cssAnswerA = document.querySelector("#cssTextOptionA");
let cssAnswerB = document.querySelector("#cssTextOptionB");
let cssAnswerC = document.querySelector("#cssTextOptionC");
let cssAnswerD = document.querySelector("#cssTextOptionD");
let cssNext = document.querySelector(".buttonBox #cssNext");
// ############## for result of css ####################
let cssResult = document.querySelector(".cssResult");
let cssGreeting = document.querySelector("#cssGreet");
let cssTotalMarks = document.querySelector("#cssTotalMarks span");
let cssObtainedMarks = document.querySelector("#cssObtainedMarks span");
let cssQuizBox = document.querySelector(".cssQuizBox");
let cssBackSelect = document.querySelector("#backSelect");

function cssLoadQuestion() {
  cssQuestion.textContent = cssQuiz[cssCurrentQuestion].question;
  cssAnswerA.textContent = cssQuiz[cssCurrentQuestion].answer1;
  cssAnswerB.textContent = cssQuiz[cssCurrentQuestion].answer2;
  cssAnswerC.textContent = cssQuiz[cssCurrentQuestion].answer3;
  cssAnswerD.textContent = cssQuiz[cssCurrentQuestion].answer4;
}

cssBackSelect.addEventListener("click",(e)=>{
  e.preventDefault();
  loader.style.display = "flex";
  setTimeout(() => {
    selectSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  cssSection.style.display = "none";
})

function cssShowResult() {
  loader.style.display = "flex";
  setTimeout (()=>{
    cssResult.style.display = "flex";
    loader.style.display = "none";
  },1000);
  cssNext.style.display = "none";
  cssQuizBox.style.display = "none";
  cssTotalMarks.textContent = `${cssQuiz.length}`;
  cssObtainedMarks.textContent = `${cssScore}`;
  if (cssScore >= 15) {
    loader.style.display = "flex";
    setTimeout (()=>{
      cssResult.style.display = "flex";
      loader.style.display = "none";
    },1000);
    cssQuizBox.style.display = "none";
    cssNext.style.display = "none";
    cssGreeting.textContent = "Congratulation you are passed!";
    cssGreeting.style.color = "#0f8b62";
  } else {
  cssGreeting.textContent = "Sorry you are fail!";
    cssGreeting.style.color = "orangered";
  }
}

cssLoadQuestion();

cssNext.addEventListener("click", () => {
  let cssSelectAns = document.querySelector(".cssQuizBox input[type='radio']:checked");

  if (cssSelectAns === null) {
    swal.fire("Please select an answer");
    return;
  }

  let cssLabel = cssSelectAns.nextElementSibling.textContent;

  if (cssLabel === cssQuiz[cssCurrentQuestion].correctAnswer) {
    cssScore++;
  }

  cssCurrentQuestion++;

  if (cssCurrentQuestion < cssQuiz.length) {
    cssLoadQuestion();
    document.querySelector(".cssQuizBox input[type='radio']:checked").checked = false;
  } else {
    cssShowResult();
  }
});

// ############ javascript quiz ############# \\
javascriptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  javscriptPage();
});
function javscriptPage() {
  loader.style.display = "block";
  setTimeout(() => {
    jsSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  selectSection.style.display = "none";
}

// ################################# Question Answer ####################################### \\

const jsQuiz = [
  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    answer1: "response.write('Hello World')",
    answer2: "document.write('Hello World')",
    answer3: "('Hello World')",
    answer4: "print('Hello World')",
    correctAnswer: "document.write('Hello World')"
  },
  {
    question: "How do you create a function in JavaScript?",
    answer1: "function = myFunction()",
    answer2: "function myFunction()",
    answer3: "function:myFunction()",
    answer4: "function => myFunction()",
    correctAnswer: "function myFunction()"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answer1: "call myFunction()",
    answer2: "call function myFunction()",
    answer3: "myFunction()",
    answer4: "Call.myFunction()",
    correctAnswer: "myFunction()"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answer1: "if i = 5 then",
    answer2: "if i == 5 then",
    answer3: "if (i == 5)",
    answer4: "if i = 5",
    correctAnswer: "if (i == 5)"
  },
  {
    question: "How does a WHILE loop start?",
    answer1: "while (i <= 10)",
    answer2: "while i = 1 to 10",
    answer3: "while (i <= 10; i++)",
    answer4: "while (i < 10 i++)",
    correctAnswer: "while (i <= 10)"
  },
  {
    question: "How can you add a comment in JavaScript?",
    answer1: "'This is a comment",
    answer2: "//This is a comment",
    answer3: "<!--This is a comment-->",
    answer4: "*This is a comment*",
    correctAnswer: "//This is a comment"
  },
  {
    question: "How do you declare a JavaScript variable?",
    answer1: "var carName",
    answer2: "variable carName",
    answer3: "v carName",
    answer4: "carName : var",
    correctAnswer: "var carName"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answer1: "*",
    answer2: "X",
    answer3: "-",
    answer4: "=",
    correctAnswer: "="
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    answer1: "true",
    answer2: "false",
    answer3: "NaN",
    answer4: "undefined",
    correctAnswer: "true"
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answer1: "<script name='xxx.js'>",
    answer2: "<script href='xxx.js'>",
    answer3: "<script src='xxx.js'>",
    answer4: "<script file='xxx.js'>",
    correctAnswer: "<script src='xxx.js'>"
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answer1: "Math.round(7.25)",
    answer2: "round(7.25)",
    answer3: "Math.rnd(7.25)",
    answer4: "rnd(7.25)",
    correctAnswer: "Math.round(7.25)"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answer1: "onchange",
    answer2: "onclick",
    answer3: "onmouseclick",
    answer4: "onmouseover",
    correctAnswer: "onclick"
  },
  {
    question: "How do you declare a JavaScript array?",
    answer1: "var colors = 'red', 'green', 'blue'",
    answer2: "var colors = (1:'red', 2:'green', 3:'blue')",
    answer3: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    answer4: "var colors = ['red', 'green', 'blue']",
    correctAnswer: "var colors = ['red', 'green', 'blue']"
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answer1: "Math.max(x, y)",
    answer2: "Math.ceil(x, y)",
    answer3: "Math.maxNum(x, y)",
    answer4: "Math.ceilNum(x, y)",
    correctAnswer: "Math.max(x, y)"
  },
  {
    question: "How can you detect the client's browser name?",
    answer1: "navigator.appName",
    answer2: "client.navName",
    answer3: "browser.name",
    answer4: "navigator.name",
    correctAnswer: "navigator.appName"
  },
  {
    question: "Which operator is used to compare two values?",
    answer1: "=",
    answer2: "==",
    answer3: "===",
    answer4: "equals",
    correctAnswer: "=="
  },
  {
    question: "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
    answer1: "if (i === 5)",
    answer2: "if i = 5 then",
    answer3: "if i == 5 then",
    answer4: "if i === 5",
    correctAnswer: "if (i === 5)"
  },
  {
    question: "How do you write a JavaScript object?",
    answer1: "var person = {firstName: 'John', lastName: 'Doe'}",
    answer2: "var person = 'firstName: John, lastName: Doe'",
    answer3: "var person = (firstName: 'John', lastName: 'Doe')",
    answer4: "var person = 'firstName': 'John', 'lastName': 'Doe'",
    correctAnswer: "var person = {firstName: 'John', lastName: 'Doe'}"
  },
  {
    question: "Which JavaScript label catches all the values, except for the ones specified?",
    answer1: "catch",
    answer2: "label",
    answer3: "default",
    answer4: "try",
    correctAnswer: "default"
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer1: "It refers to the current function",
    answer2: "It refers to the previous function",
    answer3: "It refers to the next function",
    answer4: "It refers to the current object",
    correctAnswer: "It refers to the current object"
  }
];

let jsCurrentQuestion = 0;
let jsScore = 0;

let jsQuestion = document.querySelector("#jsquestion");
let jsAnswerA = document.querySelector("#jsTextOptionA");
let jsAnswerB = document.querySelector("#jsTextOptionB");
let jsAnswerC = document.querySelector("#jsTextOptionC");
let jsAnswerD = document.querySelector("#jsTextOptionD");
let jsNext = document.querySelector(".buttonBox #jsNext");
// ############## for result of javascript ####################
let jsResult = document.querySelector(".jsResult");
let jsGreeting = document.querySelector("#jsGreet");
let jsTotalMarks = document.querySelector("#jsTotalMarks span");
let jsObtainedMarks = document.querySelector("#jsObtainedMarks span");
let jsQuizBox = document.querySelector(".jsQuizBox");
let jsBackSelect = document.querySelector("#jsBack");


function jsLoadQuestion() {
  jsQuestion.textContent = jsQuiz[jsCurrentQuestion].question;
  jsAnswerA.textContent = jsQuiz[jsCurrentQuestion].answer1;
  jsAnswerB.textContent = jsQuiz[jsCurrentQuestion].answer2;
  jsAnswerC.textContent = jsQuiz[jsCurrentQuestion].answer3;
  jsAnswerD.textContent = jsQuiz[jsCurrentQuestion].answer4;
}

jsBackSelect.addEventListener("click",(e)=>{
  e.preventDefault();
  loader.style.display = "flex";
  setTimeout(() => {
    selectSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  jsSection.style.display = "none";
})

function jsShowResult() {
  loader.style.display = "flex";
  setTimeout (()=>{
    jsResult.style.display = "flex";
    loader.style.display = "none";
  },1000);
  jsNext.style.display = "none";
  jsQuizBox.style.display = "none";
  jsTotalMarks.textContent = `${jsQuiz.length}`;
  jsObtainedMarks.textContent = `${jsScore}`;
  if (jsScore >= 15) {
    loader.style.display = "flex";
    setTimeout (()=>{
      jsResult.style.display = "flex";
      loader.style.display = "none";
    },1000);
    jsQuizBox.style.display = "none";
    jsNext.style.display = "none";
    jsGreeting.textContent = "Congratulation you are passed!";
    jsGreeting.style.color = "#0f8b62";
  } else {
  jsGreeting.textContent = "Sorry you are fail!";
    jsGreeting.style.color = "orangered";
  }
}

jsLoadQuestion();

jsNext.addEventListener("click", () => {
  let jsSelectAns = document.querySelector(".jsQuizBox input[type='radio']:checked");

  if (jsSelectAns === null) {
    swal.fire("Please select an answer");
    return;
  }

  let jsLabel = jsSelectAns.nextElementSibling.textContent;

  if (jsLabel === jsQuiz[jsCurrentQuestion].correctAnswer) {
    jsScore++;
  }

  jsCurrentQuestion++;

  if (jsCurrentQuestion < jsQuiz.length) {
    jsLoadQuestion();
    document.querySelector(".jsQuizBox input[type='radio']:checked").checked = false;
  } else {
    jsShowResult();
  }
});

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

// ################# question answer ########################## \\

const phpQuiz = [
  {
    question: "What does PHP stand for?",
    answer1: "Personal Home Page",
    answer2: "Hypertext Preprocessor",
    answer3: "Private Hypertext Processor",
    answer4: "Personal Hypertext Page",
    correctAnswer: "Hypertext Preprocessor"
  },
  {
    question: "Which of the following is a correct way to start a PHP block?",
    answer1: "<?php",
    answer2: "<?php start",
    answer3: "<script>",
    answer4: "<start-php>",
    correctAnswer: "<?php"
  },
  {
    question: "How do you output 'Hello World' in PHP?",
    answer1: "print('Hello World');",
    answer2: "echo 'Hello World';",
    answer3: "console.log('Hello World');",
    answer4: "write('Hello World');",
    correctAnswer: "echo 'Hello World';"
  },
  {
    question: "How do you insert a comment in PHP?",
    answer1: "# This is a comment",
    answer2: "// This is a comment",
    answer3: "/* This is a comment */",
    answer4: "<!-- This is a comment -->",
    correctAnswer: "// This is a comment"
  },
  {
    question: "How do you concatenate two strings in PHP?",
    answer1: "$str1 + $str2",
    answer2: "$str1 . $str2",
    answer3: "$str1 & $str2",
    answer4: "$str1 * $str2",
    correctAnswer: "$str1 . $str2"
  },
  {
    question: "Which of the following variables is a valid PHP variable name?",
    answer1: "$my-var",
    answer2: "$_myVar",
    answer3: "$myVar2",
    answer4: "$2myVar",
    correctAnswer: "$_myVar"
  },
  {
    question: "How do you start a session in PHP?",
    answer1: "start_session()",
    answer2: "session_open()",
    answer3: "session_start()",
    answer4: "open_session()",
    correctAnswer: "session_start()"
  },
  {
    question: "Which PHP function is used to redirect the user to another page?",
    answer1: "header('Location: newpage.php');",
    answer2: "redirect('newpage.php');",
    answer3: "location('newpage.php');",
    answer4: "go_to('newpage.php');",
    correctAnswer: "header('Location: newpage.php');"
  },
  {
    question: "How do you get information from a form in PHP?",
    answer1: "POST['inputField']",
    answer2: "GET['inputField']",
    answer3: "$_POST['inputField']",
    answer4: "$_GET['inputField']",
    correctAnswer: "$_POST['inputField']"
  },
  {
    question: "Which operator is used to check if two values are equal and of same data type?",
    answer1: "==",
    answer2: "===",
    answer3: "=<",
    answer4: "!==",
    correctAnswer: "==="
  },
  {
    question: "How do you create a function in PHP?",
    answer1: "new function myFunction()",
    answer2: "create function myFunction()",
    answer3: "def myFunction()",
    answer4: "function myFunction()",
    correctAnswer: "function myFunction()"
  },
  {
    question: "What is the correct way to include an external PHP file named 'functions.php'?",
    answer1: "include('functions.php')",
    answer2: "include functions.php",
    answer3: "include 'functions.php'",
    answer4: "add functions.php",
    correctAnswer: "include 'functions.php'"
  },
  {
    question: "Which of the following is a correct PHP array declaration?",
    answer1: "$myArray = [1, 2, 3];",
    answer2: "$myArray = array(1, 2, 3);",
    answer3: "$myArray = {1, 2, 3};",
    answer4: "$myArray = array{1, 2, 3};",
    correctAnswer: "$myArray = array(1, 2, 3);"
  },
  {
    question: "Which PHP function is used to remove white spaces from both sides of a string?",
    answer1: "trim()",
    answer2: "strip()",
    answer3: "removeWhiteSpace()",
    answer4: "trimString()",
    correctAnswer: "trim()"
  },
  {
    question: "How do you declare a constant in PHP?",
    answer1: "constant MY_CONSTANT",
    answer2: "define('MY_CONSTANT', value)",
    answer3: "const MY_CONSTANT = value",
    answer4: "let MY_CONSTANT = value",
    correctAnswer: "define('MY_CONSTANT', value)"
  },
  {
    question: "How do you check the length of a string in PHP?",
    answer1: "len($str)",
    answer2: "strlen($str)",
    answer3: "length($str)",
    answer4: "str_length($str)",
    correctAnswer: "strlen($str)"
  },
  {
    question: "Which PHP loop will execute a block of code a specified number of times?",
    answer1: "while loop",
    answer2: "for loop",
    answer3: "foreach loop",
    answer4: "do-while loop",
    correctAnswer: "for loop"
  },
  {
    question: "How do you find the highest value in an array in PHP?",
    answer1: "array_max($myArray)",
    answer2: "max_array($myArray)",
    answer3: "array_max_value($myArray)",
    answer4: "max($myArray)",
    correctAnswer: "max($myArray)"
  },
  {
    question: "Which PHP function is used to connect to a MySQL database?",
    answer1: "connect()",
    answer2: "mysql_connect()",
    answer3: "db_connect()",
    answer4: "mysqli_connect()",
    correctAnswer: "mysqli_connect()"
  },
  {
    question: "What is the correct way to end a PHP statement?",
    answer1: "With a semicolon (;)",
    answer2: "With a colon (:)",
    answer3: "With a period (.)",
    answer4: "With a comma (,)",
    correctAnswer: "With a semicolon (;)"
  }
];

let phpCurrentQuestion = 0;
let phpScore = 0;

let phpQuestion = document.querySelector("#phpquestion");
let phpAnswerA = document.querySelector("#phpTextOptionA");
let phpAnswerB = document.querySelector("#phpTextOptionB");
let phpAnswerC = document.querySelector("#phpTextOptionC");
let phpAnswerD = document.querySelector("#phpTextOptionD");
let phpNext = document.querySelector(".buttonBox #phpNext");
// ############## for result of javascript ####################
let phpResult = document.querySelector(".phpResult");
let phpGreeting = document.querySelector("#phpGreet");
let phpTotalMarks = document.querySelector("#phpTotalMarks span");
let phpObtainedMarks = document.querySelector("#phpObtainedMarks span");
let phpQuizBox = document.querySelector(".phpQuizBox");
let phpBackSelect = document.querySelector("#phpBack");

function phpLoadQuestion() {
  phpQuestion.textContent = phpQuiz[phpCurrentQuestion].question;
  phpAnswerA.textContent = phpQuiz[phpCurrentQuestion].answer1;
  phpAnswerB.textContent = phpQuiz[phpCurrentQuestion].answer2;
  phpAnswerC.textContent = phpQuiz[phpCurrentQuestion].answer3;
  phpAnswerD.textContent = phpQuiz[phpCurrentQuestion].answer4;
}

phpBackSelect.addEventListener("click",(e)=>{
  e.preventDefault();
  loader.style.display = "flex";
  setTimeout(() => {
    selectSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  phpSection.style.display = "none";
})

function phpShowResult() {
  loader.style.display = "flex";
  setTimeout (()=>{
    phpResult.style.display = "flex";
    loader.style.display = "none";
  },1000);
  phpNext.style.display = "none";
  phpQuizBox.style.display = "none";
  phpTotalMarks.textContent = `${phpQuiz.length}`;
  phpObtainedMarks.textContent = `${phpScore}`;
  if (phpScore >= 15) {
    loader.style.display = "flex";
    setTimeout (()=>{
      phpResult.style.display = "flex";
      loader.style.display = "none";
    },1000);
    phpQuizBox.style.display = "none";
    phpNext.style.display = "none";
    phpGreeting.textContent = "Congratulation you are passed!";
    phpGreeting.style.color = "#0f8b62";
  } else {
  phpGreeting.textContent = "Sorry you are fail!";
    phpGreeting.style.color = "orangered";
  }
}

phpLoadQuestion();

phpNext.addEventListener("click", () => {
  let phpSelectAns = document.querySelector(".phpQuizBox input[type='radio']:checked");

  if (phpSelectAns === null) {
    swal.fire("Please select an answer");
    return;
  }

  let phpLabel = phpSelectAns.nextElementSibling.textContent;

  if (phpLabel === phpQuiz[phpCurrentQuestion].correctAnswer) {
    phpScore++;
  }

  phpCurrentQuestion++;

  if (phpCurrentQuestion < phpQuiz.length) {
    phpLoadQuestion();
    document.querySelector(".phpQuizBox input[type='radio']:checked").checked = false;
  } else {
    phpShowResult();
  }
});


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
// ##################  Question Answer ###################### \\

const pyQuiz = [
  {
    question: "What is the correct file extension for Python files?",
    answer1: ".pyt",
    answer2: ".pt",
    answer3: ".py",
    answer4: ".python",
    correctAnswer: ".py"
  },
  {
    question: "Which statement is used to define a function in Python?",
    answer1: "def",
    answer2: "define",
    answer3: "function",
    answer4: "func",
    correctAnswer: "def"
  },
  {
    question: "How do you print 'Hello World' in Python?",
    answer1: "echo('Hello World')",
    answer2: "console.log('Hello World')",
    answer3: "print('Hello World')",
    answer4: "System.out.println('Hello World')",
    correctAnswer: "print('Hello World')"
  },
  {
    question: "Which indentation is used in Python?",
    answer1: "Tabs",
    answer2: "2 spaces",
    answer3: "4 spaces",
    answer4: "8 spaces",
    correctAnswer: "4 spaces"
  },
  {
    question: "Which of the following is used to comment in Python?",
    answer1: "// This is a comment",
    answer2: "# This is a comment",
    answer3: "/* This is a comment */",
    answer4: "' This is a comment",
    correctAnswer: "# This is a comment"
  },
  {
    question: "How do you create a variable in Python?",
    answer1: "var x = 5",
    answer2: "x = 5",
    answer3: "new x = 5",
    answer4: "$x = 5",
    correctAnswer: "x = 5"
  },
  {
    question: "Which operator is used for exponentiation in Python?",
    answer1: "^",
    answer2: "**",
    answer3: "//",
    answer4: "^^",
    correctAnswer: "**"
  },
  {
    question: "Which function is used to take user input in Python?",
    answer1: "scanf()",
    answer2: "input()",
    answer3: "readline()",
    answer4: "gets()",
    correctAnswer: "input()"
  },
  {
    question: "What will 'print(2 * 3)' output?",
    answer1: "6",
    answer2: "5",
    answer3: "2*3",
    answer4: "23",
    correctAnswer: "6"
  },
  {
    question: "Which data type is used to store a sequence of characters in Python?",
    answer1: "string",
    answer2: "char",
    answer3: "chr",
    answer4: "str",
    correctAnswer: "str"
  },
  {
    question: "How do you start a Python for loop?",
    answer1: "for i in range(5):",
    answer2: "for (i = 0; i < 5; i++)",
    answer3: "for i = 1 to 5",
    answer4: "loop (i = 1; i < 5)",
    correctAnswer: "for i in range(5):"
  },
  {
    question: "How do you create a list in Python?",
    answer1: "list = ()",
    answer2: "list = []",
    answer3: "list = {}",
    answer4: "list = [1, 2, 3]",
    correctAnswer: "list = []"
  },
  {
    question: "How do you check the length of a list in Python?",
    answer1: "len(list)",
    answer2: "list.length()",
    answer3: "list.length",
    answer4: "list.size()",
    correctAnswer: "len(list)"
  },
  {
    question: "What does 'range(3)' generate in Python?",
    answer1: "[0, 1, 2]",
    answer2: "[1, 2, 3]",
    answer3: "[0, 1, 2, 3]",
    answer4: "[3, 2, 1]",
    correctAnswer: "[0, 1, 2]"
  },
  {
    question: "How do you slice elements from a list named 'myList' from index 1 to 3?",
    answer1: "myList[1:3]",
    answer2: "myList.slice(1, 3)",
    answer3: "myList[1, 3]",
    answer4: "myList.slice(1:3)",
    correctAnswer: "myList[1:3]"
  },
  {
    question: "Which statement is used to exit from a loop in Python?",
    answer1: "break",
    answer2: "exit",
    answer3: "return",
    answer4: "stop",
    correctAnswer: "break"
  },
  {
    question: "What is the result of '2 + 3 * 4' in Python?",
    answer1: "14",
    answer2: "20",
    answer3: "18",
    answer4: "24",
    correctAnswer: "14"
  },
  {
    question: "Which function is used to find the maximum value in a list in Python?",
    answer1: "max()",
    answer2: "maximum()",
    answer3: "max_value()",
    answer4: "find_max()",
    correctAnswer: "max()"
  },
  {
    question: "What will 'print('Python'[2])' output?",
    answer1: "Py",
    answer2: "t",
    answer3: "h",
    answer4: "t",
    correctAnswer: "t"
  },
  {
    question: "Which statement is used to define a class in Python?",
    answer1: "class MyClass:",
    answer2: "define class MyClass",
    answer3: "Class MyClass",
    answer4: "new MyClass:",
    correctAnswer: "class MyClass:"
  },
  {
    question: "How do you import a module named 'myModule' in Python?",
    answer1: "import myModule",
    answer2: "include myModule",
    answer3: "require myModule",
    answer4: "use myModule",
    correctAnswer: "import myModule"
  }
];

let pyCurrentQuestion = 0;
let pyScore = 0;

let pyQuestion = document.querySelector("#pyquestion");
let pyAnswerA = document.querySelector("#pyTextOptionA");
let pyAnswerB = document.querySelector("#pyTextOptionB");
let pyAnswerC = document.querySelector("#pyTextOptionC");
let pyAnswerD = document.querySelector("#pyTextOptionD");
let pyNext = document.querySelector(".buttonBox #pyNext");
// ############## for result of javascript ####################
let pyResult = document.querySelector(".pyResult");
let pyGreeting = document.querySelector("#pyGreet");
let pyTotalMarks = document.querySelector("#pyTotalMarks span");
let pyObtainedMarks = document.querySelector("#pyObtainedMarks span");
let pyQuizBox = document.querySelector(".pyQuizBox");
let pyBackSelect = document.querySelector("#pyBack");


function pyLoadQuestion() {
  pyQuestion.textContent = pyQuiz[pyCurrentQuestion].question;
  pyAnswerA.textContent = pyQuiz[pyCurrentQuestion].answer1;
  pyAnswerB.textContent = pyQuiz[pyCurrentQuestion].answer2;
  pyAnswerC.textContent = pyQuiz[pyCurrentQuestion].answer3;
  pyAnswerD.textContent = pyQuiz[pyCurrentQuestion].answer4;
}

pyBackSelect.addEventListener("click",(e)=>{
  e.preventDefault();
  loader.style.display = "flex";
  setTimeout(() => {
    selectSection.style.display = "flex";
    loader.style.display = "none";
  }, 1000);
  pySection.style.display = "none";
})

function pyShowResult() {
  loader.style.display = "flex";
  setTimeout (()=>{
    pyResult.style.display = "flex";
    loader.style.display = "none";
  },1000);
  pyNext.style.display = "none";
  pyQuizBox.style.display = "none";
  pyTotalMarks.textContent = `${pyQuiz.length}`;
  pyObtainedMarks.textContent = `${pyScore}`;
  if (pyScore >= 15) {
    loader.style.display = "flex";
    setTimeout (()=>{
      pyResult.style.display = "flex";
      loader.style.display = "none";
    },1000);
    pyQuizBox.style.display = "none";
    pyNext.style.display = "none";
    pyGreeting.textContent = "Congratulation you are passed!";
    pyGreeting.style.color = "#0f8b62";
  } else {
  pyGreeting.textContent = "Sorry you are fail!";
    pyGreeting.style.color = "orangered";
  }
}

pyLoadQuestion();

pyNext.addEventListener("click", () => {
  let pySelectAns = document.querySelector(".pyQuizBox input[type='radio']:checked");

  if (pySelectAns === null) {
    swal.fire("Please select an answer");
    return;
  }

  let pyLabel = pySelectAns.nextElementSibling.textContent;

  if (pyLabel === pyQuiz[pyCurrentQuestion].correctAnswer) {
    pyScore++;
  }

  pyCurrentQuestion++;

  if (pyCurrentQuestion < pyQuiz.length) {
    pyLoadQuestion();
    document.querySelector(".pyQuizBox input[type='radio']:checked").checked = false;
  } else {
    pyShowResult();
  }
});