let player1 = "Rock";
let player2 = "Paper";
if (player1 === player2) {
    console.log("Its a tie!");
}
else if ((player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Scissors" && player2 === "Paper") ||
    (player1 === "Paper" && player2 === "Rock")) {
    console.log("Player 1 win this match");
}
else {
    console.log("player2 win this match Successfully!");
}
export {};
