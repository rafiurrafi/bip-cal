// const numberContent = document.querySelector(".numbers-content");
// const sectionNumber = document.querySelector(".section-numbers");
// const sectionColor = document.querySelector(".section-color");

// const sectionSecurity = document.querySelector(".section-security");
// const blueBg = document.querySelector(".bg-blue-lightest");
// const sectionSecurityImg = document.querySelector(".section-security-img");

const heroContent = document.querySelector(".hero-text");
const heroImg = document.querySelector(".section-hero-bg");
const sectionContact = document.querySelector(".section-contact");
const tabletSize = 991;
function resizeListener() {
  const windowWidth = window.innerWidth;
  const heighOfContent =
    heroContent.getBoundingClientRect().bottom -
    heroImg.getBoundingClientRect().bottom;
  console.log(heighOfContent);
  // if (windowWidth < tabletSize) {
  //   console.log(windowWidth, tabletSize);
  //   sectionContact.style.marginTop =
  //     heighOfContent > 0 ? heighOfContent + "px" : 0 + "px";
  // } else {
  //   sectionContact.style.marginTop = 0 + "px";
  // }
  sectionContact.style.marginTop =
    heighOfContent > 0 ? heighOfContent + "px" : 0 + "px";
}
resizeListener();
window.addEventListener("resize", resizeListener);

//change size of section number grid
// let numberContentHeight = numberContent.clientHeight;

// if (window.innerWidth > 768) {
//   sectionNumber.style.height = numberContentHeight + "px";
//   sectionColor.style.height = numberContentHeight * 0.5 + "px";
// } else {
//   sectionNumber.style.height = numberContentHeight * 0.9 + "px";
//   sectionColor.style.height = numberContentHeight * 0.4 + "px";
// }

//change height of security section
// let blueBgHeight = blueBg.clientHeight;
// let blugBgWidth = blueBg.clientWidth;
// sectionSecurity.style.height = blueBgHeight * 1.2 + "px";
// sectionSecurityImg.style.height = blueBgHeight * 1.2 + "px";
// sectionSecurityImg.style.width = blugBgWidth + "px";

//section hero
// let heroTextHeight = heroContent.clientHeight;
// heroContentContainer.style.height = heroTextHeight + "px";
// sectionHero.style.height = heroTextHeight + "px";
