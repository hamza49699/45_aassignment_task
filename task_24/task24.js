//task24
//more conditional test
//test for equality and inequalty with strings
var name_1 = "Hamza";
var name_2 = "Hamza Javed";
var name_3 = "Muhammad Hamza Javed";
if (name_2 == name_1) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
if (name_2 != name_3) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
//Test using the lower case function
if (name_3 != name_1) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
//numeric
var age_1 = 16;
var age_2 = 18;
if (age_1 == 16) {
    console.log("eligible for admission");
}
else {
    console.log("not eligible");
}
if (age_1 != 18) {
    console.log("eligible for cnic");
}
else {
    console.log("not eligible");
}
//logical operators greater than, less than, equal etc
if (age_1 <= age_2) {
    console.log("younger");
}
else {
    console.log("older");
}
if (age_1 >= age_2) {
    console.log("younger");
}
else {
    console.log("older");
}
// and , or logical operators
if (age_1 == 16 && age_2 == 18) {
    console.log("both conditions are satisfied so this is AND logical operator");
}
if (age_1 == 16 || age_2 != 18) {
    console.log("both conditions are not satisfied so this is OR logical oper");
}
var country = ["Pakistan", "India", "Nepal", "Bhutan"];
if (country.includes("Nepal")) {
    console.log("Nepal is in country list");
}
if (country.includes("America")) {
    console.log("America is not in country list");
}
