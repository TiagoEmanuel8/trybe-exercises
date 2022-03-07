"use strict";
// classes representam caracteristicas de alguma função
class dvdMovie {
    // primeiramente vão bater no construtor
    constructor(title, director, realeseDate) {
        this.title = title;
        this.director = director;
        this.realeseDate = realeseDate;
    }
    ;
    // ação de play
    play() { console.log('Play movie ...'); }
    ;
    // ação de pause
    pause() { console.log('Pause movie ...'); }
    ;
    // ação de stop
    stop() { console.log('Stop movie ...'); }
    ;
    // função para formatar retorno da classe
    toString() {
        return `Titulo: ${this.title}, Diretor: ${this.director}, Ano de Lançamento: ${this.realeseDate}`;
    }
}
;
const dvdMovie1 = new dvdMovie('Spider-man', 'Sam-raine', 2002);
console.log(dvdMovie1.toString());
