const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const projectImg = document.getElementById("project-img");
let projectLink = document.getElementById("project-link");

const descriptions = [
  " Dynamic landing page for an upcoing Bar-Lounge / Clothing Store.",
  "Blog Application Created with Node.JS and MongoDB",
  "Meditation Application",
  "HTML Email based on next-generation consoles.",
];
const links = [
  "https://github.com/SYL0/nv-lounge",
  "https://bit.ly/2vX4mC9",
  "https://github.com/SYL0/meditations",
  "https://github.com/SYL0/nextGenNewsletter",
];
const descriptionBox = document.getElementById("description-box");

let counter = 0;

rightArrow.addEventListener("click", nextSlide);
rightArrow.addEventListener("touchstart", nextSlide);
leftArrow.addEventListener("click", prevSlide);
leftArrow.addEventListener("touchstart", prevSlide);

function nextSlide() {
  projectImg.animate([{ opacity: "0.1" }, { opacity: "1" }], {
    duration: 1000,
    fill: "forwards",
  });
  if (counter === 3) {
    counter = -1;
  }
  counter++;

  projectImg.style.backgroundImage = `url(img/project-${counter}.png)`;

  descriptionBox.innerHTML = descriptions[counter];

  document.getElementById("project-link").href = links[counter];
}
function prevSlide() {
  projectImg.animate([{ opacity: "0.1" }, { opacity: "1" }], {
    duration: 1000,
    fill: "forwards",
  });

  if (counter === 0) {
    counter = 4;
  }
  counter--;

  projectImg.style.backgroundImage = `url(img/project-${counter}.png)`;

  descriptionBox.innerHTML = descriptions[counter];

  document.getElementById("project-link").href = links[counter];
}
