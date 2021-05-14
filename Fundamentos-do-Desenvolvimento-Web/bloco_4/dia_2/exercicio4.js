let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let add = 0;
for (let counter = 0; counter < numbers.length; counter++) {
   add = (add + numbers[counter])/2;
}
if (add > 20){
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}
