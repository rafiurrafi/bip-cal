const heroContent = document.querySelector(".hero-text");
const sectionHero = document.querySelector(".section-hero");
const sectionContact = document.querySelector(".section-contact");

function resizeListener() {
  const heighOfContent =
    heroContent.getBoundingClientRect().bottom -
    sectionHero.getBoundingClientRect().bottom;
  sectionContact.style.marginTop =
    heighOfContent > 0 ? heighOfContent + 24 + "px" : 24 + "px";
}
resizeListener();
window.addEventListener("resize", resizeListener);

// Y axis scroll speed
var velocity = 0.5;

function update() {
  var pos = $(window).scrollTop();
  $(".section-hero").each(function () {
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height() - 18;
    $(this).css(
      "backgroundPosition",
      "50% " + Math.round((height - pos) * velocity) + "px"
    );
  });
}

$(window).bind("scroll", update);
