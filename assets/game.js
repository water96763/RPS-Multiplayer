var firebaseConfig = {
  apiKey: "AIzaSyD_VGtjv7kDNL7tHP4mXxUcQTqCUitvi-s",
  authDomain: "rps-database-c3986.firebaseapp.com",
  databaseURL: "https://rps-database-c3986.firebaseio.com",
  projectId: "rps-database-c3986",
  storageBucket: "",
  messagingSenderId: "72398744962",
  appId: "1:72398744962:web:e655a0cd5d8ad5c4"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();

let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneScoreSpan = document.getElementById("scoreOne");
let playerTwoScoreSpan = document.getElementById("scoreTwo");
let weapon = "";
let name= "";
// let connectionsRef = database.ref("/connections");
// let connectedRef = database.ref(".info/connected");


$("#toServer").on("click", function(event) {
  event.preventDefault();
  name = $("#name").val().trim();
  weapon = $("input[name='weapon']:checked").val().trim();
  database.ref().set({
    name: name,
    weapon: weapon,
  });
});


// connectedRef.on("value", function(snap) {
//   if (snap.val()) {
//     let con = connectionsRef.push(true);
//     con.onDisconnect().remove();
//   }
// });
// connectionsRef.on("value", function(snapshot) {
//   $("#children").text(snapshot.numChildren());
// });

database.ref().on("value", function(snapshot) {
  console.log(snapshot.val().name);
  console.log(snapshot.val().weapon);
  console.log(snapshot.val());
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});


//  $("#toServer").on("click", function(event) {
//     event.preventDefault();
//     playerOneName = $("#player-name").val().trim(); 
//     alert("Welcome!");
//     $("#nameOne").val("");
//     $("nameOne").hide();
//     $("#toServer").hide();
//     database.ref().set({
//       playerOne: playerOneName,

//   })
//  });


  
  

// database.ref().on()





// function randomComputerChoice() {
//     let computerArray = ["r", "p", "s"];
//     let randomIndex = Math.floor(Math.random() * 3);
    
//         if (computerArray[randomIndex] = "r") {
//             $("#computerChoice").prepend('<img src="assets/images/rock image.jpg" id="rock" width="25%"/>'); 
//         }
//         else if (computerArray[randomIndex] = "p") {
//             $("#computerChoice").prepend('<img src="assets/images/paper picture.jfif" id="paper" width="30%"/>');
//         }
//         else {
//             $("#computerChoice").prepend('<img src="assets/images/scissors pic.jpg" id="scissors" width="25%"/>');
//         }
//         console.log(computerArray[randomIndex]);    
//     }
    
    // function rpsGame(userChoice) {
    //     let compChoice = randomComputerChoice();
    //   }
    // console.log("userChoice " + userChoice);
    // console.log("computerChoice " + compChoice);
    

    //  $(document).keypress(function(e) {
    //     let playerOneChoice = "rock";   
    //    $("#playerOneChoice").prepend('<img src="assets/images/rock image.jpg" id="rock" width="25%"/>');
        
    // });
    
    // $(paperButton).click (function() {
    //     rpsGame("paper");
    //     userChoice = "paper";
    //     $("#yourChoice").prepend('<img src="assets/images/paper picture.jfif" id="paper" width="30%"/>');
        
    // });
    // $(scissorsButton).click (function() {
    //     rpsGame("scissors");
    //     userChoice = "scissors";
    //     $("#yourChoice").prepend('<img src="assets/images/scissors pic.jpg" id="scissors" width="25%"/>');
        
//     // });
// }


// userChoices();


$("#startPage").click (function() {
    // startGame();
    instructions.style.display = "none";
    game.style.display = "block";
});


// startGame()