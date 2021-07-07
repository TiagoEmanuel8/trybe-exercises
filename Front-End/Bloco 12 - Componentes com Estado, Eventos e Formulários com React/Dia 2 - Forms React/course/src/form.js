// dúvidas? consulte https://pt-br.reactjs.org/docs/forms.html

import React from 'react';
import Email from './email';

class Form extends React.Component {
  // 1 - Essa parte é para definir o valor inicial do campo
  constructor(props) {
    super(props)
    this.state = {
      estadoFavorito: '',
      email: ''
    }
    // 3 - Em classe Js é necessário bindar para nao dá erro
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  };

  // 2 - Função que vai alterar o estado
  handleTextAreaChange(event) {
    this.setState({ estadoFavorito: event.target.value })
  };

  handleChange({ target }) {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  // handleChange({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  
  //   this.setState({
  //     [name]: value,
  //   });
  // }
  
    render() {
      return(
        <div>
          <h1> Estados e React: ferramenta incrível ou reagindo a regionalismos?</h1>
          <form>
            <label>
              Diga qual é o seu Estado favorito!
              <textarea 
                name="estadoFavorito"
                // Captura o estado atual do componente
                value={this.state.estadoFavorito} 
                // Aqui que o valor do estado é modificado
                onChange={this.handleTextAreaChange} 
              />
            </label>
            <Email value={this.state.email} handleChange={this.handleChange} />
            <label>
              Nome
              <input nome="nome" type="text"/>
            </label>
          </form>
            <label>
              Idade
              <input nome="idade" type="text"/>
            </label>
            <label>
              Vai comparecer a conferência?
              <input nome="vaiComparecer" type="checkbox"/>
            </label>
            <label>
              Escolha uma palavra chave favorita:
              <select name="palavraChaveFavorita">
                <option value="estado">Estado</option>
                <option value="evento">Evento</option>
                <option value="props">Props</option>
                <option value="hooks">Hooks</option>
              </select>
            </label>
        </div>
      );
    }
}

export default Form;

// import React from 'react';

// class Pokemon extends React.Component {
//     render() {
//         const { name, type, averageWeight, image } = this.props.pokemon;

//         return (
//             <div className="pokemon">
//                 <div>
//                     <p> {name} </p>
//                     <p> {type} </p>
//                     <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
//                 </div>
//                 <img src={image} alt={`${name} sprite`} />
//             </div>
//         );
//     }
// }

// export default Pokemon;