let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const outcome=document.querySelector("#play");
const conclusion=document.querySelector("#conclusion");
const playerScore=document.querySelector("#playerScore");
const computerScore=document.querySelector("#computerScore");

const genCompChoice=()=>{
     const options=["rock","paper","scissors"];
     const ranIndx=Math.floor(Math.random()*3);
     return options[ranIndx];
}

const drawGame=(userChoice, compChoice)=>{
     outcome.innerText="Draw! Try Again";
     conclusion.innerText=`Your ${userChoice} and ${compChoice} are same.`;
     outcome.style.backgroundColor="#582f0e";
}

const showWinner=(userWin, userChoice, compChoice)=>{
     if(userWin){
          userScore++;
          playerScore.innerText=userScore;
          outcome.innerText="You Won!";
          outcome.style.backgroundColor="green";
          conclusion.innerText=`Your ${userChoice} beats ${compChoice}.`;
     }
     else{
          compScore++;
          computerScore.innerText=compScore;
          outcome.innerText="You Lose!";
          outcome.style.backgroundColor="#c9184a";
          conclusion.innerText=`${compChoice} beats your ${userChoice}`;
     }
}

const playGame=(userChoice)=>{
     const compChoice=genCompChoice();
     if(userChoice===compChoice){
          drawGame(userChoice, compChoice);
     }
     else{
          let userWin=true;
          if(userChoice== "rock"){
               //system choices -> paper, scissors
               userWin= compChoice==="paper"? false: true;
          }
          else if(userChoice=="paper"){
               // system choices ->rock,scissors
               userWin= compChoice=="rock" ? true: false;
          }
          else{
               //system choices -> rock ,paper
               // userChoice->scissors
               userWin= compChoice=="rock"? false: true;
          }
          showWinner(userWin, userChoice, compChoice);
     }

}
choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
          const userChoice=choice.getAttribute("id");
          playGame(userChoice);
     })
})