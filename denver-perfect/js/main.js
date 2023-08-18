const numberContent = document.querySelector(".numbers-content");
const sectionNumber = document.querySelector(".section-numbers");
const sectionColor = document.querySelector(".section-color");

let numberContentHeight = numberContent.clientHeight;
sectionNumber.style.height = numberContentHeight * 0.8 + "px";
sectionColor.style.height = numberContentHeight * 0.4 + "px";

console.log(window.innerWidth);

//init wow js
//
