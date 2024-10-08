let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let sourses = [
  "/img/images/dice1.png",
  "/img/images/dice2.png",
  "/img/images/dice3.png",
  "/img/images/dice4.png",
  "/img/images/dice5.png",
  "/img/images/dice6.png",
];
let sourse1 = sourses[Math.floor(Math.random() * 6)];
let sourse2 = sourses[Math.floor(Math.random() * 6)];
img1.setAttribute("src", sourse1);
img2.setAttribute("src", sourse2);
if (sourse1 === sourse2) {
  document.querySelector("h1").innerHTML = "Try again";
} else if (sourse1 > sourse2) {
  document.querySelector("h1").innerHTML = "Player 1 is the winner";
} else {
  document.querySelector("h1").innerHTML = "Player 2 is the winner";
}
