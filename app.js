console.log ('I linked it')
let homeScore = 0
let awayScore = 0
let playerName = ""

function reset() {
homeScore = 0
awayScore = 0
console.log('score reset')
drawScore()
}

drawScore()

function setPlayer(event) {
  event.preventDefault()
  let form = event.target
  playerName = form.playerName.value
  console.log(playerName)
  document.getElementById("currentplayer").innerText = playerName
}

function drawScore() {
  document.getElementById("hmescore").innerText = homeScore.toString()
  document.getElementById("awyscore").innerText = awayScore.toString()
  console.log('score drawn')
}

function add1Home() {
  homeScore ++
  console.log('one added to home score')
  drawScore()
}

function add3Home() {
  homeScore += 3
  console.log('three added to home score')
  drawScore()
}

function add1Away() {
  awayScore ++
  console.log('one added to away score')
  drawScore()
}

function add3Away() {
  awayScore += 3
  console.log('three added to away score')
  drawScore()
}