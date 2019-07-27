let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById("userScore");
let computerScoreSpan = document.getElementById("computerScore");
let yourChoiceDiv = document.getElementById("yourChoice");
let computerChoiceDiv = document.getElementById("computerChoice");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");


function randomComputerChoice() {
    let computerArray = ["r", "p", "s"];
    let randomIndex = Math.floor(Math.random() * 3);
    
    
        if (computerArray[randomIndex] = "r") {
            $("#computerChoice").prepend('<img src="rock image.jpg" id="rock" width="25%"/>'); 
              }
        else if (computerArray[randomIndex] = "p") {
            $("#computerChoice").prepend('<img src="paper picture.jfif" id="paper" width="30%"/>');
             }
        else {
            $("#computerChoice").prepend('<img src="scissors pic.jpg" id="scissors" width="25%"/>');
         }
        return computerArray[randomIndex];    
}

function rpsGame(userChoice) {
    let compChoice = randomComputerChoice();
  }
rpsGame("rock");
console.log("userChoice " +  userChoice);
console.log("computerChoice " + compChoice);


function userChoices() {

    $("#rock").click (function() {
    rpsGame("rock");   
    $("#yourChoice").prepend('<img src="rock image.jpg" id="rock" width="25%"/>');

    });

    $("#paper").click (function() {
    rpsGame("paper");
 $("#yourChoice").prepend('<img src="paper picture.jfif" id="paper" width="30%"/>');

    });
    $("#scissors").click (function() {
    rpsGame("scissors");
 $("#yourChoice").prepend('<img src="scissors pic.jpg" id="scissors" width="25%"/>');

    });
}
userChoices();
$("#start").click (function() {
    // startGame();
    instructions.style.display = "none";
    game.style.display = "block";
    });


// startGame()