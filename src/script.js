const questions = {
  html: [
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
      question: "Which input type is used for selecting multiple options?",
      options: ["checkbox", "radio", "select", "text"],
      correctAnswer: "checkbox",
    },
    {
      question: "What is the correct doctype declaration for HTML5?",
      options: ["!DOCTYPE html", "DOCTYPE HTML5", "DOCTYPE html5", "!DOCTYPE"],
      correctAnswer: "!DOCTYPE html",
    },
    {
      question: "Which tag is used to define an unordered list?",
      options: ["ol", "ul", "li", "list"],
      correctAnswer: "ul",
    },
    {
      question: "What is the purpose of the `<title>` tag in HTML?",
      options: [
        "Defines the main heading of the page",
        "Sets the title of the webpage in the browser tab",
        "Displays a tooltip on hover",
        "Defines a section title",
      ],
      correctAnswer: "Sets the title of the webpage in the browser tab",
    },
    {
      question: "Which attribute is used to specify an image in `<img>`?",
      options: ["href", "src", "alt", "link"],
      correctAnswer: "src",
    },
    {
      question: "Which HTML element is used to display a table?",
      options: ["table", "tr", "td", "tab"],
      correctAnswer: "table",
    },
    {
      question: "What is the default display property of a `<div>`?",
      options: ["inline", "block", "inline-block", "flex"],
      correctAnswer: "block",
    },
    {
      question: "Which HTML tag is used for creating a form?",
      options: ["form", "input", "button", "fieldset"],
      correctAnswer: "form",
    },
  ],

  css: [
    {
      question: "Which CSS property is used to change text color?",
      options: ["font-color", "text-color", "color", "background-color"],
      correctAnswer: "color",
    },
    {
      question: "What is the default position value of an HTML element?",
      options: ["static", "relative", "absolute", "fixed"],
      correctAnswer: "static",
    },
    {
      question: "Which CSS unit is relative to the font size of the parent?",
      options: ["px", "em", "rem", "vh"],
      correctAnswer: "em",
    },
    {
      question: "What does the `z-index` property control?",
      options: [
        "Font size",
        "Element visibility",
        "Stacking order of elements",
        "Opacity",
      ],
      correctAnswer: "Stacking order of elements",
    },
    {
      question: "Which property makes text bold?",
      options: ["font-weight", "text-style", "font-bold", "bold"],
      correctAnswer: "font-weight",
    },
    {
      question: "Which CSS selector is used to target an ID?",
      options: [".", "#", ":", "*"],
      correctAnswer: "#",
    },
    {
      question: "Which property controls element visibility?",
      options: ["display", "visibility", "opacity", "all of the above"],
      correctAnswer: "all of the above",
    },
    {
      question: "Which property sets the space inside an element’s border?",
      options: ["margin", "padding", "border", "spacing"],
      correctAnswer: "padding",
    },
    {
      question: "Which CSS function is used to apply a gradient background?",
      options: ["linear-gradient()", "gradient()", "background()", "color()"],
      correctAnswer: "linear-gradient()",
    },
    {
      question:
        "How do you make an element take up the full width of its parent?",
      options: [
        "width: 100%",
        "width: auto",
        "width: full",
        "width: fit-content",
      ],
      correctAnswer: "width: 100%",
    },
  ],

  javascript: [
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
      question: "Which method removes the last element from an array?",
      options: ["shift()", "pop()", "remove()", "slice()"],
      correctAnswer: "pop()",
    },
    {
      question: "What will `typeof null` return?",
      options: ["'null'", "'undefined'", "'object'", "'number'"],
      correctAnswer: "'object'",
    },
    {
      question: "How do you declare a variable in ES6?",
      options: ["var", "let", "const", "Both let and const"],
      correctAnswer: "Both let and const",
    },
    {
      question: "Which keyword is used to define an asynchronous function?",
      options: ["async", "await", "promise", "setTimeout"],
      correctAnswer: "async",
    },
    {
      question: "What does the `map()` function do in JavaScript?",
      options: [
        "Modifies the original array",
        "Creates a new array with modified values",
        "Filters array elements",
        "Sorts the array",
      ],
      correctAnswer: "Creates a new array with modified values",
    },
    {
      question: "Which operator is used to check strict equality?",
      options: ["==", "===", "!=", "!=="],
      correctAnswer: "===",
    },
    {
      question: "Which function is used to parse a JSON string?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.toObject()",
        "JSON.decode()",
      ],
      correctAnswer: "JSON.parse()",
    },
    {
      question: "Which method is used to add a new element to an array?",
      options: ["push()", "add()", "insert()", "append()"],
      correctAnswer: "push()",
    },
  ],

  nodejs: [
    {
      question: "What is Node.js primarily used for?",
      options: [
        "Front-end development",
        "Back-end development",
        "Database management",
        "Operating system development",
      ],
      correctAnswer: "Back-end development",
    },
    {
      question: "Which module is used to create a web server in Node.js?",
      options: ["http", "fs", "express", "url"],
      correctAnswer: "http",
    },
    {
      question: "What is the default package manager for Node.js?",
      options: ["Yarn", "Bower", "npm", "pip"],
      correctAnswer: "npm",
    },
    {
      question: "Which command initializes a new Node.js project?",
      options: ["node init", "npm start", "npm init", "node create"],
      correctAnswer: "npm init",
    },
    {
      question:
        "Which global object in Node.js is used to handle file system operations?",
      options: ["http", "fs", "file", "path"],
      correctAnswer: "fs",
    },
    {
      question: "Which statement is true about Node.js?",
      options: [
        "It runs in the browser",
        "It is single-threaded",
        "It does not support asynchronous operations",
        "It only supports JavaScript",
      ],
      correctAnswer: "It is single-threaded",
    },
    {
      question:
        "Which method is used to read a file asynchronously in Node.js?",
      options: ["fs.readFile()", "fs.read()", "fs.open()", "fs.writeFile()"],
      correctAnswer: "fs.readFile()",
    },
    {
      question: "What does the `require()` function do in Node.js?",
      options: [
        "Loads an external module",
        "Exports a module",
        "Creates a server",
        "Handles HTTP requests",
      ],
      correctAnswer: "Loads an external module",
    },
    {
      question: "What is Express.js in Node.js?",
      options: [
        "A database management tool",
        "A front-end framework",
        "A web application framework",
        "A module for handling files",
      ],
      correctAnswer: "A web application framework",
    },
    {
      question: "Which event is emitted when a Node.js process exits?",
      options: ["exit", "end", "close", "terminate"],
      correctAnswer: "exit",
    },
  ],

  nextjs: [
    {
      question: "What is Next.js primarily used for?",
      options: [
        "Building mobile apps",
        "Server-side rendering and static site generation",
        "Managing databases",
        "Creating APIs",
      ],
      correctAnswer: "Server-side rendering and static site generation",
    },
    {
      question: "Which command is used to create a new Next.js project?",
      options: [
        "next create",
        "npx create-next-app",
        "npm init next",
        "next start",
      ],
      correctAnswer: "npx create-next-app",
    },
    {
      question: "What is the default file for defining API routes in Next.js?",
      options: ["pages/api", "routes/api", "server/api", "backend/api"],
      correctAnswer: "pages/api",
    },
    {
      question: "Which method is used to prefetch pages in Next.js?",
      options: [
        "next.prefetch()",
        "usePrefetch()",
        "Link prefetch",
        "getStaticProps()",
      ],
      correctAnswer: "Link prefetch",
    },
    {
      question:
        "Which function is used for Static Site Generation (SSG) in Next.js?",
      options: [
        "getServerSideProps",
        "getStaticProps",
        "getInitialProps",
        "fetch",
      ],
      correctAnswer: "getStaticProps",
    },
    {
      question:
        "Which component is used for client-side navigation in Next.js?",
      options: ["<a>", "<Router>", "<NextLink>", "<Link>"],
      correctAnswer: "<Link>",
    },
    {
      question: "What is the primary advantage of Next.js?",
      options: [
        "It supports multiple programming languages",
        "It optimizes React applications with SSR and SSG",
        "It replaces JavaScript with Python",
        "It is only for mobile development",
      ],
      correctAnswer: "It optimizes React applications with SSR and SSG",
    },
    {
      question: "Which command is used to start a Next.js development server?",
      options: ["next run", "npm start", "next dev", "npm serve"],
      correctAnswer: "next dev",
    },
    {
      question: "How do you create a dynamic route in Next.js?",
      options: ["[id].js", "(:id).js", "{id}.js", "<id>.js"],
      correctAnswer: "[id].js",
    },
    {
      question: "Which file is used for global CSS styles in Next.js?",
      options: ["global.css", "index.css", "_app.js", "styles.css"],
      correctAnswer: "global.css",
    },
  ],

  mongodb: [
    {
      question: "What type of database is MongoDB?",
      options: ["Relational", "NoSQL", "Graph", "Key-Value"],
      correctAnswer: "NoSQL",
    },
    {
      question: "Which command is used to insert a document in MongoDB?",
      options: [
        "db.insert()",
        "db.collection.insertOne()",
        "insert()",
        "add()",
      ],
      correctAnswer: "db.collection.insertOne()",
    },
    {
      question: "Which data format does MongoDB use?",
      options: ["XML", "JSON", "YAML", "CSV"],
      correctAnswer: "JSON",
    },
    {
      question: "What is the default port for MongoDB?",
      options: ["27017", "8080", "3306", "5432"],
      correctAnswer: "27017",
    },
    {
      question: "Which method is used to update a document in MongoDB?",
      options: ["update()", "updateOne()", "modify()", "edit()"],
      correctAnswer: "updateOne()",
    },
    {
      question: "What is a collection in MongoDB?",
      options: ["A table", "A document", "A database", "A field"],
      correctAnswer: "A table",
    },
    {
      question: "Which operator is used to query a range of values?",
      options: ["$gt", "$range", "$between", "$lte"],
      correctAnswer: "$gt",
    },
    {
      question: "Which function retrieves all documents in a collection?",
      options: ["findAll()", "getAll()", "db.collection.find()", "fetch()"],
      correctAnswer: "db.collection.find()",
    },
    {
      question: "How do you delete a document in MongoDB?",
      options: ["deleteOne()", "remove()", "drop()", "erase()"],
      correctAnswer: "deleteOne()",
    },
    {
      question: "Which MongoDB feature allows scaling across multiple servers?",
      options: ["Sharding", "Partitioning", "Indexing", "Replication"],
      correctAnswer: "Sharding",
    },
  ],
};

