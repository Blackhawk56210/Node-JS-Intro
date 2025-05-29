const args = process.argv.slice(2);

function numberGuess(input, secretNumber) {
    // const input = args;
    // const secretNumber = Math.floor(Math.random() * 10) + 1;
   if (input === secretNumber) {
    return "Correct! 🎉";
   } else if (input < secretNumber) {
      return "Too Low"
   } else if (input > secretNumber) {
      return "Too High 🪴"
   }
   console.log(input);
   console.log(secretNumber);
}
const input = args;
const secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(numberGuess(input, secretNumber));