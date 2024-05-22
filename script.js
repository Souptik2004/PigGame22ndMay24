'use strict';


// name entry

// document.querySelector('#name--0').textContent = prompt("enter player 1");
// document.querySelector('#name--1').textContent = prompt("enter player 2");

//generate random dice roll between 1 and 6

const diceImage = document.querySelector('.dice');
const diceRollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton= document.querySelector('.btn--new');

let activePlayer =0;
let FinalScore =[0,0];
document.querySelector(`#score--0`).textContent =0;
document.querySelector(`#score--1`).textContent =0;


const newGameFunction = function()
{
    activePlayer =0;
    document.querySelector(`#score--0`).textContent =0;
    document.querySelector(`#score--1`).textContent =0;
    diceImage.classList.add('hidden');
};


const diceRoll =function(){
    const diceNumber = Math.trunc(Math.random()*6)+1;
    console.log(diceNumber);
    if(diceNumber!=1)
    {
        document.querySelector(`#current--${activePlayer}`).textContent = Number(document.querySelector(`#current--${activePlayer}`).textContent)+diceNumber;
    }
    else
    {
        document.querySelector(`#current--${activePlayer}`).textContent =0;
        //changing the active player
        activePlayer = Math.abs(activePlayer-1);        
    }
    return diceNumber;

}
diceRollButton.addEventListener('click',function()
{
    let rolledDiceNumber = diceRoll();
    diceImage.classList.add('hidden');

    diceImage.src =`dice-${rolledDiceNumber}.png`;
    console.log(`dice-${rolledDiceNumber}.png`);
    //console.log(rolledDiceNumber);
    


});

holdButton.addEventListener('click',function()
{
    //activePlayer = Math.abs(activePlayer-1);
    document.querySelector(`#score--${activePlayer}`).textContent = Number(document.querySelector(`#current--${activePlayer}`).textContent)+Number(document.querySelector(`#score--${activePlayer}`).textContent);
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    FinalScore[activePlayer] = Number(document.querySelector(`#current--${activePlayer}`).textContent)+Number(document.querySelector(`#score--${activePlayer}`).textContent);
    activePlayer = Math.abs(activePlayer-1);
    if(document.querySelector(`#score--${Math.abs(activePlayer-1)}`).textContent>= 30)
        {
            let playerWins = Math.abs(activePlayer-1);
            alert(`player ${playerWins+1} wins`);
            newGameFunction();
        }
        console.log(FinalScore);
});

newGameButton.addEventListener('click',newGameFunction);
