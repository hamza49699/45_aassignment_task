let ordinal_numbers: number [] = [1,2,3,4,5,6,7,8,9]

for(let numbers of ordinal_numbers){
if (numbers === 1){
    console.log(`${numbers}st`)
} else if (numbers === 2){
    console.log(`${numbers}nd`)
}
else if (numbers === 3){
    console.log(`${numbers}rd`)
}
else {
    console.log(`${numbers}th`)
}
}