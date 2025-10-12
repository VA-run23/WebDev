const max = parseInt(prompt("Enter the max number"), 10); // Convert user input to an integer
const random = Math.ceil(Math.random() * max);

let guess = parseInt(prompt("Guess the random number"), 10);

while (true) {
    if (isNaN(guess)) {
        console.log("Invalid input. Please enter a valid number.");
        guess = parseInt(prompt("Guess the random number"), 10);
        continue;
    }

    if (guess === random) {
        console.log("You guessed the random number:", random);
        break;
    } else if (guess < random) {
        console.log("The random number is greater than the guessed number");
    } else {
        console.log("The random number is smaller than the guessed number");
    }

    guess = parseInt(prompt("Guess the random number"), 10);
}
