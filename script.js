const getUserChoice = userInput => {
    // userInput = userInput.toLowerCase()
    if (userInput === 'rock') {
      return userInput;
    } else if(userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else {
      console.log('error');
    }
  }
  
  function getComputerChoice() {
    let x = Math.floor(Math.random()*3);
    if(x === 0) {
      return 'rock';
    } else if (x === 1) {
      return 'paper';
    } else if (x===2) {
      return 'scissors';
    }
  }
  
  // console.log(getComputerChoice());
  function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) {
      return 'it is tie'
    }
    if(userChoice ==='rock') {
      if (computerChoice ==='paper') {
        return 'compuer won'
      } else {
        return 'You won'
      }
    }
    if(userChoice === 'paper') {
      if(computerChoice === 'rock') {
        return 'computer won';
      } else {
        return 'You won';
      }
    }
  
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'You won';
      } else {
        return 'Computer won';
      }
    }
  }
  
  function playGame() {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);  
    console.log(determineWinner(userChoice, computerChoice))
    }
  playGame();
  