key = localStorage.getItem("cat");
// console.log(questions[key][0].question);
// console.log("hello");
const questions_html = document.getElementById("questions");
const optionsdiv = document.querySelector("#optionDiv");
const button = document.querySelector("#Button");
const quizContainer = document.getElementById("quiz-container");
const timer = document.getElementById("timer");

const parseQuestions = (i) => {
  questions_html.innerText = `${i + 1} : ${questions[key][i].question}`;
  optionsdiv.innerHTML = "";
  for (let index = 0; index < questions[key][i].options.length; index++) {
    const option = document.createElement("div");
    option.innerHTML = `<input type="radio" name="group1" class="option" />
            <label class=" mx-1 text-lg text-slate-800 " >
            ${questions[key][i].options[index]}</label> `;
    optionsdiv.append(option);
  }
};
parseQuestions(0);
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
    console.log(QuestionNo);
    if (
      document.querySelector('input[name="group1"]:checked').nextElementSibling
        .innerText === questions[key][QuestionNo].correctAnswer
    ) {
      score++;
      console.log(QuestionNo);
      console.log(questions[key].length);
      if (QuestionNo === questions[key].length) {
        quizContainer.innerHTML = `  <div class="text-slate-800  p-4 text-xl font-bold border-slate-800 border-b-2 mx-2 flex items-center justify-center flex-col  text-center  ">
        <h2 >Congratulations! You have completed all questions.<br>
          Your Score is <span class="text-yellow-500"> ${score}</span></h2>
      <button
          class="bg-yellow-500 text-white px-4 py-2 rounded-md border-2 border-slate-800 outline-0 hover:bg-slate-800 cursor-pointer hover:duration-500 hover:ease-in hover:text-white hover:border-2 hover:border-slate-800"
          id="reset"
        >Restart</button>
      </div> `;
        document.getElementById("reset").addEventListener("click", () => {
          window.location.reload();
          QuestionNo = 0;
          parseQuestions(QuestionNo);
        });
      } else {
        QuestionNo++;
        if (QuestionNo < questions[key].length) {
          parseQuestions(QuestionNo);
        }
      }
    } else {
      if (QuestionNo < questions[key].length) {
        QuestionNo++;
        parseQuestions(QuestionNo);
      }
    }
  } else {
    alert("Please select an option");
  }
});

parseQuestions(QuestionNo);
let sec = 60;
setInterval(() => {
  timer.innerHTML = `00:${sec--}`;
  if (sec === 0) {
    quizContainer.innerHTML = `  <div class="text-slate-800  p-4 text-xl font-bold border-slate-800 border-b-2 mx-2 flex items-center justify-center flex-col  text-center  ">
        <h2 >Congratulations! You have completed all questions.<br>
          Your Score is <span class="text-yellow-500"> ${score}</span></h2>
            <button
          class="bg-yellow-500 text-white px-4 py-2 rounded-md border-2 border-slate-800 outline-0 hover:bg-slate-800 cursor-pointer hover:duration-500 hover:ease-in hover:text-white hover:border-2 hover:border-slate-800"
          id="reset"
        >Restart</button>
      </div> `;
    document.getElementById("reset").addEventListener("click", () => {
      window.location.reload();
      QuestionNo = 0;
      parseQuestions(QuestionNo);
    });
  }
}, 1000);
