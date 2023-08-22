const heroContent = document.querySelector(".hero-text");
const heroImg = document.querySelector(".section-hero-bg");
const sectionContact = document.querySelector(".section-contact");
// const tabletSize = 991;
function resizeListener() {
  const heighOfContent =
    heroContent.getBoundingClientRect().bottom -
    heroImg.getBoundingClientRect().bottom;
  console.log(heighOfContent);
  sectionContact.style.marginTop =
    heighOfContent > 0 ? heighOfContent + "px" : 0 + "px";
}
resizeListener();
window.addEventListener("resize", resizeListener);
