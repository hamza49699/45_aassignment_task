"use strict";
//task 43
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Array of magician's names
const magicianNames = [
    "Dynamo",
    "Criss Angel",
    "Derren Brown"
];
// Make a copy of the original array
const magicianNamesCopy = [...magicianNames];
// Call makeGreat() with the copy to modify the array
const greatMagicians = makeGreat(magicianNamesCopy);
// Call the function to show original magicians
console.log("Original Magicians:");
showMagicians(magicianNames);
// Call the function to show magicians with "the Great" added
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
