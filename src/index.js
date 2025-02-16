const labels = {
  0: "html",
  1: "css",
  2: "javascript",
  3: "nodejs",
  4: "nextjs",
  5: "mongodb",
};
let questionCat;
let key;
const redirectbtn = document.querySelectorAll("#redirectBtns");
redirectbtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    questionCat = labels[index];
    localStorage.setItem("cat", questionCat);

    window.location.replace("http://127.0.0.1:5500/src/quiz.html");
  });
});
