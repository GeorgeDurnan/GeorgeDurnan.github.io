const arsenalPlayers = [
  "David Raya",
  "Kepa Arrizabalaga",
  "William Saliba",
  "Ben White",
  "Gabriel Magalhães",
  "Jurriën Timber",
  "Piero Hincapié",
  "Riccardo Calafiori",
  "Myles Lewis-Skelly",
  "Martin Ødegaard",
  "Declan Rice",
  "Eberechi Eze",
  "Martín Zubimendi",
  "Mikel Merino",
  "Christian Nørgaard",
  "Bukayo Saka",
  "Gabriel Jesus",
  "Gabriel Martinelli",
  "Viktor Gyökeres",
  "Leandro Trossard",
  "Noni Madueke",
  "Kai Havertz"
];
const allPossibleOpponents = [
  "Aston Villa",
  "Bournemouth",
  "Brentford",
  "Brighton & Hove Albion",
  "Burnley",
  "Chelsea",
  "Crystal Palace",
  "Everton",
  "Fulham",
  "Leeds United",
  "Liverpool",
  "Manchester City",
  "Manchester United",
  "Newcastle United",
  "Nottingham Forest",
  "Sunderland",
  "Tottenham Hotspur",
  "West Ham United",
  "Wolverhampton Wanderers",
  "Paris Saint-Germain",
  "Barcelona",
  "Real Madrid",
  "Atlético Madrid",
  "Athletic Club",
  "Villarreal",
  "Napoli",
  "Inter Milan",
  "Atalanta",
  "Juventus",
  "Bayern München",
  "Bayer Leverkusen",
  "Eintracht Frankfurt",
  "Borussia Dortmund",
  "Marseille",
  "Monaco",
  "PSV Eindhoven",
  "Ajax",
  "Sporting CP",
  "Union Saint-Gilloise",
  "Galatasaray",
  "Slavia Praha",
  "Olympiacos"
];
const redCardReasons = [
  "serious foul play",
  "violent conduct",
  "spitting at an opponent or any other person",
  "denying an obvious goal-scoring opportunity by handling the ball",
  "denying an obvious goal-scoring opportunity by committing a foul",
  "using offensive, insulting, or abusive language or gestures",
  "receiving a second yellow card in the same match",
  "entering the field of play without permission and interfering with play",
  "stopping a promising attack with a handball or reckless challenge when already on a yellow card",
  "kicking, punching, or headbutting an opponent",
  "deliberately fouling to stop a clear counterattack",
  "making an excessively dangerous tackle or challenge",
  "biting or scratching an opponent",
  "throwing an object at an opponent, official, or spectator",
  "abusive or threatening behavior toward a referee or official"
];
const yellowCardReasons = [
  "unsporting behavior",
  "dissent by word or action",
  "persistent infringement of the Laws of the Game",
  "delaying the restart of play",
  "failing to respect the required distance at a restart (free kick, corner, throw-in)",
  "entering or re-entering the field of play without the referee's permission",
  "leaving the field of play without the referee's permission",
  "reckless challenge or tackle",
  "holding an opponent",
  "impeding the progress of an opponent without contact",
  "deliberately handling the ball",
  "unsporting celebration (removing shirt, climbing fence, etc.)",
  "simulation / diving",
  "preventing a promising attack by committing a foul"
];
function bookings(redCards, yellowCards) {
  playerCopy = [...arsenalPlayers]
  output = ""
  for (let i = 0; i <= redCards; i++) {
    randomNum = Math.floor(Math.random() * playerCopy.length)
    randomPlayer = playerCopy[randomNum]
    randomOffense = redCardReasons[Math.floor(Math.random() * redCardReasons.length)]
    output += `${randomPlayer} got a red card for ${randomOffense}\n`
    playerCopy.splice(randomNum, 1)
  }
  for (let i = 0; i <= yellowCards; i++) {
    randomNum = Math.floor(Math.random() * playerCopy.length)
    randomPlayer = playerCopy[randomNum]
    randomOffense = yellowCardReasons[Math.floor(Math.random() * yellowCardReasons.length)]
    output += `${randomPlayer} got a yellow card for ${randomOffense}\n`
    playerCopy.splice(randomNum, 1)
  }
  return output


}
function winner(score1, score2) {
  if (score1 > score2) {
    return ("Arsenal Wins")
  } else if (score1 === score2) {
    return ("It is a Draw")
  } else {
    return ("Arsenal Loses")
  }
}

function handleClick() {
  let redCards = Math.floor(Math.random() * 2)
  let yellowCards = Math.floor(Math.random() * 2)
  scoreArsenal = Math.floor(Math.random() * 5)
  scoreOpponent = Math.floor(Math.random() * 5)
  opponent = allPossibleOpponents[Math.floor(Math.random() * allPossibleOpponents.length)]


  document.getElementById("score").innerHTML = (`Arsenal ${scoreArsenal} ${scoreOpponent} ${opponent}`)
  document.getElementById("winner").innerHTML = (`${winner(scoreArsenal, scoreOpponent)}`)
  document.getElementById("info").innerHTML = (`${bookings(redCards, yellowCards)}`)

}
document.getElementById("button").addEventListener("click", handleClick)


