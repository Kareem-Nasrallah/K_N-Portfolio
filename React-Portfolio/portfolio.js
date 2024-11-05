const body = document.body;

// creat the colors of the colors-div
const colorsDev = document.getElementById("colorsDev");
let colorsId = ["blue", "green", "orange", "purple"];
let myLiteColor = ["#02e1ff", "#3fc002", "#ffa500", "#a786f5"];
let myMediumColor = ["#0275ff", "#0bac20", "#ff7500", "#5a02c9"];
let myHeavyColor = ["#023dff", "#0e570b", "#ff3500", "#2e055f"];
let fullColorDev = _ => {
  for (i = 0; i < colorsId.length; i++) {
    colorsDev.innerHTML += `
      <div class="colorBox" id="${colorsId[i]}" style="--color: linear-gradient(  180deg,  ${myLiteColor[i]} 0%,  ${myMediumColor[i]} 51%,  ${myHeavyColor[i]} 100%);">
      <i class='bx bx-check'></i>
      <div>
    `;
  }
}

let blueColorBox = document.getElementById("blue");
blueColorBox.classList.add("activeColor");
fullColorDev();


const colorBoxs = document.querySelectorAll(".colorBox");

// make the background of the colors-div displaiedpage
const theamSettings = document.querySelector(".theamSettings");
const opacityBody = body.querySelectorAll("section, #progress");
const displaiedpage = document.getElementById("displaiedpage");
let opacityBodyColer = (_) => {
  if (theamSettings.classList.contains("activesetting")) {
    opacityBody.forEach((all) => {
      displaiedpage.style.display = "block";
      all.style.opacity = ".5";
    });
  } else {
    opacityBody.forEach((all) => {
      displaiedpage.style.display = "none";
      all.style.opacity = "1";
    });
  }
};

// make the colors-div hide & appear
const togglebtn = document.querySelector(".togglebtn");
togglebtn.onclick = (_) => {
  theamSettings.classList.toggle("activesetting");
  opacityBodyColer();
};
let removeActiveC = (_) => {
  for (i = 0; i < colorBoxs.length; i++) {
    colorBoxs[i].classList.remove("activeColor");
  }
};
opacityBody.onclick = (_) => {
  theamSettings.classList.remove("activesetting");
};
colorBoxs.forEach((colorBox) => {
  colorBox.onclick = (_) => {
    removeActiveC();
    colorBox.classList.add("activeColor");
    colorsId.forEach((color) => {
      body.classList.remove(color);
    });
    body.classList.add(colorBox.id);
    theamSettings.classList.remove("activesetting");
    opacityBodyColer();
    changeBgImg();
    drawImgAgain();
  };
});

// toggle between Day and Night mode
const mode = document.querySelector(".mode");
const modeI = document.querySelector(".mode i");
let changeMode = (_) => {
  modeI.classList.toggle("bx-sun");
  modeI.classList.toggle("bxs-moon");
  body.classList.toggle("dark");
  drawImgAgain();
};
mode.onclick = changeMode;

// My Portfolio
const portGallery = document.querySelector(".portfolio-gallery");
let imgName = [
  "NatureNest Realty",
  "New-Horizons",
  "Prayar_Time",
  "Tazza",
  "CRUDS",
  "Editor",
];
let ProName = [
  "NatureNest Realty",
  "New Horizons",
  "Prayar Time",
  "Tazza",
  "CRUDS",
  "Editor",
];
let describingP = [
  "A site for real estate trade and investment",
  "A travel and adventure website",
  "A website displaying a prayer times API",
  "An e-commerce site for vegetables and fruits",
  "Merchandise store",
  "A site for uploading and editing images",
];
let category = [
  "React ",
  "Interactive CRUDS",
  "React Interactive",
  "",
  "CRUDS Interactive",
  "Interactive",
];
let myPortfolioList = (_) => {
  let emptyPortGallery = "";
  for (i = 0; i < imgName.length; i++) {
    if (i == 0 || i == 2) {
      emptyPortGallery += `
    <div class="port-box mix ${category[i]} scrollScale">
      <div class="port-image">
        <img src="./portfolio/${imgName[i]}.jpg" alt="" />
      </div>
      <div class="port-content">
        <h3>${ProName[i]}</h3>
        <p>
          ${describingP[i]}
        </p>
        <div class="portoLinks">
          <a href="https://github.com/Kareem-Nasrallah/${imgName[i]}" target="_blank"><i class='bx bxl-github' ></i></a>
        </div>
      </div>
    </div>`;
    } else {
      emptyPortGallery += `
    <div class="port-box mix ${category[i]} scrollScale">
      <div class="port-image">
        <img src="./portfolio/${imgName[i]}.jpg" alt="" />
      </div>
      <div class="port-content">
        <h3>${ProName[i]}</h3>
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
  }
  portGallery.innerHTML = emptyPortGallery;
};
myPortfolioList();
let mixer = mixitup(".portfolio-gallery");

// mack the contact run
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");
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

// open & close the menu
const logo = document.getElementById("logo");
const nav = document.querySelector("nav");
const menuIcon = document.getElementById("menu-icon");
menuIcon.onclick = (_) => {
  logo.classList.toggle("openClosLogo");
  nav.classList.toggle("openMenu");
  menuIcon.classList.toggle("bx-x");
};
window.onscroll = (_) => {
  activeMenu();
  logo.classList.remove("openClosLogo");
  nav.classList.remove("openMenu");
  menuIcon.classList.remove("bx-x");
  theamSettings.classList.remove("activesetting");
  opacityBodyColer();
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
