// classes representam caracteristicas de alguma função

class dvdMovie {
  title: string
  director: string
  realeseDate: number
  // primeiramente vão bater no construtor
  constructor(title: string, director: string, realeseDate: number) {
    this.title = title;
    this.director = director;
    this.realeseDate = realeseDate;
  };
  // ação de play
  play(): void { console.log('Play movie ...') };
  // ação de pause
  pause(): void { console.log('Pause movie ...') };
  // ação de stop
  stop(): void { console.log('Stop movie ...') };
  // função para formatar retorno da classe
  toString(): string {
    return `Titulo: ${this.title}, Diretor: ${this.director}, Ano de Lançamento: ${this.realeseDate}`
  }
};

const dvdMovie1 = new dvdMovie('Spider-man', 'Sam-raine', 2002);
console.log(dvdMovie1.toString());