//task28
var Personage = 66;
if (Personage < 2)
    console.log("the person is a baby.");
else if (Personage >= 2 && Personage < 4) {
    console.log("the person is a toddler.");
}
else if (Personage >= 4 && Personage < 13) {
    console.log("the person is a kid.");
}
else if (Personage >= 13 && Personage < 20) {
    console.log("the person is a teenager.");
}
else if (Personage >= 20 && Personage < 65) {
    console.log("the person is an adult.");
}
else {
    console.log("the person is an elder.");
}
