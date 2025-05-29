const args = process.argv.slice(2);
const input = args
// console.log("args =", args.join(" "));


const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
 res.send("Hello, World!");
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
   console.log("hello world")
});

function calculation(a, b) {
   return a + b;
}
console.log("calc =", calculation(3, 5))

// #4

const secretNumber = Math.floor(Math.round * 100) + 1

function numberGuess(input, secretNumber) {
   if (input === secretNumber) {
      return "Correct! 🎉";
   } else if ( userGuess < secretNumber) {
      return "Too Low"
   } else if (userGuess > secretNumber) {
      return "Too High 🪴"
   }
}

console.log("numberGuess =", numberGuess())