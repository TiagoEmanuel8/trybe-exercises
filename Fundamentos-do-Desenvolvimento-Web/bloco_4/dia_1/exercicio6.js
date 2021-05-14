let peca = "rei";

switch (peca) {

    case "rei":
        console.log("Rei se move em qualquer direção e sem limite de casa");
        break;
    case "rainha":
        console.log("A Rainha se move em qualquer direção mas com o limete de se deslocar apenas uma casa");
        break;
    case "bispo":
        console.log("Se move em diagonais e sem limite de casa");
        break;
    case "cavalo":
        console.log("Se move em formato de L");
        break;
    case "torre" :
         console.log("Se move para frente/trás e sem limite de casa");
         break;
    case "peao" :
         console.log("Se move para frente com o limite de andar apenas uma casa");
         break;
}
