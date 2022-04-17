const playerA = Math.floor(Math.random() * 6) + 1
const playerB = Math.floor(Math.random() * 6) + 1
playerAVie = 5;
playerBVie = 5
let result = document.getElementById("result")
let Allimg = document.querySelectorAll("img")
let imgA   = document.querySelector(".img1")
let imgB   = document.querySelector(".img2")


imgA.setAttribute("src", `./images/dice${playerA}.png`)
imgB.setAttribute("src",`./images/dice${playerB}.png`)

setTimeout(() => {
    playerA > playerB ? result.innerHTML = `Player 1 a gagné`  : result.innerHTML = "Player 2 a gagné"
    playerA > playerB ? playerBVie - 1 : playerAVie - 1
    playerA === playerB || playerB === playerA ? result.innerHTML = "égalité Rejouez" : null
},1000)

