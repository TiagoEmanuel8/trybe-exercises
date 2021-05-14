function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split("").reverse().join("");
  let inversoFimPalavra = fimPalavra.split("").reverse().join("");

  for (let i = 0; i < inversoFimPalavra.length; i += 1) {
    if (inversoPalavra[i] != inversoFimPalavra[i]) {
      return false;
    } else {
      return true;
    }
  }
}
