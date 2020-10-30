
// variable Declaration

let playerSelection = prompt("Please  Select 'Rock', 'Paper' or 'Scissors' To Play"); 
let choices = ['rock', 'paper', 'scissors'];

// looping to ensure the user enters valid selection

function checkInput(){
    if(playerSelection == "" || choices.includes(playerSelection.toLowerCase)){
        alert("You Must Type 'Rock', 'Paper' or 'Scissors'! To Play");
        playerSelection = prompt("Please  Type 'Rock', 'Paper' or 'Scissors' To Play");
        checkInput();
    }
}


let computerSelection = computerPlay().toLowerCase();

checkInput();

playRound(playerSelection, computerSelection);

game(playerSelection, computerSelection);

// Function that randomizes the computers play
function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * Math.floor(3));
    return choices[randomNumber];
}

// checking winner,looser,tied for playerselection=rock
function detectLossOrWin(playerSelection, computerSelection){  
        if(playerSelection == "rock"){
            if(computerSelection == "paper"){
                return "win";
            }else if(computerSelection == "rock"){
                return "tied";
            }else{
                return "lose";
            }
        }
            
        
       
            
        
        // checking winner,looser,tied for playerselection=scissor
        if(playerSelection == "scissors"){
            if(computerSelection == "scissors"){
                return "tied";
            }else if(computerSelection == "rock"){
                return "lose";
            }else{
                return "win";
            }   
        }
         // checking winner,looser,tied for playerselection=paper
         if(playerSelection == "paper"){
            if(computerSelection == "paper"){
                return "tied";
            }else if(computerSelection == "scissors"){
                return "lose"
            }else{
                return "win"
            }
        }
                         
}

// checking the winner after five rounds
function game(playerSelection, computerSelection){
    let computerWinCount;
    let playerWinCount;

    // loop five times
    for(let i = 0; i < 5; i++){
        let result = detectLossOrWin(playerSelection, computerSelection);
        if(result === "win"){
            playerWinCount += 1;
        }else if(result === "lose"){
            computerWinCount += 1;
        }
        compututerSelection = computerPlay();
    }

    if(playerWinCount > computerWinCount){
        console.log("You won more games out of five!");
    }else if(computerWinCount > playerWinCount){
        console.log("The computer won more games out of five!");
    }else{
        console.log("You and the computer tied out of five!");
    }
}

function playRound(playerSelection, computerSelection){
    let result = detectLossOrWin(playerSelection, computerSelection);
    console.log(result);

    if(result == "tied"){
        console.log(`You ${result}!`);
       
    }else if(result == "win"){
        console.log(`You ${result}! ${playerSelection} Beats ${computerSelection}!`);
        
    }
    else{
        console.log(`You ${result} lose! ${computerSelection} Beats ${playerSelection}`);
        
    }
}
