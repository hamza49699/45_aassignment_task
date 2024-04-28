//task31
//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
var HelloAdmins = ["admin", "Hamza", "Haris", "Huzaifa", "Affan"];
if (HelloAdmins.length === 0) {
    console.log("we need to find some users");
}
else {
    //loop to removed all the users
    HelloAdmins = [];
    console.log("all users has been removed");
}
