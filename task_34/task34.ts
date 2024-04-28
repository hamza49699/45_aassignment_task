const pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Printing pizza names using a for loop
console.log("My favorite pizzas:");
for (let i: number = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}

// Printing sentences about each pizza
console.log("\nMy thoughts on each pizza:");
for (let i: number = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}

// Additional sentence
console.log("\nI really love pizza!");