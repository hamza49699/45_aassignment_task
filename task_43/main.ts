//task 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
const magicianNames: string[] = [
    "Dynamo",
    "Criss Angel",
    "Derren Brown"
];

// Make a copy of the original array
const magicianNamesCopy: string[] = [...magicianNames];

// Call makeGreat() with the copy to modify the array
const greatMagicians = makeGreat(magicianNamesCopy);

// Call the function to show original magicians
console.log("Original Magicians:");
showMagicians(magicianNames);

// Call the function to show magicians with "the Great" added
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);