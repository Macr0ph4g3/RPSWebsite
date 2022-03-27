let computerDecision = 'rock';
let playerDecision = '';
let computerPoints = 0;
let playerPoints = 0;

let playerLives = document.querySelector('.playerLives')
let computerLives = document.querySelector('.computerLives')

function computerPlay() {
    //This sets an array with the possible options a computer can choose from
    const computerOptions = ['rock', 'paper', 'scissors'];
    //This sets the variable computerDecision as one of the options which will be used in playRound to calculate the winner. 
    computerDecision = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    
}


function playRound() {
    // The Tie/Win conditions
    if (computerDecision === playerDecision){
        console.log("It's a tie!");
        displayResults('You\'ve tied with the computer!');}
        else if ((playerDecision === 'rock') && (computerDecision === 'scissors')){
            console.log('You Win!');
            displayResults('Your Rock beats Scissors');
            playerPoints = (playerPoints + 1) 
            playerLives.textContent = ('Player Points: ' + playerPoints)
        }
            else if ((playerDecision === 'scissors') && (computerDecision === 'paper')) {
            console.log('You Win!');
            displayResults('Your Scissors beat Paper!');
            playerPoints = (playerPoints +1) 
            playerLives.textContent = ('Player Points: ' + playerPoints)
           
        }
            else if ((playerDecision === 'paper') && (computerDecision === 'rock')) {
                console.log('You Win');
                displayResults('Your Paper beats Rock');
                playerPoints = (playerPoints +1) ;
                playerLives.textContent = ('Player Points: ' + playerPoints);

        }
                else {
                    console.log('You Lose');
                    displayResults('It looks like he chose the better option!');
                    computerPoints = (computerPoints + 1);
                    computerLives.textContent = ('Computer Points: ' + computerPoints);
                }
}

function game() {
    //This is a simple loop statement that asks the player for their decision, displays it, activates computerPlay for the PC decision and plays a round
    for (let i = 0; i < 1; i++) {
        computerPlay();
        changeImage()
        playRound();
        DeterminePlayerWinner()
        DetermineComputerWinner()
         }
    
}

function DeterminePlayerWinner() {
    if (playerPoints == 5) {
        if (confirm('Congratulations! You win!\n Do you want to play again?') == true) {
            playerPoints = 0;
            computerPoints = 0;
            playerLives.textContent = ('Player Points: ' + playerPoints);
            computerLives.textContent = ('Computer Points: ' + computerPoints);
        }
            
    }  
    }

function DetermineComputerWinner() {
    if (computerPoints == 5) {
    if (confirm('Sorry, you lost!\n Do you want to play again?') == true) {
        playerPoints = 0;
        computerPoints = 0;
        playerLives.textContent = ('Player Points: ' + playerPoints);
        computerLives.textContent = ('Computer Points: ' + computerPoints);
    } 
} }
//This section adds listeners for rock and plays a round when rock is clicked

const rock = document.querySelector('.rockImg');

rock.addEventListener('mouseenter', function( event ) {
    rock.classList.add('hover'); });
rock.addEventListener('mouseleave', function( event ) {
    rock.classList.remove('hover'); 
});
rock.addEventListener('click', function( event ) {
    playerDecision = 'rock';
    game();
    // console.log("The Computer is playing: " + computerDecision );
    // console.log("The Player is playing: " + playerDecision);
    // console.log("The player has "+ playerPoints +" many points!");
    // console.log("The computer has "+ computerPoints +" many points!");
});


//This section adds listeners for paper and plays a round when paper is clicked

const paper = document.querySelector('.paperImg');

paper.addEventListener('mouseenter', function( event ) {
    paper.classList.add('hover'); });
paper.addEventListener('mouseleave', function( event ) {
    paper.classList.remove('hover'); });
    paper.addEventListener('click', function( event ) {
        playerDecision = 'paper';
        game();
        // console.log("The Computer is playing: " + computerDecision );
        // console.log("The Player is playing: " + playerDecision);
        // console.log("The player has "+ playerPoints +" many points!");
        // console.log("The computer has "+ computerPoints +" many points!");
    });

    //This section adds listeners for Scissors and plays a round when scissors is clicked
const scissors = document.querySelector('.scissorsImg');
scissors.addEventListener('mouseenter', function( event ) {
    scissors.classList.add('hover'); });
                
scissors.addEventListener('mouseleave', function( event ) {
    scissors.classList.remove('hover'); });
    scissors.addEventListener('click', function( event ) {
        playerDecision = 'scissors';
        game();
        // console.log("The Computer is playing: " + computerDecision );
        // console.log("The Player is playing: " + playerDecision);
        // console.log("The player has "+ playerPoints +" many points!")
        // console.log("The computer has "+ computerPoints +" many points!")
    });

    // this section changes the computer image

let compImg = document.querySelector('.compDecision')
function changeImage() {
    if (computerDecision == 'rock') {
        document.querySelector('.compDecision').src=("Rock.png");
}   else if (computerDecision == 'paper') {
    document.querySelector('.compDecision').src=("Paper.png");
}   else if (computerDecision == 'scissors') {
    document.querySelector('.compDecision').src=("Scissors.png");
}
}

// this section display results in displayRoundInformation

const displayRoundInformation = document.querySelector('.displayRoundInformation');

function displayResults(str) {
displayRoundInformation.animate([{opacity: 0}, {opacity: 1}], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
});
    displayRoundInformation.textContent = str;
}