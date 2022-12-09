// Set global DOM (Document Object Model) variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const yourChoice = document.getElementById("yourChoice");
const computerChoice = document.getElementById("computerChoice");

// Set other global variables / arrays
const icons = ["fa-solid fa-hand-back-fist", "fa-solid fa-hand", "fa-solid fa-hand-scissors"];

// Event listeners
rock.addEventListener("click", selectRock);
paper.addEventListener("click", selectPaper);
scissors.addEventListener("click", selectScissors);


// functions
function selectRock() {
    yourChoice.className = icons[0];
}

function selectPaper() {
    yourChoice.className = icons[1];
}

function selectScissors() {
    yourChoice.className = icons[2];
}



/*
rock.addEventListener("click", select("rock"));
paper.addEventListener("click", select("paper"));
scissors.addEventListener("click", select("scissors"));

function select(choice) {
    if(choice=="rock"){
        yourChoice.className = "fa-solid fa-hand-back-fist";
    } else if(choice=="paper") {
        yourChoice.className = "fa-solid fa-hand";
    } else {
        yourChoice.className = "fa-solid fa-hand-scissors";
    }
}
*/

// <i id="scissors" class="fa-solid fa-hand-scissors"></i>