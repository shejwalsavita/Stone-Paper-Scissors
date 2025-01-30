
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#000";
};

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "You win! Your paper beats rock";
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = "You lose!scissors  beats Your paper";
        msg.style.backgroundColor = "brown";
    }
};

const updateScore = (winner) => {
    if (winner === "user") {
        userScore++;
    } else if (winner === "computer") {
        compScore++;
    }

    // Update score display
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
};

const playGame = (userChoice) => {
    console.log("User's choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer's choice =", compChoice);

    if (userChoice === compChoice) {
        // Draw game
        drawGame();
        updateScore("draw");
    } else {
        let userWin = false;

        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper";
        }

        if (userWin) {
            showWinner(true);
            updateScore("user");
        } else {
            showWinner(false);
            updateScore("computer");
        }
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
