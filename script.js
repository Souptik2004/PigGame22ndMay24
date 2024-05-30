'use strict';

alert("Game made by soutpik karan ");
// // name entry

document.querySelector('#name--0').textContent = prompt("enter player 1");
document.querySelector('#name--1').textContent = prompt("enter player 2");

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


const modal1 = document.querySelector('.modal1');
const overlay1 = document.querySelector('.overlay1');

const closeFunction1 = function()
{
    modal1.classList.add('hidden');
    overlay1.classList.add('hidden');
}

const closeFunction = function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
document.addEventListener('click',closeFunction);
document.addEventListener('click',closeFunction1);



//generate random dice roll between 1 and 6

const diceImage = document.querySelector('.dice');
const diceRollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton= document.querySelector('.btn--new');
const closeButtonModal = document.querySelector('.close-modal');
closeButtonModal.addEventListener('click',closeFunction);

const machEndmodal = document.querySelector('.modal1');


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
    //diceImage.classList.add('hidden');

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

            let playerWinsName = document.querySelector(`#name--${playerWins}`).textContent;

            // modal1.classList.remove('.hidden');
            // overlay1.classList.remove('.hidden');
            
            alert(`${playerWinsName} wins the game`);
            newGameFunction();
        }

        console.log(FinalScore);
});

newGameButton.addEventListener('click',newGameFunction);
