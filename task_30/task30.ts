let HelloAdmins: string[] = ["admin", "Hamza", "Haris", "Huzaifa", "Affan"];

// Loop through the array and print greetings
for (let user of HelloAdmins) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}