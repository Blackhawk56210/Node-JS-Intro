const args = process.argv.slice(2);

function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}
const str = args[0];
// console.log(isPalindrome(str));
console.log(process.argv.slice(2))