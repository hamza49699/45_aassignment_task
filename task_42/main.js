"use strict";
//task 42
//
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
// Call makeGreat() to modify the array
const greatMagicians = makeGreat(magicianNames);
// Call the function to show magicians
showMagicians(greatMagicians);
