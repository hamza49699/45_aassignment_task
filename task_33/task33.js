var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinal_numbers_1 = ordinal_numbers; _i < ordinal_numbers_1.length; _i++) {
    var numbers = ordinal_numbers_1[_i];
    if (numbers === 1) {
        console.log("".concat(numbers, "st"));
    }
    else if (numbers === 2) {
        console.log("".concat(numbers, "nd"));
    }
    else if (numbers === 3) {
        console.log("".concat(numbers, "rd"));
    }
    else {
        console.log("".concat(numbers, "th"));
    }
}
