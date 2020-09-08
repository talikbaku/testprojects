let userName = '';
userName?console.log(`Hello, ${userName}!`):console.log('Hello!');
let userQuestion = 'How do you do?';
console.log(`hey: ${userQuestion}`);
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';
if(randomNumber === 1){
    eightBall = 'It is certain';}
if(randomNumber === 2){
    eightBall = 'It is decidedly so';
}
if(randomNumber === 3){
    eightBall = 'Reply hazy try again';
}
if(randomNumber === 4){
    eightBall = 'Cannot predict now';
}
if(randomNumber === 5){
    eightBall = 'Do not count on it';
}
if(randomNumber === 6){
    eightBall = 'My sources say no';
}
if(randomNumber === 7){
    eightBall = 'Outlook not so good';
}
if(randomNumber === 0){
    eightBall = 'Signs point to yes';
}

console.log(eightBall);
console.log(randomNumber);