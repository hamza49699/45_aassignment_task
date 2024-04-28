//task 35
let animals: string[] = ["dog", "cat", "rabbit"];

// Loop through the list of animals and print each one
for (const animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
for (let animal of animals) {
    switch (animal) {
        case "dog":
            console.log("A dog would make a great pet.");
            break;
        case "cat":
            console.log("A cat can be an independent and affectionate companion.");
            break;
        case "rabbit":
            console.log("A rabbit can be a gentle and quiet pet.");
            break;
        default:
            console.log("This animal is not recognized.");
    }
}

// Print what these animals have in common
console.log("Any of these animals would make a great pet!");