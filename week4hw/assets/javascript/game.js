$(document).ready(function() {

//Global Variables
var computerNumber = 0;
var totalScore = 0;
var winCount = 0;
var loseCount = 0;
var savedNum1 = Math.floor(Math.random() * 12) + 1;
var savedNum2 = Math.floor(Math.random() * 12) + 1;
var savedNum3 = Math.floor(Math.random() * 12) + 1;
var savedNum4 = Math.floor(Math.random() * 12) + 1;

//Click Functions

$("#orange").click(function() {
  totalScore=totalScore+savedNum1;    
  $("#scoreNum").html(totalScore);
  scoreCheck();
});

$("#purple").click(function() {
  totalScore=totalScore+savedNum2;    
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#yellow").click(function() {
  totalScore=totalScore+savedNum3;    
  $("#scoreNum").html(totalScore);
  scoreCheck();
});


$("#blue").click(function() {
  totalScore=totalScore+savedNum4;
  $("#scoreNum").html(totalScore);
  scoreCheck();
});

//Main Process
newGame();

function newGame() {
totalScore = 0; 
computerNumber =  Math.floor(Math.random() * (102) + 19);
savedNum1 = Math.floor(Math.random() * 12) + 1;
savedNum2 = Math.floor(Math.random() * 12) + 1;
savedNum3 = Math.floor(Math.random() * 12) + 1;
savedNum4 = Math.floor(Math.random() * 12) + 1;
$("#compNum").html(computerNumber);
$("#scoreNum").html(totalScore);
};


function scoreCheck() {
  if (totalScore==computerNumber){
    winCount++;
    $("#winCount").html(winCount);
    $("#message").html("You won!");
    newGame();
  }else if(totalScore>computerNumber){
    loseCount++;
    $("#loseCount").html(loseCount);
    $("#message").html("You lost");
    newGame();
  }
}
  
});
