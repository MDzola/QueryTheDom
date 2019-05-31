const sectionEl = document.querySelector(".article__header").textContent = 
"Welcome to Drew Palazola's blog";


const newClass = document.querySelectorAll(".article__header");
console.log("newClass", newClass);
newClass[0].classList.add("important");
newClass[1].classList.add("important");

const thirdStep = document.querySelector(".dashed");
thirdStep.classList.remove("dashed");

const fourthStep = document.querySelector(".article__footer");
fourthStep.classList.add("goldenrod");