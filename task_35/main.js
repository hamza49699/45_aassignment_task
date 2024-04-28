//task 35
var animals = ["dog", "cat", "rabbit"];
// Loop through the list of animals and print each one
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print a statement about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
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
