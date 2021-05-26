let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let odd = 0;

for (let counter = 0; counter < numbers.length; counter++) {
   if (numbers[counter] % 2 !== 0){
       odd++;
    } 
}

if (odd === 0) {
    console.log("Nenhum valor encontrado");
} else {
    console.log(odd);
}
