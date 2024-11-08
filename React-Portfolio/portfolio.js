
// side progress bar
let calcScrollValue = (_) => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(var(--text-simi-ten-color) ${scrollValue}%, transparent ${scrollValue}%)`;
};
window.addEventListener("scroll", calcScrollValue);
window.onload = (_) => {
  theamSettings.classList.add("activesetting");
  opacityBodyColer();
  calcScrollValue();
};

// Active menu
let menuli = document.querySelectorAll("header nav a");
let sections = document.querySelectorAll("section");
let activeMenu = () => {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  menuli.forEach((section) => section.classList.remove("active"));
  menuli[len].classList.add("active");
};
//  parallax
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScales = document.querySelectorAll(".scrollScale");
scrollScales.forEach((scrollScale) => observer.observe(scrollScale));

const fromlift = document.querySelectorAll(".fromlift");
fromlift.forEach((el) => observer.observe(el));

const fromright = document.querySelectorAll(".fromright");
fromright.forEach((el) => observer.observe(el));
