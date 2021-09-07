var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

const questions = [
    {
        question: "Where do I live? ",
        answer: "Kolkata"
    },
    {
        question: "Do I have siblings?(Y/N) ",
        answer: "y"
    },
    {
        question: "How many siblings do I have? ",
        answer: "1"
    },
    {
        question: "My favorite colour? ",
        answer: "Blue"
    },
    {
        question: "My favorite book? ",
        answer: "Tuesdays with Morrie"
    },
    {
        question: "My favorite singer? ",
        answer: "Prateek Kuhad"
    },
    {
        question: "What course am I studying? ",
        answer: "Engineering"
    },
    {
        question: "Where do I work? ",
        answer: "Brand warikoo"
    },
    {
        question: "Who's my boss? ",
        answer: "Ankur Warikoo"
    }

];

const highscores = [
    {
        name: "Rashi",
        score: 7
    },
    {
        name: "Mohini",
        score: 6
    },
    {
        name: "Divya",
        score: 4
    }
];


function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green("Correct!"));
        score++;
    }
    else
        console.log(chalk.red("Wrong :( \n") + "It's " + chalk.green(answer));

    console.log("Current score is ", score);
    console.log("-----------------------")

}


function quiz(start, end) {

    for (let i = start; i <= end; i++) {
        play(questions[i].question, questions[i].answer);
    }

}


function showHighScores() {
    for (let i = 0; i < highscores.length; i++) {
        if (!(score < highscores[i].score)) {
            console.log(chalk.bgBlue("\nCongratulations! You are a high scorer!\n") + chalk.italic("(DM me the screenshot of your score, I'll add you to the high scorers' list.)"));
            break;
        }
    }

    console.log(chalk.bold.bgMagenta("\nCheck out the high scores:"));

    for (let i = 0; i < highscores.length; i++) {
        console.log(highscores[i].name + ": " + chalk.bold.blue(highscores[i].score));
    }
}

function mainDriver() {

    var userName = readlineSync.question("What's your name? ");
    console.log(chalk.yellow("\nHello " + userName + "!") + " Welcome to DO YOU KNOW MAHAK :)\n");

    console.log(chalk.bold.yellow("There are 3 levels\n") +
        chalk.italic("Each having 3 questions, if you get 2 right then only you move forward\n") +
        "Level 1: Basic details about me\nLevel 2: My favorites\nLevel 3: About my career\n");

    var ready = readlineSync.keyInYN("Are you ready?");

    if (ready) {
        console.log(chalk.bold.bgRed("\nLevel 1"));
        quiz(0, 2);
        if (score >= 2) {
            console.log(chalk.bold.green("\nCongratulations on clearing the first level! :P"));
            console.log(chalk.bold.bgRed("\nLevel 2"));
            quiz(3, 5);
            if (score >= 4) {
                console.log(chalk.bold.green("\nSeems like you know me pretty well...let's see what you got"));
                console.log(chalk.bold.bgRed("\nLevel 3"));
                quiz(6, 8);
            }
            else {
                console.log(chalk.red("Oops, you're out. Thanks for playing!"))
            }
        }
        else {
            console.log(chalk.red("Oops, you're out. Thanks for playing!"))
        }

        console.log("\nYaay! You scored: " + chalk.green(score));
    }

    showHighScores();

}

mainDriver();


