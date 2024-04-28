//task 42
//
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

// Call makeGreat() to modify the array
const greatMagicians = makeGreat(magicianNames);

// Call the function to show magicians
showMagicians(greatMagicians);