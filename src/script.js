const questions = [
  // HTML Questions
  {
    question: "What does the `<meta charset='UTF-8'>` tag do in HTML?",
    options: [
      "Sets the viewport for mobile devices",
      "Specifies the character encoding for the document",
      "Defines a metadata description",
      "Links an external CSS file",
    ],
    correctAnswer: "Specifies the character encoding for the document",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["link", "a", "href", "nav"],
    correctAnswer: "a",
  },
  {
    question:
      "Which input type is used for selecting multiple options in a form?",
    options: ["checkbox", "radio", "select", "text"],
    correctAnswer: "checkbox",
  },

  // CSS Questions
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "background-color"],
    correctAnswer: "color",
  },
  {
    question: "What is the default position value of an HTML element?",
    options: ["static", "relative", "absolute", "fixed"],
    correctAnswer: "static",
  },
  {
    question:
      "Which CSS unit is relative to the font size of the parent element?",
    options: ["px", "em", "rem", "vh"],
    correctAnswer: "em",
  },

  // JavaScript Questions
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    options: ["Number", "String", "Float", "Boolean"],
    correctAnswer: "Float",
  },
  {
    question: "What will `console.log(0 == '0');` output?",
    options: ["true", "false", "TypeError", "Undefined"],
    correctAnswer: "true",
  },
  {
    question:
      "Which JavaScript method is used to remove the last element from an array?",
    options: ["shift()", "pop()", "remove()", "slice()"],
    correctAnswer: "pop()",
  },
  {
    question: "What will `typeof null` return in JavaScript?",
    options: ["'null'", "'undefined'", "'object'", "'number'"],
    correctAnswer: "'object'",
  },
];

const questions_html = document.getElementById("questions");
const optionsdiv = document.querySelector("#optionDiv");
const button = document.querySelector("#Button");
const quizContainer = document.getElementById("quiz-container");
const timer = document.getElementById("timer");
const parseQuestions = (i) => {
  questions_html.innerText = `${i + 1} : ${questions[i].question}`;
  optionsdiv.innerHTML = "";
  for (let index = 0; index < questions[i].options.length; index++) {
    const option = document.createElement("div");
    option.innerHTML = `<input type="radio" name="group1" class="option" />
              <label class=" mx-1 text-lg text-slate-800 " >
              ${[questions[i].options[index]]}</label> `;
    optionsdiv.append(option);
  }
};
let QuestionNo = 0;
let score = 0;
button.addEventListener("click", function () {
  if (QuestionNo === 8) {
    button.innerText = "Submit";
    button.addEventListener("mouseover", function () {
      button.style.backgroundColor = "#4A5D76"; // Change on hover
    });

    button.addEventListener("mouseout", function () {
      button.style.backgroundColor = "#1D293D"; // Reset on mouse out
    });
  }

  if (document.querySelector('input[name="group1"]:checked')) {
    if (
      document.querySelector('input[name="group1"]:checked').nextElementSibling
        .innerText === questions[QuestionNo].correctAnswer
    ) {
      score++;
      console.log(questions.length);
      console.log(QuestionNo);
      if (QuestionNo === questions.length - 1) {
        quizContainer.innerHTML = `  <div class="text-slate-800  p-4 text-xl font-bold border-slate-800 border-b-2 mx-2 flex items-center justify-center flex-col  text-center  ">
          <h2 >Congratulations! You have completed all questions.<br>
            Your Score is <span class="text-yellow-500"> ${score}</span></h2>
        </div>`;
      } else {
        QuestionNo++;
        if (QuestionNo < questions.length) {
          parseQuestions(QuestionNo);
        }
      }
    } else {
      if (QuestionNo < questions.length) {
        QuestionNo++;
        parseQuestions(QuestionNo);
      }
    }
  } else {
    alert("Please select an option");
  }

  //   console.log(`Question no ${QuestionNo}`);
});
// console.log(`Question no ${QuestionNo}`);
parseQuestions(QuestionNo);
let sec = 60;
setInterval(() => {
  timer.innerHTML = `00:${sec--}`;
  if (sec === 0) {
    quizContainer.innerHTML = `  <div class="text-slate-800  p-4 text-xl font-bold border-slate-800 border-b-2 mx-2 flex items-center justify-center flex-col  text-center  ">
          <h2 >Congratulations! You have completed all questions.<br>
            Your Score is <span class="text-yellow-500"> ${score}</span></h2>
        </div> `;
  }
}, 1000);
