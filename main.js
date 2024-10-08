let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let sourses = [
  "/dice1.png",
  "/dice2.png",
  "/dice3.png",
  "/dice4.png",
  "/dice5.png",
  "/dice6.png",
];
let sourse1 = sourses[Math.floor(Math.random() * 6)];
let sourse2 = sourses[Math.floor(Math.random() * 6)];
img1.setAttribute("src", sourse1);
img2.setAttribute("src", sourse2);
if (sourse1 === sourse2) {
  document.querySelector("h1").innerHTML = "Try again";
} else if (sourse1 > sourse2) {
  document.querySelector("h1").innerHTML = "Player 💀 is the winner";
} else {
  document.querySelector("h1").innerHTML = "Player 🤡 is the winner";
}
