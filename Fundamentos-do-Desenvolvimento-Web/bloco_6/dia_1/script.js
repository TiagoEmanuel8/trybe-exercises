let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

let captureEstados = document.querySelector("#select-estado");

for (let index = 0; index < estados.length; index += 1) {
    let criarEstados = estados[index];

    let option = document.createElement("option");
    option.innerText = criarEstados;
    option.value = criarEstados;

    captureEstados.appendChild(option);
};

//essa função tem como objetivo validar as datas
function validateData () {
    let data = document.querySelector('#input-data-ini').value;
    //o split faz a seṕaração dos termos do array
    let dataArray = data.split('/');
    //o parseInt transforma um texto em números, mas porque isso? os dados 
    let dia = parseInt(dataArray[0]);
    let mes = parseInt(dataArray[1]);
    let ano = parseInt(dataArray[2]);
    if (!(dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 0)) {
       return 'Data inválida, reveja os dados inseridos e tente novamente';
    }
    return '';
}

let captureButton = document.querySelector('#submit');
captureButton.addEventListener('click', validate);

function validate (event) {
    //essa propriedade previne que dados errados sejam enviados qd clicar em submit
    event.preventDefault();

    
    let erro;
    let erros;
    erro = validateData ();
    //se  o erro for diferente de vazio, se vier vazio o campo está ok
    if (erro != '' ) {
        //variável que vai armazenar todos os erros
        erros += `${erro}\n`;
    }
    //selecionar todos os input text do formulário e criar um laço -> verificar se estão vazios
    let inputsText = document.querySelectorAll('input[type=text');
    for (let index = 0; index < inputsText.length; index += 1) {
        let input = inputsText[index];
        //vou pegar todos os inputs que tem o required e fazer validações de preenchimento e caso não seja vou
            if (input.required){
                //se o valor 'required' tiver vazio
                if (input.value === '') {
                    input.classList.add("error");
                    erros += `O campo ${input.name} é obrigatório\n`;
                  }
                  if (input.minlength && input.value.length < input.minlength) {
                    input.classList.add("error");
                    erros += `O campo ${input.name} deve possuir no mínimo ${input.minlength} caracteres\n`;
                  }
                }
              }
            
              if (erros !== '') {
                event.preventDefault();
                alert(erros);
              } else {
                for (let index = 0; index < inputsText.length; index += 1) {
                  inputsText[index].classList.remove("error");
                }
              }
            };