function computerChoice() {
   let number = Math.floor(Math.random()*100)+1
   if (number <= 33) {
    choice = "Rock"
   }
   else if (number >= 34 && number <= 67){
    choice = "Paper"
   }
   else if (number >= 68 && number <= 100){
    choice = "Scissors"
   }
   return choice
} 

function userChoice() {
     let choice = prompt("Enter whether you want to play Rock, Paper, or Scissors")
     if (choice != "Rock" && choice != "Paper" && choice != "Scissors"){
        choice = computerChoice()
        console.log("Yeah...we kinda decided for you")
    }
    return choice
     }
let yourCounter = 0
let robotCounter = 0
function playRound(){
let robotChoice = computerChoice();
let yourChoice = userChoice();
if (robotChoice == "Paper" && yourChoice == "Rock"){
    robotCounter++
    console.log("Your rock is smothered by their paper")
}
else if (robotChoice == "Scissors" && yourChoice == "Rock"){
    yourCounter++
     console.log("Rock Crushes Scissors!")
}
else if (robotChoice == "Paper" && yourChoice == "Scissors"){
    yourCounter++
     console.log("Your scissors slice their paper into ribbons!")
}
else if (yourChoice == "Paper" && robotChoice == "Rock"){
    yourCounter++
    console.log("Your paper smothers their measly rock")
}
else if (yourChoice == "Scissors" && robotChoice == "Rock"){
    robotCounter++
     console.log("Your scissors are crushed by the ROCK")
}
else if (yourChoice == "Paper" && robotChoice == "Scissors"){
    robotCounter++
    console.log("Your paper is sliced to ribbons!")
}
else if (yourChoice == "Paper" && robotChoice == "Paper"){
    console.log("Draw!")
}
else if (yourChoice == "Rock" && robotChoice == "Rock"){
    console.log("Draw!")
}
else if (yourChoice == "Scissors" && robotChoice == "Scissors"){
    console.log("Draw!")
}
}

function playGame(){
    let keepGoing = true;
    while(keepGoing){
        playRound()
        if (yourCounter + robotCounter >=5){
            keepGoing = false;
        }}
        if (robotCounter > yourCounter){
    console.log("You Lost")
}
        else if (yourCounter > robotCounter){
    console.log("You Won!")
}}

playGame()