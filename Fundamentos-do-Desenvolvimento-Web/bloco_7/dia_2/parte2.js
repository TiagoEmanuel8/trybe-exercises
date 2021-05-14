const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //1
  const turno = (object, key, value) => {
    object[key] = value;
  };
  turno(lesson2, 'turno', 'tarde');
  console.log(lesson2);

  //2
  const key = (object) => Object.keys(object);
  console.log(key(lesson3));

  //3
  const size = (object) => Object.entries(object).length;
  console.log(size(lesson1));

  //4
  const value = (object) => Object.values(object);
  console.log(value(lesson3));

  //5
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  console.log(allLessons)

  //6
  const count = (object) => {
    let total = 0;
    const array = Object.keys(object);
    for (index in array) {
      total += object[array[index]].numeroEstudantes;
    }
    return total;
  };
  console.log(count(allLessons));

  //7
  const valor = (obj,number) => Object.values(obj)[number];
  console.log(valor);