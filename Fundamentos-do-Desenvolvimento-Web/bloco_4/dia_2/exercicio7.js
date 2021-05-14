let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bigger = 999;

for (let counter = 0; counter < numbers.length; counter++) {
   if (numbers[counter] < bigger){
        bigger = numbers[counter];
    }
}

console.log(bigger);
