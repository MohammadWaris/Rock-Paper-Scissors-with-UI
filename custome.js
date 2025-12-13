// the 1 === rock, 2 ===  paper, 3 === scissors

(function (){
    let userScore = 0;
    let computerScore = 0;
    let computerChoice = "" 
    
    document.querySelector("#userScore").textContent = userScore;
    document.querySelector("#computerScore").textContent = computerScore;
    
    const handleClick = (event)=>{
        
        const userClicked = event.target.id;
        const randNum = Math.ceil(Math.random() * 3);
        console.log(randNum)
        if(randNum === 1 && userClicked !== "rock"){
            if(userClicked === "paper"){
                userScore += 1;
            }else{
                computerScore += 1;
            }
            computerChoice = "rock"
        }else if(randNum === 2 && userClicked !== "paper"){
            if(userClicked === "rock"){
                computerScore += 1;
            }else{
                userScore += 1;
            }
            computerChoice = "paper"
        }else if(randNum === 3 && userClicked !== "scissors"){
            if(userClicked === "paper"){
                computerScore += 1;
            }else{
                userScore += 1;
            }
            computerChoice = "scissors"
        }
        
    document.querySelector("#userScore").textContent = userScore;
    document.querySelector("#computerScore").textContent = computerScore;


    }
     const rock =  document.querySelector("#rock").addEventListener('click',handleClick);    
     const paper = document.querySelector("#paper").addEventListener('click',handleClick);
     const scissors = document.querySelector("#scissors").addEventListener('click',handleClick);
    
     document.querySelector("#refresh").addEventListener("click",()=>{
        userScore = 0;
        computerScore = 0;
        
    document.querySelector("#userScore").textContent = userScore;
    document.querySelector("#computerScore").textContent = computerScore;

     })
})();