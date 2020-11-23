let custo = 100;
let custoFinal = (custo*0.2) + custo;
let venda = 200;
let lucro = (venda - custoFinal) * 1000;

if (custo <= 0 || venda <= 0){
    console.log("O valor do custo ou da venda é menor que 0, corrija a informação e tente novamente");
} else {
    console.log("Seu lucro foi de R$ " + lucro);
}
