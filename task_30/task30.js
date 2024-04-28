var HelloAdmins = ["admin", "Hamza", "Haris", "Huzaifa", "Affan"];
// Loop through the array and print greetings
for (var _i = 0, HelloAdmins_1 = HelloAdmins; _i < HelloAdmins_1.length; _i++) {
    var user = HelloAdmins_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
