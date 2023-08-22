const heroContent = document.querySelector(".hero-text");
const heroImg = document.querySelector(".section-hero-bg");
const sectionContact = document.querySelector(".section-contact");

function resizeListener() {
  const heighOfContent =
    heroContent.getBoundingClientRect().bottom -
    heroImg.getBoundingClientRect().bottom;
  sectionContact.style.marginTop =
    heighOfContent > 0 ? heighOfContent + 24 + "px" : 24 + "px";
}
resizeListener();
window.addEventListener("resize", resizeListener);
