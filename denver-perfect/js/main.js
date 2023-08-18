const numberContent = document.querySelector(".numbers-content");
const sectionNumber = document.querySelector(".section-numbers");
const sectionColor = document.querySelector(".section-color");

const sectionSecurity = document.querySelector(".section-security");
const blueBg = document.querySelector(".bg-blue-lightest");
const sectionSecurityImg = document.querySelector(".section-security-img");

let numberContentHeight = numberContent.clientHeight;

if (window.innerWidth > 768) {
  sectionNumber.style.height = numberContentHeight * 0.9 + "px";
  sectionColor.style.height = numberContentHeight * 0.5 + "px";
} else {
  sectionNumber.style.height = numberContentHeight * 0.8 + "px";
  sectionColor.style.height = numberContentHeight * 0.4 + "px";
}

let blueBgHeight = blueBg.clientHeight;
sectionSecurity.style.height = blueBgHeight + "px";
sectionSecurityImg.style.height = blueBgHeight + "px";

console.log(blueBgHeight);

//init wow js
//
