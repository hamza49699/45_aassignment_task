"use strict";
//task41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Array of magician's names
const magicianNames = ["David Williamson", "Cyril Takayama", "Penn Jillette", "Teller"];
// Call the function to show magicians
showMagicians(magicianNames);
