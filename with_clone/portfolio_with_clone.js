const tec_skills = document.getElementById("tec-skills");
const pro_skills = document.querySelector(".professional");
const portGallery = document.querySelector(".portfolio-gallery");
const form = document.getElementById("form");
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");
const logo = document.getElementById("logo");
const navAs = document.querySelectorAll("nav a");
const modeI = document.querySelector(".mode i");
const container = document.querySelector(".container");
const dayContainer = document.getElementById("dayContainer");

// night mode and Day

const darkContainerClone = container.cloneNode(true);
darkContainerClone.id = "darkContainer";
document.body.appendChild(darkContainerClone);
darkContainerClone.classList.remove("active");
const modeIcons = document.querySelectorAll(".mode");
const Icons = document.querySelectorAll(".mode i");
const darkContainer = document.querySelector("#darkContainer");
const darkmodeicon = document.querySelector("#darkContainer header .mode i");


let changeModeicon = (_) => {
  darkmodeicon.classList.add("bx-sun");
  darkmodeicon.classList.remove("bxs-moon");
};
changeModeicon();

console.log(darkmodeicon)
modeIcons.forEach((mode) => {
  mode.onclick = (_) => {
    dayContainer.classList.toggle("active");
    darkContainer.classList.toggle("active");
  };
});

// technical skills Icons
let myTecSkills_i = [
  "bxl-html5",
  "bxl-css3",
  "bxl-javascript",
  "bxl-c-plus-plus",
  "bxl-sass",
  "bxl-typescript",
  "bxl-git",
  "bxl-github",
  "bx-data",
];
let myTecSkills_n = [
  "HTML 5",
  "CSS 3",
  "javascript",
  "c++",
  "scss",
  "typescript",
  "git",
  "gitHub",
  "fundamentals<br>database",
];
let TecSkills_list = (_) => {
  for (i = 0; i < myTecSkills_i.length; i++) {
    tec_skills.innerHTML += `
                    <div class="skill-box">
                      <i class="bx ${myTecSkills_i[i]} after"></i>
                      <p>${myTecSkills_n[i]}</p>
                      </div>`;
  }
};
TecSkills_list();

// circle skills
let myProSkills_s = [
  "Team Work",
  "communication",
  "Creativity",
  "Problem Solving",
];
let mypercent = ["90", "85", "75", "80"];
let ProSkills_list = (_) => {
  for (i = 0; i < mypercent.length; i++) {
    pro_skills.innerHTML += `
      <div class="box">
        <div class="circle" data-dots="80" data-percent=${mypercent[i]}></div>
        <div class="text">
            <span class="big">${mypercent[i]}%</span>
            <small>${myProSkills_s[i]}</small>
        </div>
      </div>`;
  }
};
ProSkills_list();

let circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  let dots = circle.getAttribute("data-dots");
  let marked = circle.getAttribute("data-percent");
  let percent = Math.floor((dots * marked) / 100);
  let points = "";
  let rotate = 360 / dots;

  for (i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  circle.innerHTML = points;

  let pointsMarked = circle.querySelectorAll(".points");
  for (i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// My Portfolio
let imgName = [
  "CRUDS",
  "Gold_World",
  "moving_boat",
  "Editor",
  "Market",
  "Space",
  "Iphone",
  "Adidas",
  "Avatar",
  "Earth-s_orbit",
];
let describingP = [
  "Merchandise store",
  "Calculate the value of your gold",
  "A site for booking boat trips",
  "A site for uploading and editing images",
  "A site to collect all information about our Market",
  "A website to display scientific articles about the planets of the solar system",
  "Iphone website interface with variable background",
  "A website interface for displaying Adidas products",
  "Avatar website interface",
  "Animation showing the rotation of planet Earth and its moon around the sun",
];
let category = [
  "CRUDS Interactive",
  "CRUDS Interactive",
  "Animated Interactive",
  "Animated",
  "Website-interface",
  "Website-interface Interactive",
  "Website-interface Interactive",
  "Website-interface",
  "Website-interface",
  "Animated",
];
let myPortfolioList = (_) => {
  for (i = 0; i < imgName.length; i++) {
    portGallery.innerHTML += `
    <div class="port-box mix ${category[i]} scrollScale">
      <div class="port-image">
        <img src="./portfolio/${imgName[i]}.jpg" alt="" />
      </div>
      <div class="port-content">
        <h3>${imgName[i]}</h3>
        <p>
          ${describingP[i]}
        </p>
        <div class="portoLinks">
          <a href="https://github.com/Kareem-Nasrallah/${imgName[i]}" target="_blank"><i class='bx bxl-github' ></i></a>
          <a href="https://kareem-nasrallah.github.io/${imgName[i]}" target="_blank"><i class='bx bx-link-external' ></i></a>
        </div>
      </div>
    </div>`;
  }
};
myPortfolioList();
var mixer = mixitup(".portfolio-gallery");

// mack the contact run
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_h2w87d8",
      "template_4ewkgnr",
      "#contactForm",
      "aUxqRxxoMyf0YHj9b"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);

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
  scrollProgress.style.background = `conic-gradient(var(--text-color) ${scrollValue}%, transparent ${scrollValue}%)`;
};
window.addEventListener("scroll", calcScrollValue);
window.onload = calcScrollValue;

// Active menu
let menuli = document.querySelectorAll("header nav a");
let sections = document.querySelectorAll("section");
let activeMenu = () => {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  menuli.forEach((section) => section.classList.remove("active"));
  menuli[len].classList.add("active");
};
activeMenu();
window.addEventListener("scroll", activeMenu);

// open & close the navbar
menuIcon.onclick = (_) => {
  logo.classList.toggle("openClosLogo");
  nav.classList.toggle("openClos");
  menuIcon.classList.toggle("bx-x");
};
window.onscroll = (_) => {
  logo.classList.remove("openClosLogo");
  nav.classList.remove("openClos");
  menuIcon.classList.remove("bx-x");
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
