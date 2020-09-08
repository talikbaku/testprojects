const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'|| userInput === 'paper'|| userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else {console.log('error message')}
};
// console.log(getUserChoice('error'))
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
//console.log(getComputerChoice())


let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'game olei';
    };
    if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'computer won';
        } else {
            return 'user won';
        }
    };
    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'computer won';
        } else {
            return 'user won';
        }
    };
    if (userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'computer won';
        } else {
            return 'user won';
        }
    };
    if (userChoice === 'bomb'){
        return 'user won'
    }
};
console.log(determineWinner('scissors', 'rock'))

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('User choice ' + userChoice);
    console.log('computer choice ' + computerChoice);
//determineWinner(userChoice1, computerChoice1);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();



