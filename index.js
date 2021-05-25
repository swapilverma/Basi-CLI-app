//IMPORTS
var readlineSync = require("readline-sync");
const chalk = require("chalk");

//FUNCTION
function play(ques,ans) {
  var uans = readlineSync.question(chalk.hex("#F59E0B")("Ques."+(i+1)+ " : " +ques+" \n")+"Ans."+(i+1)+" : ");

  if (uans.toUpperCase() === ans.toUpperCase() ) {
    console.log(chalk.bgGreen.blue.bold("Right!"));
    score++;
  }

  else {
    console.log(chalk.bgRedBright.black.bold("Wrong!"));
  }
  console.log("Score : "+ score);
  console.log('-----------------------------------')
}

//INPUTS 
name = readlineSync.question(chalk.hex("#064E3B").bold("Type your Name = "));
console.log(chalk.hex("#064E3B").bold("\nHI "+name+"!! \nLets play and see if you know me \n"));

var ques = ["What is my favourite Sports ?", "What color do i like the most ?", "What is my go to series ?", "What is my favourite fruit ?","What is my favourite animal ?"];
var ans = ["Football", "Black", "Friends", "Watermellon", "Dog" ];
var score = 0;

//PROCESSING
for (var i=0; i<ques.length; i++) {
    play(ques[i],ans[i]);
  }

//OUTPUT
console.log(chalk.hex("#F59E0B").bold("Your Total Score = "+score));
console.log(chalk.hex("#F59E0B").bold("\nThanks for playing"))

//DATA FROM FREINDS 
var data = {
  Simphia: 5,
  Sehaj : 4,
  Aditya : 2,
  Abhijeet :3 ,
}

console.log (chalk.hex("#064E3B").bold("\n\nScores collected\n"))

//PROCESSING
var highScorer, max = 0;
for (const [key, value] of Object.entries(data)) {
  console.log(chalk.hex("#F59E0B").bold(key+":"+value))
  if (value > max) {
    max = value
    highScorer = key
  } 
}

//OUTPUT
console.log (chalk.hex("#064E3B").bold.bgYellow("\nHighest Scorer = "+ highScorer));

//END OF CODE