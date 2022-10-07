const body = document.querySelector("body");

const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
];
const background = document.querySelector("#background");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = `url(img/${chosenImage})`;

body.style.backgroundImage = bgImg;
